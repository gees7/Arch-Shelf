# Responsive guidelines and utilities

## Less snippet for difference screen sizes

See Example snippet below

```css
// make sure you update the path to match your file location this has the variables screen-size-xx
@import '../../../assets/css/theme/foundation/_variables.less';

// for small screens
@media (max-width: @screen-size-sm) {
  .your-class {
    max-width: @screen-size-md;
  }
}
// for medium screens
@media (max-width: @screen-size-md) {
  .your-class {
    max-width: @screen-size-md;
  }
}

// for large screens
@media (max-width: @screen-size-lg) {
  .your-class {
    max-width: @screen-size-lg;
  }
}

// for extra large screens
@media (max-width: @screen-size-xl) {
  .your-class {
    max-width: @screen-size-xl;
  }
}
```

## Animations

For animations a packaged reac-animatte-on-scroll has been added, see an example below on how to use it

```jsx
import ScrollAnimation from 'react-animate-on-scroll';
<ScrollAnimation animateIn="fadeIn">Some Text</ScrollAnimation>;
```

[More reference...](https://www.npmjs.com/package/react-animate-on-scroll)
