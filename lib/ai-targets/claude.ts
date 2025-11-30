import { ComponentDefinition } from '@/lib/component-registry';
import { Customization } from '@/types/customization';
import { frameworks, stylingOptions } from '@/config/presets.config';

export function generateClaudePrompt(
  component: ComponentDefinition,
  customization: Customization
): string {
  const frameworkName = frameworks[customization.framework as keyof typeof frameworks] || customization.framework;
  const stylingName = stylingOptions[customization.styling as keyof typeof stylingOptions] || customization.styling;

  const features = [];
  if (customization.responsive) features.push('✅ Fully responsive (mobile-first)');
  if (customization.darkMode) features.push('✅ Dark mode support');
  if (customization.accessibility) features.push('✅ WCAG AA accessibility');
  if (customization.animations) features.push('✅ Smooth animations on interaction');

  const prompt = `Create a ${component.name} component with the following specifications:

## Component Type
${component.category}: ${component.name}
${component.description}

## Framework & Setup
- Framework: ${frameworkName}
- TypeScript: ${customization.typescript ? 'Yes' : 'No'}
- Styling: ${stylingName}

## Design Specifications

### Colors
- Primary: ${customization.primaryColor}
- Secondary: ${customization.secondaryColor}
- Background: ${customization.backgroundColor}
- Text: ${customization.textColor}

### Typography
- Font Family: ${customization.fontFamily}
- Base Font Size: ${customization.fontSize}px
- Font Weight: ${customization.fontWeight}

### Spacing & Layout
- Padding: ${customization.padding}px
- Margin: ${customization.margin}px
- Border Radius: ${customization.borderRadius}px

### Effects & Animations
- Animation Type: ${customization.animation}
- Duration: ${customization.duration}ms
- Shadow Intensity: ${customization.shadowIntensity}%
- Blur Amount: ${customization.blurAmount}px

## Features Required
${features.join('\n')}

## Component-Specific Requirements
${getComponentSpecificRequirements(component, customization)}

## Additional Requirements
- Component should be reusable and accept props
- Include proper TypeScript types/interfaces
- Add helpful comments explaining complex logic
- Follow best practices for the chosen framework
- Include usage example

Please create this component with attention to detail and modern best practices.`;

  return prompt;
}

function getComponentSpecificRequirements(
  component: ComponentDefinition,
  customization: Customization
): string {
  switch (component.id) {
    case 'glass-card':
      return `- Glass opacity: ${customization.glassOpacity}%
- Border opacity: ${customization.glassBorderOpacity}%
- Backdrop blur effect with customizable intensity
- Frosted glass aesthetic`;

    case 'floating-card':
      return `- Float height on hover: ${customization.floatHeight}px
- 3D rotation X: ${customization.rotationX}°
- 3D rotation Y: ${customization.rotationY}°
- Smooth perspective transforms on hover`;

    case 'neon-card':
      return `- Glow intensity: ${customization.glowIntensity}%
- Glow spread: ${customization.glowSpread}px
- Pulse animation speed: ${customization.pulseSpeed}s
- Neon border with box-shadow glow effects`;

    case 'gradient-btn':
      return `- Gradient angle: ${customization.gradientAngle}°
- Hover scale: ${customization.hoverScale}x
- Gradient from primary to secondary color
- Smooth hover transition with scale effect`;

    case 'neo-btn':
      return `- Neomorphic depth: ${customization.neoDepth}px
- Soft shadow intensity: ${customization.softShadowIntensity}%
- Pressed state with inset shadows
- Soft, raised appearance`;

    case 'particle-btn':
      return `- Particle count: ${customization.particleCount}
- Explosion radius: ${customization.explosionRadius}px
- Particle animation on click
- Gradient background with particle overlay`;

    case 'animated-form':
      return `- Field stagger delay: ${customization.fieldStagger}s
- Animation style: ${customization.animation}
- Staggered entrance animations for form fields
- Focus states with visual feedback`;

    case 'step-form':
      return `- Step count: ${customization.stepCount}
- Progress style: ${customization.progressStyle}
- Multi-step wizard with progress indicator
- Smooth transitions between steps`;

    default:
      return `Tags: ${component.tags.join(', ')}`;
  }
}
