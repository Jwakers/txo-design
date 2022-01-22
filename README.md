## Project

### Local development

`npm run start`

http://localhost:8000/

### Production build

https://jwakers.github.io/txo-design/

---

### Notes on design and brief

- Spacing on footer links were inconsistent in the design document - have made this even in development
- Font changes:
  - Changed hero font size desktop to 134px
  - Changed primary text letter spacing to -0.06em
  - Changed link font size desktop to 18px
  - Changed hero font size and line height to 49 and 49 respectively

### Code improvements / Additional features

- Add all animations from brief and interactivity (Because of this some of the spacing between sections is off as per design, because, from what I understand these spaces need to be dynamic and change as the user scrolls)
- Refine animations so on resize it resets accordingly
- Add feature to carousel so it restarts when reaching the end
- Add swipe features to carousel on mobile
- Reset carousel and recalculate positions on viewport resize
- Disable mobile menu until initial brand animation/scrolling is complete (or trigger animation to finish when menu is clicked)
- Accessibility updates, make everything tabable, aria-labels etc
- Image optimization (srcset, lazy loading etc)
- Add a mixin to handle font size output over breakpoints
- Update 404 page to match overall design
