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
      <div className="flex items-center justify-between p-4 border-b bg-background/50 backdrop-blur">
        <div className="flex items-center gap-2">
          <Eye className="w-4 h-4 text-muted-foreground" />
          <span className="font-medium">Live Preview</span>
          {component && (
            <span className="text-sm text-muted-foreground">
              · {component.name}
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={onResetCustomization}
            className="h-8"
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
      <div className="flex items-center justify-center gap-4 p-3 border-t bg-background/50 backdrop-blur">
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: customization.primaryColor }}
          />
          <span className="text-xs text-muted-foreground">Primary</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded-full border"
            style={{ backgroundColor: customization.secondaryColor }}
          />
          <span className="text-xs text-muted-foreground">Secondary</span>
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-4 h-4 rounded border"
            style={{ backgroundColor: customization.backgroundColor }}
          />
          <span className="text-xs text-muted-foreground">Background</span>
        </div>
      </div>
    </div>
  );
}
