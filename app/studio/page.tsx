'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { ComponentLibrary } from '@/components/studio/ComponentLibrary';
import { CustomizationPanel } from '@/components/studio/CustomizationPanel';
import { LivePreview } from '@/components/studio/LivePreview';
import { ExportMenu } from '@/components/studio/ExportMenu';
import { AddToCollectionDialog } from '@/components/collections/AddToCollectionDialog';
import { CreateCollectionDialog } from '@/components/collections/CreateCollectionDialog';
import { ComponentDefinition, getComponentById } from '@/lib/component-registry';
import { Customization, defaultCustomization } from '@/types/customization';
import { Collection, SavedComponent } from '@/types/collection';
import { useCollectionStore } from '@/lib/stores/collection-store';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Sparkles, FolderPlus, FolderOpen } from 'lucide-react';
import Link from 'next/link';
import { useToast } from '@/hooks/use-toast';

export default function StudioPage() {
  return (
    <Suspense fallback={<StudioLoading />}>
      <StudioContent />
    </Suspense>
  );
}

function StudioLoading() {
  return (
    <div className="h-screen flex items-center justify-center bg-zinc-950">
      <div className="flex items-center gap-2">
        <Sparkles className="w-6 h-6 text-emerald-400 animate-pulse" />
        <span className="text-lg font-medium text-white">Loading Studio...</span>
      </div>
    </div>
  );
}

function StudioContent() {
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const {
    collections,
    addCollection,
    addComponentToCollection,
    getAllTags,
  } = useCollectionStore();

  const [selectedComponent, setSelectedComponent] = useState<ComponentDefinition | null>(null);
  const [customization, setCustomization] = useState<Customization>(defaultCustomization);
  const [showExport, setShowExport] = useState(false);
  const [addToCollectionOpen, setAddToCollectionOpen] = useState(false);
  const [createCollectionOpen, setCreateCollectionOpen] = useState(false);

  // Handle URL params for loading component from collection
  useEffect(() => {
    const componentId = searchParams.get('component');
    const customizationParam = searchParams.get('customization');

    if (componentId) {
      const component = getComponentById(componentId);
      if (component) {
        setSelectedComponent(component);

        if (customizationParam) {
          try {
            const parsedCustomization = JSON.parse(decodeURIComponent(customizationParam));
            setCustomization({
              ...defaultCustomization,
              ...parsedCustomization,
            });
          } catch {
            setCustomization({
              ...defaultCustomization,
              ...component.defaultCustomization,
            });
          }
        } else {
          setCustomization({
            ...defaultCustomization,
            ...component.defaultCustomization,
          });
        }
      }
    }
  }, [searchParams]);

  const handleSelectComponent = (component: ComponentDefinition) => {
    setSelectedComponent(component);
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

  const handleAddToCollection = (collectionId: string, component: SavedComponent) => {
    addComponentToCollection(collectionId, component);
    toast({
      title: 'Component saved',
      description: 'Component has been added to your collection.',
    });
  };

  const handleCreateCollection = (data: {
    name: string;
    description: string;
    tags: string[];
  }) => {
    const newCollection: Collection = {
      id: crypto.randomUUID(),
      name: data.name,
      description: data.description,
      tags: data.tags,
      components: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    addCollection(newCollection);
    setCreateCollectionOpen(false);
    toast({
      title: 'Collection created',
      description: `"${data.name}" has been created. You can now save components to it.`,
    });
  };

  return (
    <div className="h-screen flex flex-col bg-zinc-950 text-white">
      {/* Top Bar */}
      <header className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-zinc-900/50 backdrop-blur-sm">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Button variant="ghost" size="sm" className="gap-2 text-white/70 hover:text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
          </Link>
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-emerald-400" />
            <span className="font-bold">design2prompt</span>
            <span className="text-white/60">/ Studio</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Link href="/collections">
            <Button variant="ghost" size="sm" className="gap-2 text-white/70 hover:text-white hover:bg-white/10">
              <FolderOpen className="w-4 h-4" />
              Collections
            </Button>
          </Link>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setAddToCollectionOpen(true)}
            disabled={!selectedComponent}
            className="gap-2 border-white/20 text-white/70 hover:text-white hover:bg-white/10 disabled:text-white/30 disabled:border-white/10"
          >
            <FolderPlus className="w-4 h-4" />
            Save to Collection
          </Button>
          <Button
            onClick={() => setShowExport(!showExport)}
            className={showExport
              ? "gap-2 bg-emerald-500 text-white hover:bg-emerald-600"
              : "gap-2 border border-white/20 bg-transparent text-white/70 hover:text-white hover:bg-white/10"
            }
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

      {/* Add to Collection Dialog */}
      <AddToCollectionDialog
        open={addToCollectionOpen}
        onOpenChange={setAddToCollectionOpen}
        component={selectedComponent}
        customization={customization}
        collections={collections}
        onAddToCollection={handleAddToCollection}
        onCreateCollection={() => {
          setAddToCollectionOpen(false);
          setCreateCollectionOpen(true);
        }}
      />

      {/* Create Collection Dialog */}
      <CreateCollectionDialog
        open={createCollectionOpen}
        onOpenChange={setCreateCollectionOpen}
        onSubmit={handleCreateCollection}
        existingTags={getAllTags()}
      />
    </div>
  );
}
