import { h, proxyCustomElement } from '@stencil/core/internal/client';
export { setAssetPath } from '@stencil/core/internal/client';

const ShuffleText = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
    this.text = 'Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!';
    this.emptyChars = '-';
    this.randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!#$%&'()0=~-|";
    this.timeOut = 10;
    this.openTime = 1000;
    this.mode = 'in';
    this._text = '';
    this.outputText = '';
    this.initTime = 0;
    this.startTime = 0;
    this.originalLength = 0;
    this.shuffleLength = 0;
    this.outputLength = 0;
  }
  init() {
    cancelAnimationFrame(this.myReq);
    this._text = '';
    this.outputText = '';
    this.initTime = new Date().getTime();
    this.startTime = this.initTime;
    this.originalLength = this.text.length;
    this.shuffleLength = 0;
    this.outputLength = 0;
  }
  generateRandomChars(l) {
    let randomText = '';
    for (let i = 0; i < l; i++) {
      randomText += this.randomChars[Math.floor(Math.random() * this.randomChars.length)];
    }
    return randomText;
  }
  update() {
    if (this._text.length > this.originalLength) {
      return;
    }
    const currentTime = new Date().getTime();
    if (currentTime - this.startTime > this.timeOut) {
      this.startTime = currentTime;
      if (this._text.length < this.originalLength) {
        this._text += '-';
      }
      this._text =
        this.generateRandomChars(this.shuffleLength) + this._text.slice(this.shuffleLength);
      if (this.shuffleLength < this.originalLength)
        this.shuffleLength++;
      if (currentTime - this.initTime > this.openTime) {
        this._text = this.text.slice(0, this.outputLength) + this._text.slice(this.outputLength);
        this.outputLength++;
      }
    }
    this.outputText = this._text;
    this.myReq = requestAnimationFrame(this.update.bind(this));
  }
  reboot() {
    this.init();
    this.myReq = requestAnimationFrame(this.update.bind(this));
    if (this.mode === 'hover') {
      this.myElement.querySelector('span').addEventListener('mouseover', () => {
        this.init();
        this.myReq = requestAnimationFrame(this.update.bind(this));
      });
    }
  }
  componentWillLoad() {
    this.init();
  }
  componentDidLoad() {
    if (this.mode === 'hover') {
      this.outputText = this.text;
      this.myElement.querySelector('span').addEventListener('mouseover', () => {
        this.init();
        this.myReq = requestAnimationFrame(this.update.bind(this));
      });
    }
    else if (this.mode === 'in') {
      this.myReq = requestAnimationFrame(this.update.bind(this));
    }
  }
  render() {
    return h("span", null, this.outputText);
  }
  get myElement() { return this; }
  static get watchers() { return {
    "text": ["reboot"]
  }; }
};

const ShuffleText$1 = /*@__PURE__*/proxyCustomElement(ShuffleText, [0,"shuffle-text",{"text":[1],"emptyChars":[1,"empty-chars"],"randomChars":[1,"random-chars"],"timeOut":[2,"time-out"],"openTime":[2,"open-time"],"mode":[1],"myReq":[32],"_text":[32],"outputText":[32],"initTime":[32],"startTime":[32],"originalLength":[32],"shuffleLength":[32],"outputLength":[32],"Element":[32]}]);
const defineCustomElements = (opts) => {
  if (typeof customElements !== 'undefined') {
    [
      ShuffleText$1
    ].forEach(cmp => {
      if (!customElements.get(cmp.is)) {
        customElements.define(cmp.is, cmp, opts);
      }
    });
  }
};

export { ShuffleText$1 as ShuffleText, defineCustomElements };
