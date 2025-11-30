import { ComponentCategory } from '@/types/component';
import { Customization, defaultCustomization } from '@/types/customization';

// Component definition for the registry
export type ComponentDefinition = {
  id: string;
  name: string;
  category: ComponentCategory;
  description: string;
  tags: string[];
  customizableProps: string[];
  defaultCustomization: Partial<Customization>;
};

// Component Library - 12 initial components across 6 categories
export const componentLibrary: Record<ComponentCategory, ComponentDefinition[]> = {
  cards: [
    {
      id: 'glass-card',
      name: 'Glassmorphic Card',
      category: 'cards',
      description: 'Frosted glass effect with customizable blur and transparency',
      tags: ['glass', 'blur', 'modern', 'backdrop'],
      customizableProps: ['glassOpacity', 'blurAmount', 'glassBorderOpacity', 'shadowIntensity'],
      defaultCustomization: {
        ...defaultCustomization,
        glassOpacity: '15',
        glassBorderOpacity: '40',
        blurAmount: '12',
        shadowIntensity: '50',
      },
    },
    {
      id: 'floating-card',
      name: '3D Floating Card',
      category: 'cards',
      description: 'Hover to see 3D lift effect with perspective transforms',
      tags: ['3d', 'hover', 'perspective', 'float'],
      customizableProps: ['floatHeight', 'rotationX', 'rotationY', 'duration'],
      defaultCustomization: {
        ...defaultCustomization,
        floatHeight: '10',
        rotationX: '5',
        rotationY: '5',
        duration: '300',
      },
    },
    {
      id: 'neon-card',
      name: 'Neon Glow Card',
      category: 'cards',
      description: 'Pulsing neon glow effect with customizable intensity',
      tags: ['neon', 'glow', 'pulse', 'cyberpunk'],
      customizableProps: ['glowIntensity', 'glowSpread', 'pulseSpeed'],
      defaultCustomization: {
        ...defaultCustomization,
        glowIntensity: '60',
        glowSpread: '40',
        pulseSpeed: '2',
      },
    },
  ],
  buttons: [
    {
      id: 'gradient-btn',
      name: 'Gradient Button',
      category: 'buttons',
      description: 'Beautiful gradient with smooth hover effects',
      tags: ['gradient', 'colorful', 'hover', 'modern'],
      customizableProps: ['gradientAngle', 'hoverScale', 'shadowIntensity'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
        hoverScale: '1.05',
        shadowIntensity: '50',
      },
    },
    {
      id: 'neo-btn',
      name: 'Neomorphic Button',
      category: 'buttons',
      description: 'Soft shadow neomorphic design with press states',
      tags: ['neomorphic', 'soft', 'shadow', 'minimal'],
      customizableProps: ['neoDepth', 'softShadowIntensity', 'duration'],
      defaultCustomization: {
        ...defaultCustomization,
        neoDepth: '8',
        softShadowIntensity: '20',
        duration: '300',
      },
    },
    {
      id: 'particle-btn',
      name: 'Particle Effect Button',
      category: 'buttons',
      description: 'Explosion particle effects on click',
      tags: ['particle', 'explosion', 'animation', 'interactive'],
      customizableProps: ['particleCount', 'explosionRadius', 'duration'],
      defaultCustomization: {
        ...defaultCustomization,
        particleCount: '20',
        explosionRadius: '50',
        duration: '300',
      },
    },
  ],
  forms: [
    {
      id: 'animated-form',
      name: 'Animated Form',
      category: 'forms',
      description: 'Field-level animations with staggered entrance',
      tags: ['animated', 'stagger', 'entrance', 'form'],
      customizableProps: ['fieldStagger', 'animation'],
      defaultCustomization: {
        ...defaultCustomization,
        fieldStagger: '0.1',
        animation: 'smooth',
      },
    },
    {
      id: 'step-form',
      name: 'Multi-Step Form',
      category: 'forms',
      description: 'Progress indicators with smooth step transitions',
      tags: ['wizard', 'steps', 'progress', 'multi-step'],
      customizableProps: ['stepCount', 'progressStyle'],
      defaultCustomization: {
        ...defaultCustomization,
        stepCount: '3',
        progressStyle: 'bar',
      },
    },
  ],
  navigation: [
    {
      id: 'floating-nav',
      name: 'Floating Navigation',
      category: 'navigation',
      description: 'Fixed floating nav bar with backdrop blur',
      tags: ['floating', 'sticky', 'navbar', 'blur'],
      customizableProps: ['navPosition', 'navSpacing'],
      defaultCustomization: {
        ...defaultCustomization,
        navPosition: 'top',
        navSpacing: '20',
      },
    },
    {
      id: 'sidebar-nav',
      name: 'Collapsible Sidebar',
      category: 'navigation',
      description: 'Expandable/collapsible navigation sidebar',
      tags: ['sidebar', 'collapsible', 'menu', 'drawer'],
      customizableProps: ['sidebarWidth', 'collapseWidth'],
      defaultCustomization: {
        ...defaultCustomization,
        sidebarWidth: '240',
        collapseWidth: '60',
      },
    },
  ],
  effects: [
    {
      id: 'cursor-follow',
      name: 'Cursor Follow Effect',
      category: 'effects',
      description: 'Trailing cursor effect with blend modes',
      tags: ['cursor', 'trail', 'mouse', 'interactive'],
      customizableProps: ['trailLength', 'cursorBlendMode', 'cursorSize'],
      defaultCustomization: {
        ...defaultCustomization,
        trailLength: '8',
        cursorBlendMode: 'screen',
        cursorSize: '20',
      },
    },
    {
      id: 'parallax-scroll',
      name: 'Parallax Scroll',
      category: 'effects',
      description: 'Multi-layer parallax scrolling effect',
      tags: ['parallax', 'scroll', 'layers', 'depth'],
      customizableProps: ['parallaxSpeed', 'layerCount', 'parallaxDirection'],
      defaultCustomization: {
        ...defaultCustomization,
        parallaxSpeed: '0.5',
        layerCount: '3',
        parallaxDirection: 'vertical',
      },
    },
  ],
  'data-display': [],
  modals: [],
  headers: [],
};

// Get all components as flat array
export function getAllComponents(): ComponentDefinition[] {
  return Object.values(componentLibrary).flat();
}

// Get component by ID
export function getComponentById(id: string): ComponentDefinition | undefined {
  return getAllComponents().find((c) => c.id === id);
}

// Get components by category
export function getComponentsByCategory(category: ComponentCategory): ComponentDefinition[] {
  return componentLibrary[category] || [];
}

// Get categories with component counts
export function getCategoriesWithCounts(): { category: ComponentCategory; count: number }[] {
  return Object.entries(componentLibrary).map(([category, components]) => ({
    category: category as ComponentCategory,
    count: components.length,
  }));
}

// Search components by query
export function searchComponents(query: string): ComponentDefinition[] {
  const lowerQuery = query.toLowerCase();
  return getAllComponents().filter(
    (c) =>
      c.name.toLowerCase().includes(lowerQuery) ||
      c.description.toLowerCase().includes(lowerQuery) ||
      c.tags.some((tag) => tag.toLowerCase().includes(lowerQuery))
  );
}

// Category display names
export const categoryDisplayNames: Record<ComponentCategory, string> = {
  cards: 'Cards',
  buttons: 'Buttons',
  forms: 'Forms',
  navigation: 'Navigation',
  effects: 'Effects',
  'data-display': 'Data Display',
  modals: 'Modals & Overlays',
  headers: 'Headers',
};

// Category icons (lucide icon names)
export const categoryIcons: Record<ComponentCategory, string> = {
  cards: 'CreditCard',
  buttons: 'MousePointer',
  forms: 'FileText',
  navigation: 'Menu',
  effects: 'Sparkles',
  'data-display': 'BarChart3',
  modals: 'Layers',
  headers: 'PanelTop',
};
