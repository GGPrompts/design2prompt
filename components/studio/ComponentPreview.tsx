'use client';

import { ComponentDefinition } from '@/lib/component-registry';
import { Customization } from '@/types/customization';
import {
  GlassCard,
  FloatingCard,
  NeonCard,
  GradientButton,
  NeomorphicButton,
  ParticleButton,
} from '@/components/component-previews';
import { Settings } from 'lucide-react';

type ComponentPreviewProps = {
  component: ComponentDefinition | null;
  customization: Customization;
};

export function ComponentPreview({ component, customization }: ComponentPreviewProps) {
  if (!component) {
    return (
      <div className="flex flex-col items-center justify-center h-full text-muted-foreground">
        <Settings className="w-12 h-12 mb-4 opacity-30" />
        <p className="text-lg font-medium">No Component Selected</p>
        <p className="text-sm opacity-70">Select a component from the library to preview</p>
      </div>
    );
  }

  const baseStyle = {
    fontFamily: customization.fontFamily,
    fontSize: `${customization.fontSize}px`,
    fontWeight: customization.fontWeight,
  };

  // Render the appropriate preview based on component ID
  switch (component.id) {
    // Cards
    case 'glass-card':
      return <GlassCard customization={customization} />;
    case 'floating-card':
      return <FloatingCard customization={customization} />;
    case 'neon-card':
      return <NeonCard customization={customization} />;

    // Buttons
    case 'gradient-btn':
      return <GradientButton customization={customization} />;
    case 'neo-btn':
      return <NeomorphicButton customization={customization} />;
    case 'particle-btn':
      return <ParticleButton customization={customization} />;

    // Default fallback for components without specific previews
    default:
      return (
        <div
          className="p-6 rounded-lg border text-center max-w-sm"
          style={{
            ...baseStyle,
            backgroundColor: `${customization.primaryColor}20`,
            borderColor: customization.primaryColor,
            borderRadius: `${customization.borderRadius}px`,
            color: customization.textColor,
          }}
        >
          <h3 className="text-xl font-bold mb-2">{component.name}</h3>
          <p className="opacity-80 text-sm">{component.description}</p>
          <p className="mt-4 text-xs opacity-50">Preview coming soon</p>
        </div>
      );
  }
}
