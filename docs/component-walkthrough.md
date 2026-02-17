# Component-Level Code Walkthrough

This document explains the technical implementation of key components in the LearnOps Suite.

## 1. `BioluminescentGrid`
The `BioluminescentGrid` is a high-end interactive background effect using React, Tailwind CSS, and CSS Custom Properties.

### Mouse Tracking Logic
The component utilizes a `useEffect` hook to track the user's cursor relative to each grid item.
```tsx
const handleMouseMove = (e: MouseEvent) => {
    const rect = item.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    item.style.setProperty('--mouse-x', `${x}px`);
    item.style.setProperty('--mouse-y', `${y}px`);
};
```

### CSS Radial Gradient Effect
The tracking is paired with a radial gradient in `theme.css` that follows the CSS variables:
```css
.bio-item::before {
  background: radial-gradient(
    600px circle at var(--mouse-x) var(--mouse-y),
    rgba(16, 185, 129, 0.08),
    transparent 40%
  );
}
```

## 2. Shared Navigation System
The suite uses a unified `SharedLayout` that orchestrates navigation across all apps.

### Dynamic Rendering
The `Sidebar` accepts an array of `NavItem` objects, allowing each app to define its own navigation while maintaining a common visual identity:
```tsx
{items.map((item) => (
    <Link 
        href={item.href} 
        className={cn('sidebar-link', item.active && 'active-state')}
    >
        {item.icon} {item.label}
    </Link>
))}
```

### Industrial Aesthetics
We enforce the industrial theme using custom utility classes like `.shadow-industrial` which uses hard-offset shadows instead of soft blurs, creating a technical, structural look.

## 3. App Router Migration (Case Study: Status Page)
The `status` page was migrated from the legacy `pages` router to the `app` router to enable:
- **Root Layout Inheritance**: Automatically receiving the glassmorphism `Navbar` and industrial `Footer`.
- **Server Components**: Improving initial load times and SEO.
- **Client-side Hydration**: Using `useEffect` to safely handle dynamic timestamps without hydration mismatches.
