# SCSS Boilerplate

Crafted specifically for developers seeking to engage with an advanced-level design system, the SCSS boilerplate aims to accelerate and simplify the project initiation process, ensuring a seamless start to high-level design projects.

## Complete and organized folder structure:
- `scss/abstracts`
- `scss/abstracts/mixins`
- `scss/base`
- `scss/components`
- `scss/layout`
- `scss/pages`
- `scss/utilities`
- `scss/vendors`

## Theme
The `theme.scss` file serves as a central repository for design tokens, providing a systematic approach to managing and organizing various values used in styling. These tokens include: `colors`, `border-width`, `stroke`, `font-family`, `font-size`, `font-weight`, `line-height`, `opacity`, `rounded`, `space`, `width`, `max-width`, `height`, `z-index`, `transition` and `breakpoint`. The `t()` function allows easy access to these tokens, promoting consistency and maintainability in your stylesheets.

```scss
.element {
  background-color: t(colors, pure-white);
  border: t(border-width, thin) solid t(colors, pure-black);
  font-family: t(font-family, default);
  font-size: t(font-size, md);
  font-weight: t(font-weight, bold);
  line-height: t(line-height, snug);
  opacity: t(opacity, 70);
  border-radius: t(rounded, md);
  margin: t(space, 2);
  width: t(width, full);
  max-width: t(max-width, md);
  height: t(height, 3xl);
  z-index: t(z-index, 10);
  transition-duration: t(transition, 300);
}
```

## Ready-to-use mixins:
**Absolute Positioning** `absolute.scss`  
The mixin offers precise control over the positioning of an element through customizable top, right, bottom, and left values, enhancing layout flexibility.
```scss
.element {
  @include absolute($top: 5, $right: 10);
}
```

**Border Styling** `border.scss`  
This mixin provides a concise way to define border properties, allowing for flexible customization of width, style, color, and opacity on a global or individual side basis.
```scss
.element {
  @include border(thick, solid, pure-white);
}

.another-element {
  @include border-t(thin, dashed, pure-black, 80);
}
```

**Center Fixed Position** `center-fixed.scss`  
Streamlining the process of centering an element within a fixed position, this mixin utilizes the position: fixed property and absolute positioning for consistent centering across viewports.
```scss
.element {
  @include center-fixed;
}
```

**Color Transparency** `color-transparency.scss`  
Achieve semi-transparency in background or border colors effortlessly with this mixin, adjusting the alpha channel to the desired opacity level.
```scss
.element {
  @include transparency(bg, pure-white, 70);
}

.another-element {
  @include transparency(border, pure-black, 50);
}
```

**Fixed Positioning** `fixed.scss`  
Customize the positioning of an element within the viewport easily using this mixin, offering control over top, right, bottom, and left values for efficient placement.
```scss
.element {
  @include fixed($top: 10, $right: 12);
}
```

**Flexible Box Layout** `flex.scss`  
A comprehensive collection for handling flexbox layouts, allowing users to define display property, flex direction, alignment, justification, and gap for flexible container elements.
```scss
.container {
  @include flex(row, center, space-between, 4);
}

.vertical-container {
  @include flex-col-center(8);
}

.column-layout {
  @include flex-col;
}

.centered-box {
  @include flex-center;
}

.centered-column {
  @include flex-col-center;
}
```
**Focus Styling** `focus.scss`  
Enhance the user experience by providing consistent and customizable styling for focused elements. Choose between light and dark focus styles with optional border and box-shadow configurations.
```scss
.input-field {
  @include focus(light);
}

.button {
  @include focus(dark);
}
```

**Font Face** `font-face.scss`  
Streamline the inclusion and configuration of custom font faces with this mixin, supporting multiple font formats and offering options for font weight, style, and display behavior.
```scss
@include font-face(
  "CustomFont",
  "../fonts/custom-font",
  $exts: woff2 woff ttf,
  $display: fallback,
  $weight: 500,
  $style: italic
);

@include font-face(
  "AnotherFont",
  "../fonts/another-font",
  $exts: woff2 woff,
  $weight: 700
);
```
**Grid Layout** `grid.scss`  
Simplify grid layout creation by defining the number of columns and optional row and column gaps with this concise mixin, enhancing flexibility in grid-based designs.
```scss
.container {
  @include grid(3, $row-gap: 5, $col-gap: 3);
}

.sidebar {
  @include grid(2);
}
```
**Line Clamp** `line-clamp.scss`  
Implement the CSS line clamp technique effortlessly with this mixin, limiting the display of text to a specified number of lines and improving readability.
```scss
.description {
  @include line-clamp(3);
}

.long-text {
  @include line-clamp(4);
}
```

**Margin Utility** `margin.scss`  
A versatile set of utility mixins for handling margin properties, facilitating easy adjustment of margin values for all sides, individual sides, or both horizontal and vertical margins.
```scss
.element {
  @include m(4);
}

.top-margin {
  @include mt(2);
}

.bottom-margin {
  @include mb(4);
}

.left-margin {
  @include ml(8);
}

.right-margin {
  @include mr(12);
}

.horizontal-margin {
  @include mx(3, 2);
}

.vertical-margin {
  @include my(1.5, 4);
}
```

**Padding Utility** `padding.scss`  
This collection streamlines the application of padding properties with utility mixins, allowing for easy adjustment of padding values for all sides, individual sides, or both horizontal and vertical paddings.
```scss
.element {
  @include p(4);
}

.top-padding {
  @include pt(3);
}

.bottom-padding {
  @include pb(5);
}

.left-padding {
  @include pl(1);
}

.right-padding {
  @include pr(2);
}

.horizontal-padding {
  @include px(3, 4);
}

.vertical-padding {
  @include py(1.5, 3);
}
```

**Disable Reduced Motion** `reduced-motion.scss`  
This mixin provides a straightforward way to disable CSS transitions based on the user's preference for reduced motion, targeting the prefers-reduced-motion media query for enhanced accessibility.
```scss
.element {
  transition: opacity 0.3s ease;

  @include disable-reduced-motion;
}
```

**Responsive Design** `responsive.scss`  
Simplify the creation of responsive styles by utilizing specified breakpoints. This mixin applies styles only when the viewport width is less than or equal to the specified breakpoint, following a mobile-first approach.
```scss
.element {
  width: max-content;

  @include responsive(md) {
    width: auto;
  }

  @include responsive(sm) {
    display: none;
  }
}
```

**Square Element** `square.scss`  
Streamline the creation of square elements by setting both the width and height to the same size, ensuring design consistency, especially in responsive layouts or square-based components.
```scss
.square-box {
  @include square(4);
}

.large-square {
  @include square(8);
}
```

**Transition Utilities** `transition.scss`  
A collection of utility mixins for streamlining the application of CSS transitions, covering common scenarios such as transitioning all properties, specific property groups (colors, opacity, shadows, transforms), and custom properties.
```scss
.element {
  @include transition-all;

  &:hover {
    @include transition-colors(200);
    background-color: #3498db;
  }

  .nested-element {
    @include transition-opacity;
    opacity: 0.8;

    &:hover {
      @include transition-transform(300);
      transform: scale(1.2);
    }
  }
}
```

**Typography** `typography.scss`  
Simplifying typography styling, the mixin enables setting font size, font weight, and line height in a single declaration, promoting consistency across various text elements.
```scss
.heading {
  @include typography(4xl, bold, tight);
}

.paragraph {
  @include typography(md, regular, normal);
}
```