# gio-library

A Vue design library by Gabriel St-Pierre

## Usage

In the `main.ts`/`main.js` file of your Vue project, add the following lines :

```ts
import Vue from 'vue'
import gio from '@vigenere23/gio'
import '@vigenere23/gio/dist/gio.css' // for loading component styles

Vue.use(gio)
```

You can then use the components without importing them.

## Showcase

<http://vigenere23.github.io/gio-library-showcase>

## Documentation

There is no documentation for now. Please read the [`src/`](./src) folder content to know what each file offers.

- `src/components/` : Vue components
- `src/mixins/` : Mixins to be reused in your components
- `src/styles/` : SCSS variables and functions for reuse

## NPM module

The npm module for this library is available [here](https://www.npmjs.com/package/@vigenere23/gio). Mixins and styles are available inside the compiled `lib/` subfolder.
