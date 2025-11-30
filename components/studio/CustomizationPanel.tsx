'use client';

import { Customization } from '@/types/customization';
import { ComponentDefinition } from '@/lib/component-registry';
import { colorPresets, PresetKey } from '@/config/presets.config';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import {
  Palette,
  Type,
  Box,
  Zap,
  Code2,
  Settings,
  Sparkles,
} from 'lucide-react';

type CustomizationPanelProps = {
  customization: Customization;
  selectedComponent: ComponentDefinition | null;
  onUpdateCustomization: (updates: Partial<Customization>) => void;
};

export function CustomizationPanel({
  customization,
  selectedComponent,
  onUpdateCustomization,
}: CustomizationPanelProps) {
  const updateValue = (key: string, value: string | boolean | number) => {
    onUpdateCustomization({ [key]: value });
  };

  const applyPreset = (presetKey: PresetKey) => {
    const preset = colorPresets[presetKey];
    onUpdateCustomization({
      primaryColor: preset.primaryColor,
      secondaryColor: preset.secondaryColor,
      backgroundColor: preset.backgroundColor,
      textColor: preset.textColor,
    });
  };

  return (
    <div className="flex flex-col h-full bg-zinc-900/50 border-l border-white/10">
      {/* Header */}
      <div className="p-4 border-b border-white/10">
        <h2 className="font-bold text-lg">Customization</h2>
        <p className="text-sm text-white/60">
          {selectedComponent ? selectedComponent.name : 'Select a component'}
        </p>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="colors" className="flex-1 flex flex-col">
        <div className="border-b border-white/10 px-2 overflow-x-auto">
          <TabsList className="w-full h-10 grid grid-cols-5 gap-1 min-w-[280px]">
            <TabsTrigger value="colors" className="text-xs px-1.5 sm:px-2">
              <Palette className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Colors</span>
            </TabsTrigger>
            <TabsTrigger value="typography" className="text-xs px-1.5 sm:px-2">
              <Type className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Type</span>
            </TabsTrigger>
            <TabsTrigger value="spacing" className="text-xs px-1.5 sm:px-2">
              <Box className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Space</span>
            </TabsTrigger>
            <TabsTrigger value="effects" className="text-xs px-1.5 sm:px-2">
              <Zap className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">FX</span>
            </TabsTrigger>
            <TabsTrigger value="code" className="text-xs px-1.5 sm:px-2">
              <Code2 className="w-3 h-3 sm:mr-1" />
              <span className="hidden sm:inline">Code</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <ScrollArea className="flex-1">
          {/* Colors Tab */}
          <TabsContent value="colors" className="p-4 space-y-4 mt-0">
            {/* Color Presets */}
            <div>
              <Label className="text-xs font-mono mb-2 block">Color Presets</Label>
              <div className="grid grid-cols-3 gap-2">
                {(Object.keys(colorPresets) as PresetKey[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => applyPreset(key)}
                    className="p-2 rounded-md border border-white/10 hover:border-emerald-500/50 bg-white/5 transition-colors"
                  >
                    <div className="flex gap-1 mb-1">
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: colorPresets[key].primaryColor }}
                      />
                      <div
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: colorPresets[key].secondaryColor }}
                      />
                    </div>
                    <span className="text-xs capitalize">{colorPresets[key].name}</span>
                  </button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Primary Color */}
            <ColorPicker
              label="Primary Color"
              value={customization.primaryColor}
              onChange={(v) => updateValue('primaryColor', v)}
            />

            {/* Secondary Color */}
            <ColorPicker
              label="Secondary Color"
              value={customization.secondaryColor}
              onChange={(v) => updateValue('secondaryColor', v)}
            />

            {/* Background Color */}
            <ColorPicker
              label="Background"
              value={customization.backgroundColor}
              onChange={(v) => updateValue('backgroundColor', v)}
            />

            {/* Text Color */}
            <ColorPicker
              label="Text Color"
              value={customization.textColor}
              onChange={(v) => updateValue('textColor', v)}
            />
          </TabsContent>

          {/* Typography Tab */}
          <TabsContent value="typography" className="p-4 space-y-4 mt-0">
            <div>
              <Label className="text-xs font-mono">Font Family</Label>
              <select
                value={customization.fontFamily}
                onChange={(e) => updateValue('fontFamily', e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm text-white"
              >
                <option value="Inter">Inter</option>
                <option value="system-ui">System UI</option>
                <option value="Roboto">Roboto</option>
                <option value="Poppins">Poppins</option>
                <option value="JetBrains Mono">JetBrains Mono</option>
              </select>
            </div>

            <SliderControl
              label="Font Size"
              value={parseInt(customization.fontSize)}
              min={12}
              max={24}
              unit="px"
              onChange={(v) => updateValue('fontSize', v.toString())}
            />

            <div>
              <Label className="text-xs font-mono">Font Weight</Label>
              <select
                value={customization.fontWeight}
                onChange={(e) => updateValue('fontWeight', e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm text-white"
              >
                <option value="300">Light (300)</option>
                <option value="400">Regular (400)</option>
                <option value="500">Medium (500)</option>
                <option value="600">Semibold (600)</option>
                <option value="700">Bold (700)</option>
              </select>
            </div>
          </TabsContent>

          {/* Spacing Tab */}
          <TabsContent value="spacing" className="p-4 space-y-4 mt-0">
            <SliderControl
              label="Padding"
              value={parseInt(customization.padding)}
              min={0}
              max={40}
              unit="px"
              onChange={(v) => updateValue('padding', v.toString())}
            />

            <SliderControl
              label="Margin"
              value={parseInt(customization.margin)}
              min={0}
              max={40}
              unit="px"
              onChange={(v) => updateValue('margin', v.toString())}
            />

            <SliderControl
              label="Border Radius"
              value={parseInt(customization.borderRadius)}
              min={0}
              max={24}
              unit="px"
              onChange={(v) => updateValue('borderRadius', v.toString())}
            />
          </TabsContent>

          {/* Effects Tab */}
          <TabsContent value="effects" className="p-4 space-y-4 mt-0">
            <div>
              <Label className="text-xs font-mono">Animation Style</Label>
              <select
                value={customization.animation}
                onChange={(e) => updateValue('animation', e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm text-white"
              >
                <option value="none">None</option>
                <option value="smooth">Smooth</option>
                <option value="bounce">Bounce</option>
                <option value="spring">Spring</option>
              </select>
            </div>

            <SliderControl
              label="Duration"
              value={parseInt(customization.duration)}
              min={100}
              max={1000}
              step={50}
              unit="ms"
              onChange={(v) => updateValue('duration', v.toString())}
            />

            <SliderControl
              label="Shadow Intensity"
              value={parseInt(customization.shadowIntensity)}
              min={0}
              max={100}
              unit="%"
              onChange={(v) => updateValue('shadowIntensity', v.toString())}
            />

            <SliderControl
              label="Blur Amount"
              value={parseInt(customization.blurAmount)}
              min={0}
              max={24}
              unit="px"
              onChange={(v) => updateValue('blurAmount', v.toString())}
            />

            <Separator />

            <div className="flex items-center justify-between">
              <div>
                <Label className="text-xs font-mono">Enable Animations</Label>
                <p className="text-xs text-white/50">Toggle motion effects</p>
              </div>
              <Switch
                checked={customization.animations}
                onCheckedChange={(v) => updateValue('animations', v)}
              />
            </div>
          </TabsContent>

          {/* Code Tab */}
          <TabsContent value="code" className="p-4 space-y-4 mt-0">
            <div>
              <Label className="text-xs font-mono">Framework</Label>
              <select
                value={customization.framework}
                onChange={(e) => updateValue('framework', e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm text-white"
              >
                <option value="react">React + TypeScript</option>
                <option value="nextjs">Next.js 15+ App Router</option>
                <option value="vue">Vue 3 Composition API</option>
                <option value="svelte">SvelteKit</option>
                <option value="vanilla">Vanilla JS</option>
                <option value="astro">Astro</option>
              </select>
            </div>

            <div>
              <Label className="text-xs font-mono">Styling</Label>
              <select
                value={customization.styling}
                onChange={(e) => updateValue('styling', e.target.value)}
                className="w-full mt-1 px-3 py-2 rounded-md border border-white/10 bg-white/5 text-sm text-white"
              >
                <option value="tailwind">Tailwind CSS</option>
                <option value="css-modules">CSS Modules</option>
                <option value="styled-components">Styled Components</option>
              </select>
            </div>

            <Separator />

            <div className="space-y-3">
              <ToggleOption
                label="TypeScript"
                description="Generate type-safe code"
                checked={customization.typescript}
                onChange={(v) => updateValue('typescript', v)}
              />
              <ToggleOption
                label="Responsive"
                description="Mobile-first design"
                checked={customization.responsive}
                onChange={(v) => updateValue('responsive', v)}
              />
              <ToggleOption
                label="Dark Mode"
                description="Include dark mode support"
                checked={customization.darkMode}
                onChange={(v) => updateValue('darkMode', v)}
              />
              <ToggleOption
                label="Accessibility"
                description="WCAG AA compliant"
                checked={customization.accessibility}
                onChange={(v) => updateValue('accessibility', v)}
              />
            </div>
          </TabsContent>

          {/* Component-Specific Options */}
          {selectedComponent && (
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-2 mb-4">
                <Settings className="w-4 h-4 text-emerald-400" />
                <span className="font-mono text-sm font-medium">
                  {selectedComponent.name} Options
                </span>
              </div>
              <ComponentSpecificOptions
                component={selectedComponent}
                customization={customization}
                onUpdate={updateValue}
              />
            </div>
          )}
        </ScrollArea>
      </Tabs>
    </div>
  );
}

// Helper Components

type ColorPickerProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
};

function ColorPicker({ label, value, onChange }: ColorPickerProps) {
  return (
    <div>
      <Label className="text-xs font-mono">{label}</Label>
      <div className="flex gap-2 mt-1">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-9 rounded border cursor-pointer"
        />
        <Input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 font-mono text-sm"
        />
      </div>
    </div>
  );
}

type SliderControlProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  unit: string;
  onChange: (value: number) => void;
};

function SliderControl({
  label,
  value,
  min,
  max,
  step = 1,
  unit,
  onChange,
}: SliderControlProps) {
  return (
    <div>
      <div className="flex justify-between mb-1">
        <Label className="text-xs font-mono">{label}</Label>
        <span className="text-xs text-muted-foreground">
          {value}{unit}
        </span>
      </div>
      <Slider
        value={[value]}
        onValueChange={(v) => onChange(v[0])}
        min={min}
        max={max}
        step={step}
      />
    </div>
  );
}

type ToggleOptionProps = {
  label: string;
  description: string;
  checked: boolean;
  onChange: (value: boolean) => void;
};

function ToggleOption({ label, description, checked, onChange }: ToggleOptionProps) {
  return (
    <div className="flex items-center justify-between">
      <div>
        <Label className="text-xs font-mono">{label}</Label>
        <p className="text-xs text-white/50">{description}</p>
      </div>
      <Switch checked={checked} onCheckedChange={onChange} />
    </div>
  );
}

// Component-specific options based on selected component
type ComponentSpecificOptionsProps = {
  component: ComponentDefinition;
  customization: Customization;
  onUpdate: (key: string, value: string | boolean | number) => void;
};

function ComponentSpecificOptions({
  component,
  customization,
  onUpdate,
}: ComponentSpecificOptionsProps) {
  // Glass Card
  if (component.id === 'glass-card') {
    return (
      <div className="space-y-3">
        <SliderControl
          label="Glass Opacity"
          value={parseInt(customization.glassOpacity) || 15}
          min={5}
          max={50}
          unit="%"
          onChange={(v) => onUpdate('glassOpacity', v.toString())}
        />
        <SliderControl
          label="Border Opacity"
          value={parseInt(customization.glassBorderOpacity) || 40}
          min={10}
          max={80}
          unit="%"
          onChange={(v) => onUpdate('glassBorderOpacity', v.toString())}
        />
      </div>
    );
  }

  // Floating Card
  if (component.id === 'floating-card') {
    return (
      <div className="space-y-3">
        <SliderControl
          label="Float Height"
          value={parseInt(customization.floatHeight) || 10}
          min={5}
          max={30}
          unit="px"
          onChange={(v) => onUpdate('floatHeight', v.toString())}
        />
        <SliderControl
          label="X Rotation"
          value={parseInt(customization.rotationX) || 5}
          min={0}
          max={15}
          unit="°"
          onChange={(v) => onUpdate('rotationX', v.toString())}
        />
        <SliderControl
          label="Y Rotation"
          value={parseInt(customization.rotationY) || 5}
          min={0}
          max={15}
          unit="°"
          onChange={(v) => onUpdate('rotationY', v.toString())}
        />
      </div>
    );
  }

  // Neon Card
  if (component.id === 'neon-card') {
    return (
      <div className="space-y-3">
        <SliderControl
          label="Glow Intensity"
          value={parseInt(customization.glowIntensity) || 60}
          min={20}
          max={100}
          unit="%"
          onChange={(v) => onUpdate('glowIntensity', v.toString())}
        />
        <SliderControl
          label="Glow Spread"
          value={parseInt(customization.glowSpread) || 40}
          min={10}
          max={80}
          unit="px"
          onChange={(v) => onUpdate('glowSpread', v.toString())}
        />
        <SliderControl
          label="Pulse Speed"
          value={parseFloat(customization.pulseSpeed) * 10 || 20}
          min={5}
          max={40}
          unit="s"
          onChange={(v) => onUpdate('pulseSpeed', (v / 10).toString())}
        />
      </div>
    );
  }

  // Gradient Button
  if (component.id === 'gradient-btn') {
    return (
      <div className="space-y-3">
        <SliderControl
          label="Gradient Angle"
          value={parseInt(customization.gradientAngle) || 135}
          min={0}
          max={360}
          step={15}
          unit="°"
          onChange={(v) => onUpdate('gradientAngle', v.toString())}
        />
        <SliderControl
          label="Hover Scale"
          value={(parseFloat(customization.hoverScale) || 1.05) * 100}
          min={100}
          max={120}
          unit="%"
          onChange={(v) => onUpdate('hoverScale', (v / 100).toString())}
        />
      </div>
    );
  }

  // Neomorphic Button
  if (component.id === 'neo-btn') {
    return (
      <div className="space-y-3">
        <SliderControl
          label="Depth"
          value={parseInt(customization.neoDepth) || 8}
          min={2}
          max={16}
          unit="px"
          onChange={(v) => onUpdate('neoDepth', v.toString())}
        />
        <SliderControl
          label="Shadow Softness"
          value={parseInt(customization.softShadowIntensity) || 20}
          min={10}
          max={50}
          unit="%"
          onChange={(v) => onUpdate('softShadowIntensity', v.toString())}
        />
      </div>
    );
  }

  // Particle Button
  if (component.id === 'particle-btn') {
    return (
      <div className="space-y-3">
        <SliderControl
          label="Particle Count"
          value={parseInt(customization.particleCount) || 20}
          min={5}
          max={50}
          unit=""
          onChange={(v) => onUpdate('particleCount', v.toString())}
        />
        <SliderControl
          label="Explosion Radius"
          value={parseInt(customization.explosionRadius) || 50}
          min={20}
          max={100}
          unit="px"
          onChange={(v) => onUpdate('explosionRadius', v.toString())}
        />
      </div>
    );
  }

  // Default: no specific options
  return (
    <p className="text-xs text-white/50">
      No specific options for this component type.
    </p>
  );
}
