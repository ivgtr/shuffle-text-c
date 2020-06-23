# vue-shuffle-text
[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

### これは何?
##### テキストをシャカシャカするやつです。


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
      text: 'welcome' // 表示するテキストを指定
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
### 追加の設定
```javascript
import { ShuffleText } from 'vue-shuffle-text'
export default {
  components: {
    ShuffleText
  },
  data(){
    return{
      text: 'welcome', // 表示するテキストを指定
      time: 20、 // テキストを表示する速度を調整
      random: 'ABCDEFGHIJKLMNOPQRSTUVWXYG01234566789', // シャカシャカする文字を指定
      empty: '-' // シャカシャカする前に表示する文字を指定
    }
  }
}
```
```html
<templeate>
  <div id="app">
    <shuffle-text
      :original-text="text"
      :time-out="time"
      :random-chars="random"
      :empty-char="empty"
    />
  </div>
</templeate>
```

### License
MIT © [ivgtr](http://ivgtr.me)