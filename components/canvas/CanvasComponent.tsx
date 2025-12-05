'use client';

import { useCallback, useRef, useEffect, useState } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, Trash2, GripVertical, Layers } from 'lucide-react';
import { CanvasComponent as CanvasComponentType } from '@/types/canvas';
import { useCanvasStore, VIEWPORT_DIMENSIONS } from '@/lib/stores/canvas-store';
import { ComponentPreview } from '@/components/studio/ComponentPreview';
import { getComponentById } from '@/lib/component-registry';
import { cn } from '@/lib/utils';

type CanvasComponentProps = {
  component: CanvasComponentType;
  isSelected: boolean;
  zoom: number;
};

type ResizeHandle = 'e' | 's' | 'se' | null;

export function CanvasComponentWrapper({
  component,
  isSelected,
  zoom,
}: CanvasComponentProps) {
  const {
    selectComponent,
    removeComponent,
    toggleComponentLock,
    toggleComponentVisibility,
    bringToFront,
    updateComponentPosition,
    viewportDevice,
    grid,
  } = useCanvasStore();

  // Resize state
  const [isResizing, setIsResizing] = useState(false);
  const [resizeHandle, setResizeHandle] = useState<ResizeHandle>(null);
  const resizeStartRef = useRef<{
    mouseX: number;
    mouseY: number;
    width: number;
    height: number;
  } | null>(null);

  const dimensions = VIEWPORT_DIMENSIONS[viewportDevice];

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: component.id,
    disabled: component.locked || isResizing, // Disable drag when resizing
    data: {
      type: 'canvas-component',
      component,
    },
  });

  const componentDef = getComponentById(component.componentId);

  // Resize handlers
  const handleResizeStart = useCallback(
    (e: React.MouseEvent, handle: ResizeHandle) => {
      e.preventDefault();
      e.stopPropagation();

      setIsResizing(true);
      setResizeHandle(handle);
      resizeStartRef.current = {
        mouseX: e.clientX,
        mouseY: e.clientY,
        width: component.position.width,
        height: component.position.height,
      };

      // Select the component when starting resize
      selectComponent(component.id);
      bringToFront(component.id);
    },
    [component.id, component.position.width, component.position.height, selectComponent, bringToFront]
  );

  useEffect(() => {
    if (!isResizing || !resizeStartRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!resizeStartRef.current) return;

      const deltaX = (e.clientX - resizeStartRef.current.mouseX) / zoom;
      const deltaY = (e.clientY - resizeStartRef.current.mouseY) / zoom;

      let newWidth = resizeStartRef.current.width;
      let newHeight = resizeStartRef.current.height;

      // Apply deltas based on which handle is being dragged
      if (resizeHandle === 'e' || resizeHandle === 'se') {
        newWidth = Math.max(100, resizeStartRef.current.width + deltaX);
      }
      if (resizeHandle === 's' || resizeHandle === 'se') {
        newHeight = Math.max(80, resizeStartRef.current.height + deltaY);
      }

      // Apply grid snapping if enabled
      if (grid.snap) {
        newWidth = Math.round(newWidth / grid.size) * grid.size;
        newHeight = Math.round(newHeight / grid.size) * grid.size;
      }

      // Constrain to canvas bounds
      const maxWidth = dimensions.width - component.position.x;
      const maxHeight = dimensions.height - component.position.y;
      newWidth = Math.min(newWidth, maxWidth);
      newHeight = Math.min(newHeight, maxHeight);

      updateComponentPosition(component.id, { width: newWidth, height: newHeight });
    };

    const handleMouseUp = () => {
      setIsResizing(false);
      setResizeHandle(null);
      resizeStartRef.current = null;
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isResizing, resizeHandle, zoom, grid.snap, grid.size, dimensions, component.id, component.position.x, component.position.y, updateComponentPosition]);

  // Calculate the actual position (transform from dnd-kit + stored position)
  // Use very high z-index when dragging or resizing to stay on top
  const effectiveZIndex = (isDragging || isResizing) ? 99999 : component.position.zIndex;

  const style: React.CSSProperties = {
    position: 'absolute',
    left: component.position.x,
    top: component.position.y,
    width: component.position.width,
    height: component.position.height,
    zIndex: effectiveZIndex,
    transform: CSS.Translate.toString(transform),
    cursor: component.locked ? 'not-allowed' : isDragging ? 'grabbing' : isResizing ? 'default' : 'grab',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    selectComponent(component.id, e.shiftKey || e.metaKey);
    bringToFront(component.id);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    removeComponent(component.id);
  };

  const handleToggleLock = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleComponentLock(component.id);
  };

  const handleToggleVisibility = (e: React.MouseEvent) => {
    e.stopPropagation();
    toggleComponentVisibility(component.id);
  };

  if (component.hidden) {
    // Show ghost outline when hidden
    return (
      <div
        ref={setNodeRef}
        style={style}
        className="border-2 border-dashed border-white/20 rounded-lg bg-white/5"
        onClick={handleClick}
      >
        <div className="absolute top-2 right-2 flex gap-1">
          <button
            onClick={handleToggleVisibility}
            className="p-1.5 rounded bg-black/50 text-white/60 hover:text-white hover:bg-black/70 transition-colors"
            title="Show component"
          >
            <EyeOff className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="flex items-center justify-center h-full text-white/30 text-sm">
          Hidden: {componentDef?.name || 'Component'}
        </div>
      </div>
    );
  }

  return (
    <motion.div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onClick={handleClick}
      initial={false}
      animate={{
        scale: isDragging ? 1.02 : 1,
        boxShadow: isDragging
          ? '0 20px 40px rgba(0,0,0,0.3)'
          : isSelected
          ? '0 0 0 2px #10b981, 0 8px 20px rgba(0,0,0,0.2)'
          : '0 4px 12px rgba(0,0,0,0.15)',
      }}
      transition={{ duration: 0.15 }}
      className={cn(
        'group rounded-lg overflow-hidden',
        'bg-zinc-900/90 backdrop-blur-sm border',
        isSelected ? 'border-emerald-500' : 'border-white/10',
        isDragging && 'opacity-90',
        component.locked && 'ring-2 ring-amber-500/50'
      )}
    >
      {/* Component header with controls */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-between px-2">
        {/* Drag handle */}
        <div className="flex items-center gap-1.5">
          <GripVertical className="w-4 h-4 text-white/50" />
          <span className="text-xs text-white/70 font-medium truncate max-w-[100px]">
            {componentDef?.name || 'Component'}
          </span>
        </div>

        {/* Action buttons */}
        <div className="flex items-center gap-1">
          <button
            onClick={handleToggleVisibility}
            className="p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            title={component.hidden ? 'Show' : 'Hide'}
          >
            {component.hidden ? (
              <EyeOff className="w-3.5 h-3.5" />
            ) : (
              <Eye className="w-3.5 h-3.5" />
            )}
          </button>
          <button
            onClick={handleToggleLock}
            className={cn(
              'p-1 rounded transition-colors',
              component.locked
                ? 'text-amber-400 bg-amber-500/20'
                : 'text-white/60 hover:text-white hover:bg-white/10'
            )}
            title={component.locked ? 'Unlock' : 'Lock'}
          >
            <Lock className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              bringToFront(component.id);
            }}
            className="p-1 rounded text-white/60 hover:text-white hover:bg-white/10 transition-colors"
            title="Bring to front"
          >
            <Layers className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 rounded text-white/60 hover:text-red-400 hover:bg-red-500/10 transition-colors"
            title="Remove"
          >
            <Trash2 className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Component preview content - reduced padding for precise alignment */}
      <div className="w-full h-full p-2 flex items-center justify-center overflow-hidden">
        {componentDef ? (
          <div className="transform-gpu" style={{ transform: `scale(${Math.min(1, component.position.width / 400)})` }}>
            <ComponentPreview
              component={componentDef}
              customization={component.customization}
            />
          </div>
        ) : (
          <div className="text-white/50 text-sm">Component not found</div>
        )}
      </div>

      {/* Resize handles - functional with mouse event handlers */}
      {isSelected && !component.locked && (
        <>
          {/* Right edge (E) */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'e')}
            className={cn(
              "absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-10 bg-emerald-500 rounded-full cursor-ew-resize opacity-70 hover:opacity-100 transition-opacity z-20",
              resizeHandle === 'e' && "opacity-100 bg-emerald-400"
            )}
          />
          {/* Bottom edge (S) */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 's')}
            className={cn(
              "absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-10 h-3 bg-emerald-500 rounded-full cursor-ns-resize opacity-70 hover:opacity-100 transition-opacity z-20",
              resizeHandle === 's' && "opacity-100 bg-emerald-400"
            )}
          />
          {/* Corner (SE) */}
          <div
            onMouseDown={(e) => handleResizeStart(e, 'se')}
            className={cn(
              "absolute -right-2 -bottom-2 w-4 h-4 bg-emerald-500 rounded-full cursor-nwse-resize opacity-70 hover:opacity-100 transition-opacity z-20",
              resizeHandle === 'se' && "opacity-100 bg-emerald-400"
            )}
          />
        </>
      )}

      {/* Lock indicator */}
      {component.locked && (
        <div className="absolute bottom-2 left-2 bg-amber-500/90 text-black text-xs px-2 py-0.5 rounded-full flex items-center gap-1">
          <Lock className="w-3 h-3" />
          Locked
        </div>
      )}
    </motion.div>
  );
}
