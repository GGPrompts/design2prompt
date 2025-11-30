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

// Component Library - All components across categories
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
      id: 'animated-input',
      name: 'Animated Input',
      category: 'forms',
      description: 'Form inputs with staggered entrance and focus animations',
      tags: ['animated', 'input', 'form', 'stagger', 'focus'],
      customizableProps: ['duration', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        duration: '300',
      },
    },
    {
      id: 'floating-label-input',
      name: 'Floating Label Input',
      category: 'forms',
      description: 'Material Design inspired inputs with floating labels',
      tags: ['floating', 'label', 'material', 'form', 'input'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'search-command',
      name: 'Search Command',
      category: 'forms',
      description: 'Command palette style search with keyboard navigation',
      tags: ['search', 'command', 'keyboard', 'palette', 'filter'],
      customizableProps: ['borderRadius', 'glassOpacity'],
      defaultCustomization: {
        ...defaultCustomization,
        glassOpacity: '15',
      },
    },
  ],
  navigation: [
    {
      id: 'glass-nav',
      name: 'Glass Navigation',
      category: 'navigation',
      description: 'Glassmorphic navigation bar with smooth indicator transitions',
      tags: ['glass', 'navbar', 'blur', 'indicator', 'modern'],
      customizableProps: ['glassOpacity', 'blurAmount', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        glassOpacity: '15',
        blurAmount: '12',
      },
    },
    {
      id: 'command-palette',
      name: 'Command Palette',
      category: 'navigation',
      description: 'VS Code style command palette with grouped commands',
      tags: ['command', 'palette', 'search', 'keyboard', 'shortcuts'],
      customizableProps: ['glassOpacity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        glassOpacity: '15',
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
  'data-display': [
    {
      id: 'stat-card',
      name: 'Stat Card',
      category: 'data-display',
      description: 'Animated statistics cards with trend indicators',
      tags: ['stats', 'metrics', 'dashboard', 'trends', 'analytics'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'metric-tile',
      name: 'Metric Tile',
      category: 'data-display',
      description: 'System metrics display with progress bars and sparkline',
      tags: ['metrics', 'progress', 'sparkline', 'dashboard', 'monitoring'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'progress-ring',
      name: 'Progress Ring',
      category: 'data-display',
      description: 'Animated concentric progress rings with SVG',
      tags: ['progress', 'ring', 'circular', 'svg', 'animated'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
  ],
  modals: [
    {
      id: 'glass-modal',
      name: 'Glass Modal',
      category: 'modals',
      description: 'Glassmorphic modal dialog with blur backdrop',
      tags: ['modal', 'glass', 'dialog', 'blur', 'overlay'],
      customizableProps: ['glassOpacity', 'blurAmount', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        glassOpacity: '15',
        blurAmount: '12',
      },
    },
    {
      id: 'slide-drawer',
      name: 'Slide Drawer',
      category: 'modals',
      description: 'Side drawer navigation with push effect',
      tags: ['drawer', 'slide', 'navigation', 'sidebar', 'menu'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
  ],
  headers: [],
  heroes: [
    {
      id: 'gradient-hero',
      name: 'Gradient Hero',
      category: 'heroes',
      description: 'Hero section with animated gradient orbs and CTA buttons',
      tags: ['hero', 'gradient', 'landing', 'cta', 'animated'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
    {
      id: 'bento-hero',
      name: 'Bento Hero',
      category: 'heroes',
      description: 'Bento grid layout hero with feature cards',
      tags: ['bento', 'grid', 'hero', 'features', 'layout'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
  ],
  pricing: [
    {
      id: 'pricing-card',
      name: 'Pricing Card',
      category: 'pricing',
      description: 'Featured pricing card with shimmer effect and feature list',
      tags: ['pricing', 'card', 'features', 'cta', 'shimmer'],
      customizableProps: ['shadowIntensity', 'glassOpacity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
        glassOpacity: '15',
      },
    },
    {
      id: 'feature-grid',
      name: 'Feature Grid',
      category: 'pricing',
      description: 'Hover-activated feature grid with icons and descriptions',
      tags: ['features', 'grid', 'icons', 'hover', 'marketing'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
  ],
  testimonials: [
    {
      id: 'testimonial-card',
      name: 'Testimonial Card',
      category: 'testimonials',
      description: 'Customer testimonial with rating, quote, and avatar',
      tags: ['testimonial', 'review', 'rating', 'quote', 'social-proof'],
      customizableProps: ['shadowIntensity', 'glassOpacity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
        glassOpacity: '15',
      },
    },
    {
      id: 'quote-card',
      name: 'Quote Card',
      category: 'testimonials',
      description: 'Inspirational quote card with animated gradient border',
      tags: ['quote', 'gradient', 'border', 'inspiration', 'animated'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
  ],
  auth: [
    {
      id: 'login-card',
      name: 'Login Card',
      category: 'auth',
      description: 'Complete login form with social auth and animations',
      tags: ['login', 'auth', 'form', 'social', 'password'],
      customizableProps: ['shadowIntensity', 'glassOpacity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
        glassOpacity: '15',
      },
    },
    {
      id: 'signup-card',
      name: 'Signup Card',
      category: 'auth',
      description: 'Registration form with password strength indicator',
      tags: ['signup', 'register', 'auth', 'form', 'password-strength'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
  ],
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
  heroes: 'Heroes & Landing',
  pricing: 'Pricing & Features',
  testimonials: 'Testimonials',
  auth: 'Authentication',
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
  heroes: 'Layout',
  pricing: 'DollarSign',
  testimonials: 'Quote',
  auth: 'Lock',
};
