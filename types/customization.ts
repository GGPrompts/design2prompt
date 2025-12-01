export type Customization = {
  // Colors
  colorPreset?: string; // Track which preset is active (e.g., 'terminal', 'ocean')
  primaryColor: string;
  secondaryColor: string;
  backgroundColor: string;
  textColor: string;

  // Typography
  fontFamily: string;
  fontSize: string;
  fontWeight: string;

  // Spacing
  padding: string;
  margin: string;
  borderRadius: string;

  // Effects
  animation: 'none' | 'smooth' | 'bounce' | 'spring';
  duration: string;
  shadowIntensity: string;
  blurAmount: string;

  // Framework
  framework: 'react' | 'nextjs' | 'vue' | 'svelte' | 'vanilla' | 'astro';
  typescript: boolean;
  styling: 'tailwind' | 'css-modules' | 'styled-components';

  // Features
  responsive: boolean;
  darkMode: boolean;
  accessibility: boolean;
  animations: boolean;

  // Component-specific (dynamic based on selected component)
  [key: string]: any;
};

export const defaultCustomization: Customization = {
  // Colors
  primaryColor: '#10b981',
  secondaryColor: '#06b6d4',
  backgroundColor: '#0a0a0a',
  textColor: '#f0fdf4',

  // Typography
  fontFamily: 'Inter',
  fontSize: '16',
  fontWeight: '400',

  // Spacing
  padding: '20',
  margin: '10',
  borderRadius: '8',

  // Effects
  animation: 'smooth',
  duration: '300',
  shadowIntensity: '50',
  blurAmount: '12',

  // Framework
  framework: 'react',
  typescript: true,
  styling: 'tailwind',

  // Features
  responsive: true,
  darkMode: true,
  accessibility: true,
  animations: true,

  // Component-specific defaults (added dynamically)
  glassOpacity: '15',
  glassBorderOpacity: '40',
  floatHeight: '10',
  rotationX: '5',
  rotationY: '5',
  glowIntensity: '60',
  glowSpread: '40',
  pulseSpeed: '2',
  gradientAngle: '135',
  hoverScale: '1.05',
  neoDepth: '8',
  softShadowIntensity: '20',
  particleCount: '20',
  explosionRadius: '50',
  fieldStagger: '0.1',
  stepCount: '3',
  progressStyle: 'bar',
  navPosition: 'top',
  navSpacing: '20',
  sidebarWidth: '240',
  collapseWidth: '60',
  trailLength: '8',
  cursorBlendMode: 'screen',
  cursorSize: '20',
  parallaxSpeed: '0.5',
  layerCount: '3',
  parallaxDirection: 'vertical',
};
