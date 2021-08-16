<div align="center">
  <h3 align="center">shuffle-text-c</h3>
  <p align="center">テキストをシャカシャカシャッフルさせるコンポーネント</p>
  <p>日本語 | <a href="https://github.com/ivgtr/shuffle-text-c/blob/master/README.md" >ENGLISH</a></p>
</div>

---

```html
<script src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js" type="module"></script>

<shuffle-text text="表示させたいテキスト" />
```

### デモ

[demo](https://ivgtr.github.io/shuffle-text-c/)

### 使い方

#### Script tag

- `<script src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js" type="module"></script>` タグを設置する
- 任意の場所で`<shuffle-text />` を呼び出す

#### npmjs

- `npm install shuffle-text-c` を実行
- loader を呼び出して任意の場所でコンポーネントを呼び出す

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
    <shuffle-text text="表示させたいテキスト" />
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
      <shuffle-text text="表示させたいテキスト" />
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
