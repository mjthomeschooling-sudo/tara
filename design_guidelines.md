# Design Guidelines: Learner Persona Growth Journey

## Design Approach
**Reference-Based**: Drawing from educational platforms (Coursera, Khan Academy) and modern productivity tools (Notion, Linear) to create an engaging learning journey narrative. Focus on visual storytelling that makes educational growth tangible and inspiring.

## Core Design Elements

### Typography
- **Headlines**: Bold, modern sans-serif - text-4xl to text-6xl for impact
- **Body**: Clean, readable sans-serif - text-base to text-lg
- **Accents**: Medium weight for section headers (text-2xl to text-3xl)
- **Hierarchy**: Strong contrast between headline sizes to guide attention

### Layout System
**Tailwind spacing primitives**: 4, 6, 8, 12, 16, 20, 24
- Section padding: py-20 (desktop), py-12 (mobile)
- Card spacing: p-6 to p-8
- Element gaps: gap-6 to gap-8
- Container: max-w-7xl with px-6

### Component Structure

**Hero Section (Full-width with image)**
- Large background image showing learning/technology themes
- Overlaid gradient for text readability
- Centered content: Large headline + animated progress visualization (circles/steps showing journey milestones)
- CTA with blurred background button
- Height: 85vh for impactful entry

**Three Superpowers Section**
- 3-column grid (lg:grid-cols-3, md:grid-cols-2, grid-cols-1)
- Interactive cards with icon, title, expandable description
- Hover effects: subtle lift (translate-y-1) and shadow increase
- Icons from Heroicons via CDN
- Each card: min-h-[280px] for visual balance

**Reinforcement Activities Section**
- Staggered 2-column layout with images
- Left: Activity image, Right: Description (alternating pattern)
- Cards with rounded corners (rounded-xl) and shadow
- Supporting icons for each activity type

**Technical Acquisition Stories Timeline**
- Vertical timeline with connector line
- Story cards alternating left/right of timeline
- Each card includes: Category badge, story content, visual icon
- Animated entrance as user scrolls

**Transformational Principles**
- Large 3-column grid with illustrated concept cards
- Each principle (Nurture, Guide, Empower) has dedicated visual icon
- Expandable sections showing "as student" and "as educator" perspectives
- Generous spacing between cards (gap-8)

**TPACK Framework Visualization**
- Interactive Venn diagram or segmented circular diagram
- Hover states reveal detailed explanations
- Center intersection highlighted as primary learning zone
- Supporting text in 2-column grid below diagram

**Footer**
- Rich footer with ISTE Standards badge/reference
- Contact/sharing options
- Organized into 2-3 columns

### Interaction Patterns
- **Card Hovers**: Subtle elevation (shadow-lg on hover)
- **Scroll Animations**: Fade-in as sections enter viewport (use Intersection Observer)
- **Expandable Content**: Smooth height transitions for detail reveals
- **Progress Indicators**: Animated circular progress or step completion visuals
- **Timeline**: Progressive reveal of story cards

### Visual Enhancements
- **Gradients**: Subtle background gradients for section separation
- **Borders**: Thin accent borders on cards (border-2)
- **Shadows**: Layered shadows for depth (shadow-md to shadow-xl)
- **Rounded Corners**: Consistent use of rounded-xl for modern feel
- **Icons**: Heroicons throughout for consistency

### Images Section
**Required Images:**
1. **Hero Image**: Learning/education theme - classroom with technology, students collaborating, or abstract tech/growth visualization (1920x1080 landscape)
2. **Activity Images**: 3 images for reinforcement activities - cybersecurity concept, Lego/robotics, data organization visualization (800x600 each)
3. **Timeline Icons**: Vector icons for personal, professional, helping others stories
4. **Principle Illustrations**: Abstract illustrations for Nurture, Guide, Empower concepts

**Image Treatment**: All images have subtle overlays or rounded corners, optimized for web performance

### Responsive Behavior
- Mobile: Single column stacking, reduced padding (py-12 vs py-20)
- Tablet: 2-column grids where appropriate
- Desktop: Full multi-column layouts with generous spacing
- Timeline switches from alternating to single-column on mobile

### Accessibility
- Semantic HTML throughout (section, article, header)
- Proper heading hierarchy (h1 → h6)
- ARIA labels for interactive elements
- Focus states for keyboard navigation
- High contrast text over images