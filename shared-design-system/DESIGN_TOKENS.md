# Education Ecosystem Design Tokens

A unified design system for the Education Identity & Access Portal, LMS, Fees & Scholarship, and Academic Analytics platforms.

## Color Palette

### Primary Colors
- **Primary Blue**: `#1F40AF` - Main interactive elements, links, primary buttons
- **Dark Blue**: `#0F2452` - Sidebar background, dark mode base
- **Light Gray**: `#F5F7FA` - Page backgrounds, secondary containers
- **White**: `#FFFFFF` - Cards, text backgrounds

### Semantic Colors
- **Success**: `#059669` - Approved, active, paid statuses
- **Warning**: `#F59E0B` - Pending, in progress states
- **Error**: `#DC2626` - Rejected, failed, unpaid states
- **Info**: `#0284C7` - Information alerts

### Neutral Palette
- **Text Primary**: `#1F2937` - Main body text
- **Text Secondary**: `#6B7280` - Secondary text, labels
- **Border**: `#E5E7EB` - Dividers, borders
- **Divider**: `#F3F4F6` - Subtle backgrounds

## Typography

### Font Stack
- **Family**: `"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`
- **Fallback**: System fonts for maximum compatibility

### Scale
- **Display (H1)**: 32px, weight 700, line-height 1.2
- **Heading (H2)**: 24px, weight 700, line-height 1.25
- **Subheading (H3)**: 18px, weight 600, line-height 1.35
- **Body Large**: 16px, weight 400, line-height 1.5
- **Body**: 14px, weight 400, line-height 1.5
- **Body Small**: 12px, weight 400, line-height 1.4
- **Label**: 13px, weight 500, line-height 1.4

## Spacing Scale

Used consistently across all components (4px base unit):

```
4px   - xs
8px   - sm
12px  - md
16px  - lg
24px  - xl
32px  - 2xl
48px  - 3xl
64px  - 4xl
```

## Component Sizing

### Button Sizes
- **Small**: 32px height, 12px font, 8px padding
- **Medium**: 40px height, 14px font, 12px padding (default)
- **Large**: 48px height, 16px font, 16px padding

### Input Heights
- **Standard**: 40px (includes padding)
- **Compact**: 32px (for dense forms)

### Sidebar
- **Width (desktop)**: 260px
- **Collapsed**: 80px
- **Mobile**: Full width drawer with 90vh max-height

### Topbar
- **Height**: 64px
- **Sticky**: Yes, z-index: 40

## Border Radius

- **None**: 0px
- **Small**: 4px (for inputs, buttons)
- **Medium**: 8px (for cards, modals)
- **Large**: 12px (for large containers)
- **Full**: 9999px (for pills, avatars)

## Shadows

- **Sm**: `0 1px 2px 0 rgba(0, 0, 0, 0.05)`
- **Md**: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`
- **Lg**: `0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)`
- **Xl**: `0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)`

## Animations

- **Duration**: 200ms (transitions), 300ms (modals)
- **Easing**: cubic-bezier(0.4, 0, 0.2, 1) (ease-in-out)
- **Principle**: Minimal motion, purpose-driven only

## Layout & Spacing Rules

### Page Layouts
- **Desktop**: 260px sidebar + flexible main content
- **Tablet**: 80px collapsed sidebar + responsive content
- **Mobile**: Full-screen drawer nav + stacked content

### Content Margins
- **Desktop**: 32px sides, 24px top/bottom
- **Tablet**: 24px sides, 20px top/bottom
- **Mobile**: 16px sides, 16px top/bottom

### Card Spacing
- **Padding**: 24px (desktop), 20px (tablet), 16px (mobile)
- **Gap between cards**: 16px
- **Border radius**: 8px
- **Border**: 1px solid #E5E7EB

## Status Badges

- **Paid**: Green background, white text
- **Unpaid**: Red background, white text
- **Active**: Green background, white text
- **Inactive**: Gray background, dark text
- **Pending**: Amber background, dark text
- **Approved**: Green background, white text
- **Rejected**: Red background, white text
- **Draft**: Gray background, dark text

## Accessibility

- **Minimum contrast ratio**: 4.5:1 for text
- **Focus indicators**: 2px blue outline, 2px offset
- **Touch targets**: Minimum 44px × 44px
- **Font sizes**: Never below 12px for body text
- **Line heights**: Minimum 1.4 for readability

## Dark Mode (Optional)

- Background: `#0F1419`
- Sidebar: `#161B22`
- Card: `#1C2128`
- Text Primary: `#FFFFFF`
- Text Secondary: `#8B949E`
- Border: `#30363D`

---

**Version**: 1.0  
**Last Updated**: 2026-01-26  
**Status**: Production-ready
