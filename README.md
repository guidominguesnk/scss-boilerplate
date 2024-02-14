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
This mixin provides a convenient way to apply absolute positioning to an element with customizable top, right, bottom, and left values. It enhances flexibility in layout design by allowing you to specify the positioning offsets.
```scss
.element {
  @include absolute($top: 5, $right: 10);
}
```

**Border Styling** `border.scss`  
This mixin set simplifies the application of border styles to elements, offering a flexible approach to define width, style, color, and opacity. It provides options for a global border or individual borders for top, bottom, left, and right sides.
```scss
.element {
  @include border(thick, solid, pure-white);
}

.another-element {
  @include border-t(thin, dashed, pure-black, 80);
}
```

**Center Fixed Position** `center-fixed.scss`  
This mixin simplifies the centering of an element in a fixed position within its containing space. It utilizes the position: fixed property along with absolute positioning, ensuring the element remains centered regardless of viewport changes.
```scss
.element {
  @include center-fixed;
}
```

**Color Transparency** `color-transparency.scss`  
This mixin facilitates the application of transparency to background or border colors. It adjusts the specified color's alpha channel to achieve the desired opacity level, providing a straightforward way to create semi-transparent elements.
```scss
.element {
  @include transparency(bg, pure-white, 70);
}

.another-element {
  @include transparency(border, pure-black, 50);
}
```

**Fixed Positioning** `fixed.scss`  
This mixin simplifies the application of fixed positioning to an element, allowing customization of top, right, bottom, and left values. It is designed to efficiently position an element within the viewport, providing control over its placement.
```scss
.element {
  @include fixed($top: 10, $right: 12);
}
```

**Flexible Box Layout** `flex.scss`  
This mixin collection provides a versatile and customizable approach to handling flexbox layouts. It allows you to easily define the display property, flex direction, alignment, justification, and gap for flexible container elements.
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
This mixin provides a consistent and customizable styling for focused elements. It enhances the user experience by defining a clear and visible focus state. You can choose between light and dark focus styles, with an optional border and box-shadow configuration.
```scss
.input-field {
  @include focus(light);
}

.button {
  @include focus(dark);
}
```

**Font Face** `font-face.scss`  
This mixin streamlines the declaration of custom font faces, allowing for easy inclusion and configuration. It supports multiple font formats and provides options for font weight, style, and display behavior.
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
This mixin simplifies the creation of grid layouts by providing a concise way to define the number of columns and optional row and column gaps. It enhances the flexibility of grid-based designs by offering easy customization.
```scss
.container {
  @include grid(3, $row-gap: 5, $col-gap: 3);
}

.sidebar {
  @include grid(2);
}
```
**Line Clamp** `line-clamp.scss`  
This mixin simplifies the implementation of the CSS line clamp technique, limiting the display of text to a specified number of lines. It enhances the readability of overflowing text by preventing it from exceeding a certain length.
```scss
.description {
  @include line-clamp(3);
}

.long-text {
  @include line-clamp(4);
}
```

**Margin Utility** `margin.scss`  
This mixin collection provides a versatile set of utility mixins for handling margin properties. It allows you to easily set margin values for all sides, individual sides, or both horizontal and vertical margins.
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
This mixin collection provides a versatile set of utility mixins for handling padding properties. It allows you to easily set padding values for all sides, individual sides, or both horizontal and vertical paddings.
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
This mixin provides a way to disable certain CSS transitions when the user prefers reduced motion. It targets the prefers-reduced-motion media query, allowing you to enhance accessibility by respecting users' preferences for reduced motion.
```scss
.element {
  transition: opacity 0.3s ease;

  @include disable-reduced-motion;
}
```

**Responsive Design** `responsive.scss`  
This mixin simplifies the creation of responsive styles by utilizing a specified breakpoint. It applies the provided styles only when the viewport width is less than or equal to the specified breakpoint, allowing for a mobile-first approach to responsive design.
```scss
.element {
  font-size: 20px;

  @include responsive(md) {
    font-size: 18px;
  }

  @include responsive(sm) {
    font-size: 16px;
  }
}
```

**Square Element** `square.scss`  
This mixin simplifies the creation of square elements by setting both the width and height to the same size. It enhances consistency in design, especially when working with responsive layouts or square-based components.
```scss
.square-box {
  @include square(4);
}

.large-square {
  @include square(8);
}
```

**Transition Utilities** `transition.scss`  
This mixin collection provides a set of utility mixins to streamline the application of CSS transitions. It covers common transition scenarios, such as transitioning all properties, specific property groups (colors, opacity, shadows, transforms), and custom properties.
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
This mixin simplifies the styling of typography by allowing you to set font size, font weight, and line height in a single declaration. It enhances consistency in text styling across different elements.
```scss
.heading {
  @include typography(4xl, bold, tight);
}

.paragraph {
  @include typography(md, regular, normal);
}
```