### Code improvements

- Add all animations from brief and interactivity (Because of this some of the spacing between sections is off as per design, because, from what I understand these spaces need to be dynamic and change as the user scrolls)
- Refine animations so on resize it resets accordingly
- Add feature to carousel so it restarts when reaching the end
- Refine arrow cursor override so it uses the "difference" blend mode and transitions when flipping to the other side
- Add breakpoint between the small and medium (essentially tablet) and refine layout and font sizes etc
- Disable mobile menu until initial brand animation/scrolling is complete (or trigger animation to finish when menu is clicked)
- Add swipe features to carousel on mobile
- Accessibility updates, make everything tabable, aria-labels etc
- Image optimization (srcset, lazy loading etc)
- Add a mixin to handle font size output over breakpoints

### Notes on design and brief

- Spacing on footer links were inconsistent in the design document - have made this even in development
- Font changes:
  - Changed hero font size desktop to 134px
  - Changed primary text letter spacing to -0.06em
  - Changed link font size desktop to 18px
  - Changed hero font size and line height to 49 and 49 respectively
