# Changelog

All notable changes and completed tasks for design2prompt.

**Format:** Move completed items from PLAN.md here with date and details.

---

## [Unreleased]

### Phase 1: Component Browser - 2025-11-29

**Completed:**
- ✅ Component registry system with 12 components across 6 categories
- ✅ 6 fully working component previews (GlassCard, FloatingCard, NeonCard, GradientButton, NeomorphicButton, ParticleButton)
- ✅ 3-panel Studio layout (Component Library, Live Preview, Customization Panel)
- ✅ Component Library sidebar with categories, search, and collapsible sections
- ✅ Customization Panel with 5 tabs (Colors, Typography, Spacing, Effects, Code)
- ✅ 6 color presets (Terminal, Sunset, Ocean, Forest, Midnight, Rose)
- ✅ Component-specific customization options
- ✅ Live Preview with dynamic background that adapts to colors
- ✅ Claude prompt generation with copy/download/open buttons
- ✅ Polished landing page with animations

**Components Built:**
| Category | Components |
|----------|------------|
| Cards | GlassCard, FloatingCard, NeonCard |
| Buttons | GradientButton, NeomorphicButton, ParticleButton |
| Forms | AnimatedForm, StepForm (metadata) |
| Navigation | FloatingNav, SidebarNav (metadata) |
| Effects | CursorFollow, ParallaxScroll (metadata) |

**UI Components (shadcn/ui style):**
- Button, Input, Label, Slider, Switch, Tabs, ScrollArea, Separator

**Files Created:**
- `lib/component-registry.ts` - Component definitions and search
- `lib/ai-targets/claude.ts` - Prompt generation
- `config/presets.config.ts` - Color/framework presets
- `components/studio/*` - Studio UI components
- `components/component-previews/*` - 6 component renders
- `components/ui/*` - 8 shadcn-style components

---

### Planning Phase - 2025-11-29

**Completed:**
- ✅ Created comprehensive project plan (PLAN.md)
- ✅ Researched optimal tech stack with Context7 MCP
- ✅ Tech stack decisions documented (TECH_STACK.md)
- ✅ GitHub repository created and initialized
- ✅ Global Claude skills added (nextjs, shadcn-ui, canvas-design, gemini-image-gen)
- ✅ Documentation structure established

**Tech Stack Decided:**
- Next.js 16.0.3 (Trust: 10/10)
- Zustand 5.0.8 (Trust: 9.6/10) with built-in persistence
- dnd-kit (Trust: 9.3/10) over react-dnd
- Framer Motion 11
- shadcn/ui via MCP

**Key Decisions:**
- App Router only (no Pages Router)
- 3 separate Zustand stores for better performance
- dnd-kit for modern drag & drop
- LocalStorage persistence via Zustand middleware

---

## Template

```markdown
### [Feature Name] - YYYY-MM-DD

**Completed:**
- ✅ Task 1
- ✅ Task 2

**Changes:**
- Changed X to Y because...

**Performance:**
- Improved Z by N%

**Fixes:**
- Fixed bug in...

**Notes:**
- Important context...
```
