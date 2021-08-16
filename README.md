<div align="center">
  <h3 align="center">shuffle-text-c</h3>
  <p align="center">A component that allows you to shuffle text, by simply set a tag.</p>
  <p><a href="https://github.com/ivgtr/shuffle-text-c/blob/master/docs/README_ja.md" >日本語</a> | ENGLISH</p>
</div>

---

```html
<script src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js" type="module"></script>

<shuffle-text text="text to be displayed" />
```

### Demo

[demo](https://ivgtr.github.io/shuffle-text-c/)

### Usages

#### Script tag

- Set a script tag like this.
  `<script src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js" type="module"></script>`
- Call `<shuffle-text />` at any place.

#### npmjs

- Install it with `npm install shuffle-text-c`
- Call the loader as follows.

#### Vue

```html
<script>
  import { applyPolyfills, defineCustomElements } from "shuffle-text-c/loader";

  applyPolyfills().then(() => {
    defineCustomElements();
  });

  //...
```

```html
<templeate>
  <div>
    <shuffle-text text="text to be displayed" />
  </div>
</templeate>
```

#### React

```jsx
import { applyPolyfills, defineCustomElements } from "shuffle-text-c/loader";

applyPolyfills().then(() => {
  defineCustomElements();
});

export default function App() {
  return (
    <div>
      <shuffle-text text="text to be displayed" />
    </div>
  );
}
```

### Configs

| Property      | Attribute      | Description                                | Type      | Default                                     | Required |
| ------------- | -------------- | ------------------------------------------ | --------- | ------------------------------------------- | -------- |
| `text`        | `text`         | text to be displayed                       | `string`  |                                             | Yes      |
| `emptyChars`  | `empty-chars`  | Fill-in-the-blank character                | `string`  | `'-'`                                       | No       |
| `hover`       | `hover`        | re-rendering on hover                      | `boolean` | `false`                                     | No       |
| `openTime`    | `open-time`    | The time it takes for text to be inserted. | `number`  | `1000`                                      | No       |
| `randomChars` | `random-chars` | Randomly inserted characters               | `string`  | `'ABCDEFGHIJKLMNOPQRSTUVWXYZ?!#$%&()=~-\|'` | No       |
| `timeOut`     | `time-out`     | One shuffle time                           | `number`  | `10`                                        | No       |

---

## License

MIT ©[ivgtr](https://github.com/ivgtr)

[![Github Follow](https://img.shields.io/github/followers/ivgtr?style=social)](https://github.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)
