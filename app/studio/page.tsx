'use client';

import { useState } from 'react';
import { ComponentLibrary } from '@/components/studio/ComponentLibrary';
import { CustomizationPanel } from '@/components/studio/CustomizationPanel';
import { LivePreview } from '@/components/studio/LivePreview';
import { ExportMenu } from '@/components/studio/ExportMenu';
import { ComponentDefinition, getComponentById } from '@/lib/component-registry';
import { Customization, defaultCustomization } from '@/types/customization';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles } from 'lucide-react';
import Link from 'next/link';

export default function StudioPage() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentDefinition | null>(null);
  const [customization, setCustomization] = useState<Customization>(defaultCustomization);
  const [showExport, setShowExport] = useState(false);

  const handleSelectComponent = (component: ComponentDefinition) => {
    setSelectedComponent(component);
    // Merge component-specific defaults with current customization
    setCustomization((prev) => ({
      ...prev,
      ...component.defaultCustomization,
    }));
  };

  const handleUpdateCustomization = (updates: Partial<Customization>) => {
    setCustomization((prev) => ({ ...prev, ...updates }));
  };

  const handleResetCustomization = () => {
    if (selectedComponent) {
      setCustomization({
        ...defaultCustomization,
        ...selectedComponent.defaultCustomization,
      });
    } else {
      setCustomization(defaultCustomization);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top Bar */}
      <header className="h-14 border-b flex items-center justify-between px-4 bg-background/80 backdrop-blur">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="font-bold">design2prompt</span>
            <span className="text-muted-foreground">/ Studio</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant={showExport ? 'default' : 'outline'}
            onClick={() => setShowExport(!showExport)}
            className="gap-2"
          >
            <Sparkles className="w-4 h-4" />
            {showExport ? 'Hide Export' : 'Generate Prompt'}
          </Button>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar - Component Library */}
        <aside className="w-72 flex-shrink-0">
          <ComponentLibrary
            selectedComponent={selectedComponent}
            onSelectComponent={handleSelectComponent}
          />
        </aside>

        {/* Center - Live Preview */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <div className={showExport ? 'flex-1' : 'h-full'}>
            <LivePreview
              component={selectedComponent}
              customization={customization}
              onResetCustomization={handleResetCustomization}
            />
          </div>

          {/* Export Panel (shown when toggled) */}
          {showExport && (
            <div className="h-80 flex-shrink-0">
              <ExportMenu
                component={selectedComponent}
                customization={customization}
              />
            </div>
          )}
        </main>

        {/* Right Sidebar - Customization Panel */}
        <aside className="w-80 flex-shrink-0">
          <CustomizationPanel
            customization={customization}
            selectedComponent={selectedComponent}
            onUpdateCustomization={handleUpdateCustomization}
          />
        </aside>
      </div>
    </div>
  );
}
