'use client';

import { useState } from 'react';
import { ComponentDefinition } from '@/lib/component-registry';
import { Customization } from '@/types/customization';
import { ComponentPreview } from './ComponentPreview';
import { Button } from '@/components/ui/button';
import { RotateCcw, Eye, Monitor, Sun, Moon, Grid3X3 } from 'lucide-react';

type PreviewBackground = 'neutral' | 'light' | 'dark' | 'checker';

const previewBackgrounds: Record<PreviewBackground, {
  label: string;
  icon: typeof Monitor;
  style: React.CSSProperties;
}> = {
  neutral: {
    label: 'Neutral',
    icon: Monitor,
    style: {
      backgroundColor: '#18181b',
      backgroundImage: 'radial-gradient(circle at 50% 50%, #27272a 0%, #18181b 100%)',
    },
  },
  light: {
    label: 'Light',
    icon: Sun,
    style: {
      backgroundColor: '#f4f4f5',
      backgroundImage: 'radial-gradient(circle at 50% 50%, #ffffff 0%, #e4e4e7 100%)',
    },
  },
  dark: {
    label: 'Dark',
    icon: Moon,
    style: {
      backgroundColor: '#09090b',
      backgroundImage: 'radial-gradient(circle at 50% 50%, #18181b 0%, #09090b 100%)',
    },
  },
  checker: {
    label: 'Checker',
    icon: Grid3X3,
    style: {
      backgroundColor: '#18181b',
      backgroundImage: `
        linear-gradient(45deg, #27272a 25%, transparent 25%),
        linear-gradient(-45deg, #27272a 25%, transparent 25%),
        linear-gradient(45deg, transparent 75%, #27272a 75%),
        linear-gradient(-45deg, transparent 75%, #27272a 75%)
      `,
      backgroundSize: '20px 20px',
      backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px',
    },
  },
};

const backgroundOrder: PreviewBackground[] = ['neutral', 'light', 'dark', 'checker'];

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
  const [previewBg, setPreviewBg] = useState<PreviewBackground>('neutral');

  const cycleBackground = () => {
    const currentIndex = backgroundOrder.indexOf(previewBg);
    const nextIndex = (currentIndex + 1) % backgroundOrder.length;
    setPreviewBg(backgroundOrder[nextIndex]);
  };

  const currentBg = previewBackgrounds[previewBg];
  const CurrentIcon = currentBg.icon;

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
          {/* Background toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={cycleBackground}
            className="h-8 text-white/70 hover:text-white hover:bg-white/10 gap-1.5"
            title={`Preview background: ${currentBg.label} (click to cycle)`}
          >
            <CurrentIcon className="w-3.5 h-3.5" />
            <span className="text-xs hidden sm:inline">{currentBg.label}</span>
          </Button>
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
        className="flex-1 flex items-center justify-center p-8 overflow-auto transition-colors duration-300"
        style={currentBg.style}
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
