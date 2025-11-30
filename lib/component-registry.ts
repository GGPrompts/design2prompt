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
    {
      id: 'profile-card',
      name: 'Profile Card',
      category: 'cards',
      description: 'User profile card with avatar, bio, stats, and social links',
      tags: ['profile', 'user', 'avatar', 'social', 'bio'],
      customizableProps: ['shadowIntensity', 'glassOpacity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
        glassOpacity: '15',
      },
    },
    {
      id: 'product-card',
      name: 'Product Card',
      category: 'cards',
      description: 'E-commerce product card with image, price, rating, and add to cart',
      tags: ['product', 'ecommerce', 'shop', 'price', 'rating'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'blog-card',
      name: 'Blog Card',
      category: 'cards',
      description: 'Blog post preview with image, excerpt, author, and engagement',
      tags: ['blog', 'post', 'article', 'author', 'preview'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'pricing-card-alt',
      name: 'Pricing Card Alt',
      category: 'cards',
      description: 'Alternative pricing card with animated border and toggle',
      tags: ['pricing', 'plans', 'subscription', 'features', 'billing'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'team-member-card',
      name: 'Team Member Card',
      category: 'cards',
      description: 'Team member card with photo, role, skills, and social links',
      tags: ['team', 'member', 'profile', 'staff', 'employee'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
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
    {
      id: 'select-dropdown',
      name: 'Select Dropdown',
      category: 'forms',
      description: 'Custom styled select dropdown with smooth animations',
      tags: ['select', 'dropdown', 'form', 'animated', 'menu'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'checkbox-group',
      name: 'Checkbox Group',
      category: 'forms',
      description: 'Styled checkbox group with descriptions and animations',
      tags: ['checkbox', 'group', 'form', 'toggle', 'preferences'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'radio-group',
      name: 'Radio Group',
      category: 'forms',
      description: 'Card-style radio buttons with smooth selection animation',
      tags: ['radio', 'group', 'form', 'selection', 'cards'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'toggle-switch',
      name: 'Toggle Switch',
      category: 'forms',
      description: 'Animated on/off toggle switches with icons',
      tags: ['toggle', 'switch', 'form', 'settings', 'animated'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'range-slider',
      name: 'Range Slider',
      category: 'forms',
      description: 'Gradient range slider with value display and glow effects',
      tags: ['slider', 'range', 'form', 'input', 'gradient'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'tag-input',
      name: 'Tag Input',
      category: 'forms',
      description: 'Input field that creates removable tags with autocomplete',
      tags: ['tags', 'input', 'form', 'chips', 'autocomplete'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'password-input',
      name: 'Password Input',
      category: 'forms',
      description: 'Password field with show/hide toggle and strength meter',
      tags: ['password', 'input', 'form', 'security', 'strength'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'otp-input',
      name: 'OTP Input',
      category: 'forms',
      description: 'One-time password input with auto-focus and verification',
      tags: ['otp', 'verification', 'form', 'auth', 'security'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'date-picker-input',
      name: 'Date Picker Input',
      category: 'forms',
      description: 'Styled date input with calendar dropdown and quick actions',
      tags: ['date', 'picker', 'calendar', 'form', 'input'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'file-upload',
      name: 'File Upload',
      category: 'forms',
      description: 'Drag and drop file upload zone with progress indicators',
      tags: ['file', 'upload', 'form', 'dropzone', 'progress'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'textarea-autosize',
      name: 'Textarea Autosize',
      category: 'forms',
      description: 'Auto-expanding textarea with toolbar and character counter',
      tags: ['textarea', 'input', 'form', 'autosize', 'message'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'form-card',
      name: 'Form Card',
      category: 'forms',
      description: 'Complete form layout with progress tracking and validation',
      tags: ['form', 'card', 'complete', 'validation', 'progress'],
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
    {
      id: 'breadcrumb-nav',
      name: 'Breadcrumb Nav',
      category: 'navigation',
      description: 'Breadcrumb trail navigation with animated separators',
      tags: ['breadcrumb', 'trail', 'path', 'navigation', 'hierarchy'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'tabs-nav',
      name: 'Tabs Navigation',
      category: 'navigation',
      description: 'Horizontal tabs with animated indicator and multiple styles',
      tags: ['tabs', 'navigation', 'indicator', 'animated', 'menu'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'pagination-nav',
      name: 'Pagination Nav',
      category: 'navigation',
      description: 'Page navigation with numbers, arrows, and compact modes',
      tags: ['pagination', 'pages', 'navigation', 'numbers', 'arrows'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'sidebar-nav',
      name: 'Sidebar Navigation',
      category: 'navigation',
      description: 'Collapsible sidebar with icons, sections, and user profile',
      tags: ['sidebar', 'menu', 'navigation', 'collapse', 'icons'],
      customizableProps: ['sidebarWidth', 'collapseWidth', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        sidebarWidth: '240',
        collapseWidth: '70',
      },
    },
    {
      id: 'mobile-menu-nav',
      name: 'Mobile Menu Nav',
      category: 'navigation',
      description: 'Hamburger menu with animated slide-out drawer',
      tags: ['mobile', 'menu', 'hamburger', 'drawer', 'responsive'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
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
    {
      id: 'glow-button',
      name: 'Glow Button',
      category: 'effects',
      description: 'Buttons with animated glow, shimmer, and pulsing effects',
      tags: ['glow', 'button', 'shimmer', 'pulse', 'neon'],
      customizableProps: ['glowIntensity', 'glowSpread', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        glowIntensity: '60',
        glowSpread: '40',
      },
    },
    {
      id: 'magnetic-element',
      name: 'Magnetic Element',
      category: 'effects',
      description: 'Elements that follow cursor with spring physics',
      tags: ['magnetic', 'cursor', 'interactive', 'physics', '3d'],
      customizableProps: ['borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
      },
    },
    {
      id: 'reveal-on-scroll',
      name: 'Reveal On Scroll',
      category: 'effects',
      description: 'Content that animates in as you scroll into view',
      tags: ['reveal', 'scroll', 'fade', 'animation', 'stagger'],
      customizableProps: ['duration', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        duration: '600',
      },
    },
    {
      id: 'typewriter-text',
      name: 'Typewriter Text',
      category: 'effects',
      description: 'Text that types out letter by letter with cursor',
      tags: ['typewriter', 'text', 'animation', 'typing', 'terminal'],
      customizableProps: ['duration', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        duration: '80',
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
    {
      id: 'area-chart',
      name: 'Area Chart',
      category: 'data-display',
      description: 'SVG area chart with gradient fill and animated line',
      tags: ['chart', 'area', 'svg', 'analytics', 'graph', 'data'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'bar-chart',
      name: 'Bar Chart',
      category: 'data-display',
      description: 'Animated bar chart with comparison data and hover effects',
      tags: ['chart', 'bar', 'comparison', 'analytics', 'graph', 'data'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'donut-chart',
      name: 'Donut Chart',
      category: 'data-display',
      description: 'Circular donut chart with center label and legend',
      tags: ['chart', 'donut', 'pie', 'circular', 'analytics', 'percentage'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'sparkline-card',
      name: 'Sparkline Card',
      category: 'data-display',
      description: 'Mini chart in a card with trend indicator and value',
      tags: ['sparkline', 'mini-chart', 'trend', 'metrics', 'dashboard'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'activity-feed',
      name: 'Activity Feed',
      category: 'data-display',
      description: 'List of recent activities with avatars and timestamps',
      tags: ['activity', 'feed', 'notifications', 'timeline', 'realtime'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'data-table',
      name: 'Data Table',
      category: 'data-display',
      description: 'Styled table with sortable columns and row actions',
      tags: ['table', 'data', 'grid', 'sortable', 'pagination'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'kpi-card',
      name: 'KPI Card',
      category: 'data-display',
      description: 'Key performance indicator with target and progress',
      tags: ['kpi', 'performance', 'target', 'progress', 'metrics'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'counter-card',
      name: 'Counter Card',
      category: 'data-display',
      description: 'Animated number counter with live indicator',
      tags: ['counter', 'number', 'animated', 'live', 'realtime'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'heatmap-cell',
      name: 'Heatmap Cell',
      category: 'data-display',
      description: 'Color-coded heatmap grid for data visualization',
      tags: ['heatmap', 'grid', 'color-coded', 'activity', 'calendar'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'timeline-vertical',
      name: 'Timeline Vertical',
      category: 'data-display',
      description: 'Vertical timeline with nodes and status indicators',
      tags: ['timeline', 'vertical', 'progress', 'roadmap', 'milestones'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
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
    {
      id: 'terminal-hero',
      name: 'Terminal Hero',
      category: 'heroes',
      description: 'Developer-focused hero with terminal window and code aesthetic',
      tags: ['hero', 'terminal', 'developer', 'code', 'cli', 'landing'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
    {
      id: 'video-hero',
      name: 'Video Hero',
      category: 'heroes',
      description: 'Hero section with video player placeholder and overlay controls',
      tags: ['hero', 'video', 'media', 'landing', 'demo', 'play'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
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
  marketing: [
    {
      id: 'cta-section',
      name: 'CTA Section',
      category: 'marketing',
      description: 'Call-to-action section with headline, subtext, and buttons',
      tags: ['cta', 'call-to-action', 'marketing', 'conversion', 'landing'],
      customizableProps: ['gradientAngle', 'shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
        shadowIntensity: '50',
      },
    },
    {
      id: 'feature-showcase',
      name: 'Feature Showcase',
      category: 'marketing',
      description: 'Single feature highlight with image and benefits list',
      tags: ['feature', 'showcase', 'marketing', 'benefits', 'product'],
      customizableProps: ['gradientAngle', 'shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
        shadowIntensity: '50',
      },
    },
    {
      id: 'logo-cloud',
      name: 'Logo Cloud',
      category: 'marketing',
      description: 'Grid of partner/client logos with hover effects',
      tags: ['logos', 'partners', 'clients', 'trust', 'brands'],
      customizableProps: ['shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        shadowIntensity: '50',
      },
    },
    {
      id: 'trust-badges',
      name: 'Trust Badges',
      category: 'marketing',
      description: 'Security and compliance badges row with animations',
      tags: ['trust', 'security', 'badges', 'compliance', 'certification'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
    {
      id: 'stats-counter',
      name: 'Stats Counter',
      category: 'marketing',
      description: 'Animated statistics row with counters and trends',
      tags: ['stats', 'counter', 'metrics', 'numbers', 'animated'],
      customizableProps: ['gradientAngle', 'shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
        shadowIntensity: '50',
      },
    },
    {
      id: 'comparison-table',
      name: 'Comparison Table',
      category: 'marketing',
      description: 'Feature comparison table with checkmarks and plans',
      tags: ['comparison', 'table', 'features', 'plans', 'pricing'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
    {
      id: 'faq-accordion',
      name: 'FAQ Accordion',
      category: 'marketing',
      description: 'Expandable FAQ section with smooth animations',
      tags: ['faq', 'accordion', 'questions', 'answers', 'support'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
    {
      id: 'newsletter-signup',
      name: 'Newsletter Signup',
      category: 'marketing',
      description: 'Email capture form with input and submit button',
      tags: ['newsletter', 'email', 'signup', 'subscribe', 'capture'],
      customizableProps: ['gradientAngle', 'shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
        shadowIntensity: '50',
      },
    },
    {
      id: 'announcement-banner',
      name: 'Announcement Banner',
      category: 'marketing',
      description: 'Top banner with dismissible announcement message',
      tags: ['announcement', 'banner', 'alert', 'notification', 'promo'],
      customizableProps: ['gradientAngle', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
      },
    },
    {
      id: 'social-proof',
      name: 'Social Proof',
      category: 'marketing',
      description: 'Avatar stack with user count and rating display',
      tags: ['social-proof', 'avatars', 'users', 'rating', 'reviews'],
      customizableProps: ['gradientAngle', 'shadowIntensity', 'borderRadius'],
      defaultCustomization: {
        ...defaultCustomization,
        gradientAngle: '135',
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
  marketing: 'Marketing & Landing',
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
  marketing: 'Megaphone',
};
