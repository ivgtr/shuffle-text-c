# vue-shuffle-text
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

#### これは何?
#### テキストをシャカシャカするやつです。

### デモ
[demo](https://ivgtr.github.io/vue-shuffle-text/)	

### インストール

```
npm i vue-shuffle-text
```
```
yarn add vue-shuffle-text
```

### 使い方
```javascript
import { ShuffleText } from 'vue-shuffle-text'
export default {
  components: {
    ShuffleText
  },
  data(){
    return{
      text: 'welcome'
    }
  }
}
```
```html
<templeate>
  <div id="app">
    <shuffle-text :original-text="text" />
  </div>
</templeate>
```