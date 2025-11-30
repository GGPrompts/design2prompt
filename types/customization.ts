export type Customization = {
  // Colors
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
  primaryColor: '#10b981',
  secondaryColor: '#8b5cf6',
  backgroundColor: '#ffffff',
  textColor: '#1f2937',
  fontFamily: 'Inter',
  fontSize: '16px',
  fontWeight: '400',
  padding: '1rem',
  margin: '0',
  borderRadius: '0.5rem',
  animation: 'smooth',
  duration: '300ms',
  shadowIntensity: 'medium',
  blurAmount: '12px',
  framework: 'react',
  typescript: true,
  styling: 'tailwind',
  responsive: true,
  darkMode: true,
  accessibility: true,
  animations: true,
};
