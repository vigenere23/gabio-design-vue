[![npm version](https://badge.fury.io/js/%40gabio%2Fdesign-vue.svg)](https://badge.fury.io/js/%40gabio%2Fdesign-vue)

# 💎 @gabio/design-vue

A Vue design library by Gabriel St-Pierre

## Installation

```
yarn add @gabio/design-vue
```

## Usage

In the `main.ts`/`main.js` file of your Vue project, add the following lines :

```ts
import Vue from 'vue'
import gio from '@gabio/design-vue'
import '@gabio/design-vue/dist/gio.css' // for loading component styles

Vue.use(gio)
```

You can then use the components without importing them.

## Showcase

<http://vigenere23.github.io/gio-library-showcase>

## Documentation

There is no documentation for now. Please read the [`src/`](./src) folder content to know what each file offers. You can also check the [`showcase/`](./showcase) implementation.

### Folder structure

- `src/vue/components/` : Vue components
- `src/lib/mixins/` : Mixins to be reused in your components
- `src/lib/styles/` : SCSS variables and functions for reuse
- `src/lib/utils/` : Usefull helpers

## NPM module

The npm module for this library is available [here](https://www.npmjs.com/package/@gabio/design-vue). Mixins and styles are available inside the compiled `lib/` subfolder.

## Future work

This library is going under a massive optimization step. This means that the dynamic markdown capabilities will be removed, but possibly ported to a new package. In the meantime, a new markdown-to-vue compiler is on its way, which will offer better functionnality and speed.
