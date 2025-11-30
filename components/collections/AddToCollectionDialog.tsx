'use client';

import { useState } from 'react';
import { Collection, SavedComponent } from '@/types/collection';
import { ComponentDefinition } from '@/lib/component-registry';
import { Customization } from '@/types/customization';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { FolderPlus, Check, Package } from 'lucide-react';
import { cn } from '@/lib/utils';

type AddToCollectionDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  component: ComponentDefinition | null;
  customization: Customization;
  collections: Collection[];
  onAddToCollection: (collectionId: string, component: SavedComponent) => void;
  onCreateCollection: () => void;
};

export function AddToCollectionDialog({
  open,
  onOpenChange,
  component,
  customization,
  collections,
  onAddToCollection,
  onCreateCollection,
}: AddToCollectionDialogProps) {
  const [selectedCollectionId, setSelectedCollectionId] = useState<string | null>(null);
  const [notes, setNotes] = useState('');

  const handleSave = () => {
    if (!selectedCollectionId || !component) return;

    const selectedCollection = collections.find((c) => c.id === selectedCollectionId);
    const nextOrder = selectedCollection?.components.length ?? 0;

    const savedComponent: SavedComponent = {
      id: crypto.randomUUID(),
      componentId: component.id,
      customization: { ...customization },
      notes: notes.trim() || undefined,
      order: nextOrder,
    };

    onAddToCollection(selectedCollectionId, savedComponent);
    setSelectedCollectionId(null);
    setNotes('');
    onOpenChange(false);
  };

  const handleClose = () => {
    setSelectedCollectionId(null);
    setNotes('');
    onOpenChange(false);
  };

  if (!component) return null;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Save to Collection</DialogTitle>
          <DialogDescription>
            Add this customized component to one of your collections.
          </DialogDescription>
        </DialogHeader>

        <div className="py-4 space-y-4">
          {/* Component Preview */}
          <div className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{
                background: `linear-gradient(135deg, ${customization.primaryColor}40, ${customization.secondaryColor}40)`,
              }}
            >
              <Package className="w-6 h-6" style={{ color: customization.primaryColor }} />
            </div>
            <div>
              <h4 className="font-semibold">{component.name}</h4>
              <p className="text-sm text-muted-foreground">
                {customization.primaryColor} • {customization.animation} animation
              </p>
            </div>
          </div>

          <Separator />

          {/* Collection Selection */}
          <div className="space-y-2">
            <Label>Select Collection</Label>
            {collections.length > 0 ? (
              <ScrollArea className="h-48 rounded-md border">
                <div className="p-2 space-y-1">
                  {collections.map((collection) => (
                    <button
                      key={collection.id}
                      onClick={() => setSelectedCollectionId(collection.id)}
                      className={cn(
                        'w-full flex items-center gap-3 p-3 rounded-md text-left transition-colors',
                        selectedCollectionId === collection.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-accent'
                      )}
                    >
                      <div
                        className={cn(
                          'w-5 h-5 rounded-full border-2 flex items-center justify-center',
                          selectedCollectionId === collection.id
                            ? 'border-primary-foreground bg-primary-foreground'
                            : 'border-muted-foreground'
                        )}
                      >
                        {selectedCollectionId === collection.id && (
                          <Check className="w-3 h-3 text-primary" />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium truncate">{collection.name}</div>
                        <div
                          className={cn(
                            'text-sm',
                            selectedCollectionId === collection.id
                              ? 'opacity-70'
                              : 'text-muted-foreground'
                          )}
                        >
                          {collection.components.length} component
                          {collection.components.length !== 1 ? 's' : ''}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </ScrollArea>
            ) : (
              <div className="h-48 rounded-md border flex items-center justify-center">
                <div className="text-center">
                  <p className="text-muted-foreground mb-2">No collections yet</p>
                  <Button variant="outline" size="sm" onClick={onCreateCollection}>
                    <FolderPlus className="w-4 h-4 mr-2" />
                    Create Collection
                  </Button>
                </div>
              </div>
            )}
          </div>

          {/* Create New Collection Button */}
          {collections.length > 0 && (
            <Button
              variant="outline"
              className="w-full"
              onClick={onCreateCollection}
            >
              <FolderPlus className="w-4 h-4 mr-2" />
              Create New Collection
            </Button>
          )}

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add notes about this component..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={2}
            />
          </div>
        </div>

        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleSave} disabled={!selectedCollectionId}>
            Save to Collection
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
