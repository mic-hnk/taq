# Planning Guide

A professional, informative website showcasing the TAQ Pork Quality System, designed to educate stakeholders about Poland's premium pork production standards while enabling easy content updates through an integrated editing interface.

**Experience Qualities**: 
1. **Trustworthy** - Professional design with clear information hierarchy that builds confidence in the certification system
2. **Educational** - Content-focused layout that makes complex production standards easy to understand and navigate
3. **Accessible** - Clean, readable interface optimized for all users including farmers, processors, and consumers

**Complexity Level**: Light Application (multiple features with basic state)
- The application presents structured informational content with an integrated editing mode that allows authorized users to modify content in real-time, persisting changes through the KV store

## Essential Features

### Content Display System
- **Functionality**: Presents all TAQ system information in organized sections (Introduction, Four Pillars, Final Product, Certification, Contact)
- **Purpose**: Educates visitors about quality standards and procedures
- **Trigger**: Page load or section navigation
- **Progression**: User lands on page → Scrolls through sections → Reads detailed content → Navigates to specific sections via menu
- **Success criteria**: All content is readable, well-organized, and visually distinct by section

### Edit Mode Toggle
- **Functionality**: Owner can toggle between view and edit modes to modify content
- **Purpose**: Enable easy content updates without touching code
- **Trigger**: Owner clicks edit button in header
- **Progression**: Owner authenticates → Clicks edit toggle → Interface shows editable fields → Makes changes → Saves → Content updates instantly
- **Success criteria**: Only owner sees edit controls, changes persist across sessions

### Section Editor
- **Functionality**: Inline editing of headings, paragraphs, and lists within each section
- **Purpose**: Allow granular content updates
- **Trigger**: Edit mode is active, user clicks on editable content
- **Progression**: Click text field → Edit in textarea → Save changes → View updates immediately
- **Success criteria**: All text content is editable, formatting is preserved, changes save correctly

### Contact Information Display
- **Functionality**: Shows organization details and certification bodies
- **Purpose**: Provide clear contact pathways for inquiries
- **Trigger**: User scrolls to contact section
- **Progression**: User finds contact section → Reads organization details → Sees certification bodies → Can copy email
- **Success criteria**: Contact details are prominent and easy to copy

## Edge Case Handling

- **Missing Content**: Display placeholder text prompting owner to add content in edit mode
- **Long Content**: Implement smooth scrolling and section anchors for easy navigation
- **Non-Owner Access**: Hide all edit controls and show read-only content
- **Failed Save**: Show error toast and retain edit mode with unsaved changes
- **Empty Fields**: Validate that critical fields aren't left blank before saving

## Design Direction

The design should evoke **trust, tradition, and agricultural heritage** while maintaining modern professionalism. It should feel like an official certification body website - authoritative yet approachable, with a color palette inspired by Polish agricultural landscapes (golden grain fields, fresh pork, clean production facilities).

## Color Selection

A warm, trustworthy palette evoking agricultural tradition and food quality.

- **Primary Color**: Deep burgundy red `oklch(0.45 0.15 15)` - Represents meat quality and Polish heritage, creates authority
- **Secondary Colors**: 
  - Warm cream `oklch(0.96 0.02 85)` - Soft background suggesting wheat/grain fields
  - Forest green `oklch(0.55 0.12 155)` - Represents sustainable farming and natural production
- **Accent Color**: Golden amber `oklch(0.70 0.14 75)` - Highlights CTAs and important elements, evokes grain/quality certification
- **Foreground/Background Pairings**: 
  - Primary Burgundy `oklch(0.45 0.15 15)`: Cream text `oklch(0.98 0.01 85)` - Ratio 9.2:1 ✓
  - Background Cream `oklch(0.96 0.02 85)`: Dark brown text `oklch(0.25 0.03 50)` - Ratio 13.5:1 ✓
  - Accent Golden `oklch(0.70 0.14 75)`: Dark brown text `oklch(0.25 0.03 50)` - Ratio 6.8:1 ✓
  - Forest Green `oklch(0.55 0.12 155)`: White text `oklch(1 0 0)` - Ratio 5.2:1 ✓

## Font Selection

Typography should convey institutional credibility while remaining highly readable for diverse audiences including farmers and processors.

- **Primary Font**: Crimson Pro - A sophisticated serif that adds gravitas to headings while maintaining excellent readability
- **Secondary Font**: Inter - Clean sans-serif for body text ensuring clarity of technical information

**Typographic Hierarchy**:
- H1 (Hero/Main Title): Crimson Pro Bold/48px/tight letter spacing/-0.02em
- H2 (Pillar Titles): Crimson Pro SemiBold/36px/normal spacing
- H3 (Subsections): Crimson Pro Medium/24px/normal spacing
- Body Text: Inter Regular/16px/1.6 line-height
- Small Text (Contact/Footer): Inter Regular/14px/1.5 line-height

## Animations

Animations should feel professional and purposeful - subtle transitions that guide attention without distraction, reinforcing the trustworthy nature of the certification system.

- **Scroll-triggered fades**: Section content fades in gently as user scrolls, creating engagement
- **Hover states**: Buttons and links lift slightly with smooth transitions (200ms)
- **Edit mode transition**: Smooth fade between view and edit states (300ms)
- **Navigation**: Smooth scroll to sections with easing (500ms)
- **Save confirmation**: Gentle bounce on success toast

## Component Selection

- **Components**: 
  - Card - For pillar sections and certification bodies display
  - Button - Primary actions (edit toggle, save), with variant styling
  - Textarea - Multi-line content editing in edit mode
  - Input - Single-line edits for headings and short fields
  - Badge - To highlight key quality parameters
  - Separator - Visual breaks between major sections
  - Toast (sonner) - Save confirmations and error messages
  - ScrollArea - For long content sections if needed
  
- **Customizations**: 
  - Custom hero section with gradient background
  - Custom pillar cards with numbered badges
  - Custom contact card layout with organization details
  
- **States**: 
  - Buttons: Default cream, hover lifts with shadow, active slight scale, disabled muted
  - Inputs/Textareas: Border highlight on focus (golden accent), error state with destructive color
  - Edit mode toggle: Clear visual state difference (golden when active)
  
- **Icon Selection**: 
  - PencilSimple - Edit mode toggle
  - FloppyDisk - Save changes
  - Check - Success confirmation
  - Warning - Error states
  - CaretDown - Section navigation
  - Envelope - Contact email
  
- **Spacing**: 
  - Section padding: py-16 md:py-24
  - Card padding: p-6 md:p-8
  - Content max-width: max-w-4xl for readability
  - Gap between elements: gap-4 for related items, gap-8 for sections
  
- **Mobile**: 
  - Stack pillar cards vertically on mobile
  - Reduce heading sizes by 30% on mobile
  - Full-width cards with px-4 on mobile
  - Sticky header that collapses on scroll
  - Touch-friendly edit buttons (min 44px)
