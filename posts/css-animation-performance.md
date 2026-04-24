---
title: "The Art of CSS Animation Performance"
date: "2025-03-22"
description: "Why some animations feel buttery smooth while others stutter. Understanding the browser's rendering pipeline and how to optimize for 60fps."
---

Animation performance is one of those topics that separates good frontend engineers from great ones. It is not about knowing every property — it is about understanding how the browser works.

## The Rendering Pipeline

The browser renders a frame in roughly this order:

1. **Style**: Calculate which CSS rules apply
2. **Layout**: Compute geometry (position, size)
3. **Paint**: Fill in pixels
4. **Composite**: Layer and draw to screen

Different properties trigger different stages. The key insight: composite-only animations are cheapest.

## The Golden Properties

These properties can be animated without triggering layout or paint:

- `transform` (translate, scale, rotate)
- `opacity`

Everything else is more expensive. `width`, `height`, `top`, `left` all trigger layout. `box-shadow` triggers paint. Use them sparingly in animations.

## will-change

The `will-change` property hints to the browser that an element will animate. Use it, but do not overuse it — it consumes memory.

```css
.animated-element {
  will-change: transform;
}
```

## Measuring Performance

Use Chrome DevTools Performance panel. Look for long frames. A frame should complete in under 16.6ms to maintain 60fps.

## Conclusion

Fast animations respect the browser. Stick to transforms and opacity, measure your frames, and your users will feel the difference.
