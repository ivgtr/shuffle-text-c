import { Component, Prop, State, Watch, Element, h } from '@stencil/core'; // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars
// import { format } from '../../utils/utils'
export class ShuffleText {
  constructor() {
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
  static get is() { return "shuffle-text"; }
  static get properties() { return {
    "text": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "text",
      "reflect": false,
      "defaultValue": "'Hello World! Hello World! Hello World! Hello World! Hello World! Hello World!'"
    },
    "emptyChars": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "empty-chars",
      "reflect": false,
      "defaultValue": "'-'"
    },
    "randomChars": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "random-chars",
      "reflect": false,
      "defaultValue": "\"ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890?!#$%&'()0=~-|\""
    },
    "timeOut": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "time-out",
      "reflect": false,
      "defaultValue": "10"
    },
    "openTime": {
      "type": "number",
      "mutable": false,
      "complexType": {
        "original": "number",
        "resolved": "number",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "open-time",
      "reflect": false,
      "defaultValue": "1000"
    },
    "mode": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "'in' | 'hover'",
        "resolved": "\"hover\" | \"in\"",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "mode",
      "reflect": false,
      "defaultValue": "'in'"
    }
  }; }
  static get states() { return {
    "myReq": {},
    "_text": {},
    "outputText": {},
    "initTime": {},
    "startTime": {},
    "originalLength": {},
    "shuffleLength": {},
    "outputLength": {},
    "Element": {}
  }; }
  static get elementRef() { return "myElement"; }
  static get watchers() { return [{
      "propName": "text",
      "methodName": "reboot"
    }]; }
}
