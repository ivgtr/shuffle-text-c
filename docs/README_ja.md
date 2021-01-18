<div align="center">
  <h3 align="center">shuffle-text-c</h3>
  <p align="center">タグを設置するだけでテキストをシャカシャカできるコンポーネント</p>
  <p>日本語 | <a href="https://github.com/ivgtr/shuffle-text-c/blob/master/README.md" >ENGLISH</a></p>
</div>

---

```html
<script
  src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js"
  type="module"
></script>

<shuffle-text text="Hello world!" />
```

### デモ
[demo](https://ivgtr.github.io/shuffle-text-c/)	

### 使い方
#### Script tag
- `<script src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js" type="module"></script>` このようなscriptタグを設置します
- 任意の場所で`<shuffle-text />` を呼び出してください

#### Vue
- `npm i shuffle-text-c --save` を実行してください
- 次のようにloaderを呼び出してください
```vue
<script>
import { applyPolyfills, defineCustomElements } from 'shuffle-text-c/loader'

applyPolyfills().then(() => {
  defineCustomElements()
})

export default {
  name: "App"
}
</script>
```
```js
<templeate>
  <div id="app">
    <shuffle-text />
  </div>
</templeate>
```

#### React
- `npm i shuffle-text-c --save` を実行してください
- 次のようにloaderを呼び出してください
```jsx
import { applyPolyfills, defineCustomElements } from 'shuffle-text-c/loader'

applyPolyfills().then(() => {
  defineCustomElements()
});

export default function App() {
  return (
    <div className="App">
       <shuffle-text />
    </div>
  );
}

```


### 追加の設定
| Property      | Attribute      | Description                  | Type              | Default                                     |
| ------------- | -------------- | ---------------------------- | ----------------- | ------------------------------------------- |
| `emptyChars`  | `empty-chars`  | 最初に空白を埋める文字           | `string`          | `'-'`                                       |
| `mode`        | `mode`         | アニメーションの種類             | `"hover" \| "in"` | `'in'`                                      |
| `openTime`    | `open-time`    | 実際の文字が挿入されるまでの時間   | `number`          | `1000`                                      |
| `randomChars` | `random-chars` | ランダムに挿入される文字         | `string`          | `'ABCDEFGHIJKLMNOPQRSTUVWXYZ?!#$%&()=~-\|'` |
| `text`        | `text`         | 実際の文字                     | `string`          | `'Hello World!'`                            |
| `timeOut`     | `time-out`     | 1シャカシャカの時間             | `number`          | `10`                                        |


----------------------------------------------

## License
MIT ©[ivgtr](https://github.com/ivgtr)


[![Twitter Follow](https://img.shields.io/twitter/follow/mawaru_hana?style=social)](https://twitter.com/mawaru_hana) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  