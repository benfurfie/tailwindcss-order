# TailwindCSS Order

This plugin allows you to make use of the order CSS property in a flex or grid container within TailwindCSS. It works great with the [TailwindCSS grid plugin](https://www.npmjs.com/package/tailwindcss-grid).

For more information about the order CSS property, see the [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/order) on order CSS.

## Installation

Add this plugin to your project:

```bash
# Install via NPM
npm install tailwindcss-order --save-dev

# Install via Yarn
yarn add tailwindcss-order -D
```

## Usage

Once it is downloaded, open your tailwindcss config file. If this is pre-v1, it may be called tailwind.js. If it is based on v1 or later, it will be called tailwind.config.js.

Open your Tailwind configuration file and scroll down to where you see the plugins section.

Add `require('tailwind-order')({ options }),` into the array like so:

```javascript
plugins: [
  require('tailwindcss-order')({
    order: {
      '-1': '-1',
      '0': '0',
      '1': '1',
      '2': '2',
      '3': '3',
    },
    variants: ['responsive'],
  }),
]
```

This configuration would create the following classes (plus responsive variants):

```css
.order--1 {
  order: -1;
}

.order-0 {
  order: 0;
}

.order-1 {
  order: 1;
}

.order-2 {
  order: 2;
}

.order-3 {
  order: 3;
}

```