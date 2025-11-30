'use client';

import { ComponentDefinition } from '@/lib/component-registry';
import { Customization } from '@/types/customization';
import { ComponentPreview } from './ComponentPreview';
import { Button } from '@/components/ui/button';
import { RotateCcw, Maximize2, Eye } from 'lucide-react';

type LivePreviewProps = {
  component: ComponentDefinition | null;
  customization: Customization;
  onResetCustomization: () => void;
};

export function LivePreview({
  component,
  customization,
  onResetCustomization,
}: LivePreviewProps) {
  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10 bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-white/60" />
          <span className="font-medium">Live Preview</span>
          {component && (
            <span className="text-sm text-white/60">
              · {component.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetCustomization}
            className="h-8 text-white/70 hover:text-white hover:bg-white/10"
          >
            <RotateCcw className="w-3 h-3 mr-1" />
            Reset
          </Button>
        </div>
      </div>

      {/* Preview Area */}
      <div
        className="flex-1 flex items-center justify-center p-8 overflow-auto"
        style={{
          backgroundColor: customization.backgroundColor,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, ${customization.primaryColor}08 0%, transparent 50%),
            radial-gradient(circle at 80% 50%, ${customization.secondaryColor}08 0%, transparent 50%)
          `,
        }}
      >
        <ComponentPreview
          component={component}
          customization={customization}
        />
      </div>

      {/* Footer with color indicators */}
      <div className="flex items-center justify-center gap-4 p-3 border-t border-white/10 bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border border-white/20"
            style={{ backgroundColor: customization.primaryColor }}
          />
          <span className="text-xs text-white/60">Primary</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border border-white/20"
            style={{ backgroundColor: customization.secondaryColor }}
          />
          <span className="text-xs text-white/60">Secondary</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded border border-white/20"
            style={{ backgroundColor: customization.backgroundColor }}
          />
          <span className="text-xs text-white/60">Background</span>
        </div>
      </div>
    </div>
  );
}
