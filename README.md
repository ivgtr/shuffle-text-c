<div align="center">
  <h3 align="center">shuffle-text-c</h3>
  <p align="center">A component that allows you to shuffle text, by simply set a tag.</p>
  <p><a href="https://github.com/ivgtr/shuffle-text-c/blob/master/docs/README_ja.md" >日本語</a> | ENGLISH</p>
</div>

---

```html
<script
  src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js"
  type="module"
></script>

<shuffle-text text="Hello world!" />
```

### Demo
[demo](https://ivgtr.github.io/shuffle-text-c/)	

### Usages
#### Script tag
- Set a script tag like this.
`<script src="https://unpkg.com/shuffle-text-c/dist/esm/shuffle-text.js" type="module"></script>`
- Call `<shuffle-text />` at any place.

#### Vue
- Install it with `npm i shuffle-text-c --save`
- Call the loader as follows.
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
- Install it with `npm i shuffle-text-c --save`
- Call the loader as follows
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


### Configs
| Property      | Attribute      | Description                  | Type              | Default                                     |
| ------------- | -------------- | ---------------------------- | ----------------- | ------------------------------------------- |
| `emptyChars`  | `empty-chars`  | Fill-in-the-blank character           | `string`          | `'-'`                                       |
| `mode`        | `mode`         | Animation mode             | `"hover" \| "in"` | `'in'`                                      |
| `openTime`    | `open-time`    | The time it takes for text to be inserted.   | `number`          | `1000`                                      |
| `randomChars` | `random-chars` | Randomly inserted characters         | `string`          | `'ABCDEFGHIJKLMNOPQRSTUVWXYZ?!#$%&()=~-\|'` |
| `text`        | `text`         | Text                     | `string`          | `'Hello World!'`                            |
| `timeOut`     | `time-out`     | One shuffle time             | `number`          | `10`                                        |


----------------------------------------------

## License
MIT ©[ivgtr](https://github.com/ivgtr)

[![Github Follow](https://img.shields.io/github/followers/ivgtr?style=social)](https://github.com/ivgtr) [![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE) [![Donate](https://img.shields.io/badge/%EF%BC%84-support-green.svg?style=flat-square)](https://www.buymeacoffee.com/ivgtr)  
