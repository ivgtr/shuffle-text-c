import { Component, Prop, State, Watch, Element, h } from '@stencil/core' // eslint-disable-line no-unused-vars, @typescript-eslint/no-unused-vars
// import { format } from '../../utils/utils'

@Component({
  tag: 'shuffle-text'
})
export class ShuffleText {
  @Prop() text: string = 'Hello World!'
  @Prop() emptyChars: string = '-'
  @Prop() randomChars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?!#$%&()=~-|'
  @Prop() timeOut: number = 10
  @Prop() openTime: number = 1000
  @Prop() mode: 'in' | 'hover' = 'in'

  @State() myReq: number
  @State() _text: string = ''
  @State() outputText: string = ''
  @State() initTime: number = 0
  @State() startTime: number = 0
  @State() originalLength: number = 0
  @State() shuffleLength: number = 0
  @State() outputLength: number = 0

  @State() Element: HTMLElement
  @Element() myElement: HTMLElement

  private init(): void {
    cancelAnimationFrame(this.myReq)
    this._text = ''
    this.outputText = ''
    this.initTime = new Date().getTime()
    this.startTime = this.initTime
    this.originalLength = this.text.length
    this.shuffleLength = 0
    this.outputLength = 0
  }

  private generateRandomChars(l: number): string {
    let randomText = ''
    for (let i = 0; i < l; i++) {
      randomText += this.randomChars[Math.floor(Math.random() * this.randomChars.length)]
    }
    return randomText
  }

  private update() {
    if (this._text.length > this.originalLength) {
      return
    }
    const currentTime = new Date().getTime()
    if (currentTime - this.startTime > this.timeOut) {
      this.startTime = currentTime

      if (this._text.length < this.originalLength) {
        this._text += '-'
      }

      this._text =
        this.generateRandomChars(this.shuffleLength) + this._text.slice(this.shuffleLength)

      if (this.shuffleLength < this.originalLength) this.shuffleLength++

      if (currentTime - this.initTime > this.openTime) {
        this._text = this.text.slice(0, this.outputLength) + this._text.slice(this.outputLength)
        this.outputLength++
      }
    }

    this.outputText = this._text

    this.myReq = requestAnimationFrame(this.update.bind(this))
  }

  @Watch('text')
  protected reboot(): void {
    this.init()
    this.myReq = requestAnimationFrame(this.update.bind(this))
    if (this.mode === 'hover') {
      this.myElement.querySelector('span').addEventListener('mouseover', () => {
        this.init()
        this.myReq = requestAnimationFrame(this.update.bind(this))
      })
    }
  }

  protected componentWillLoad(): void {
    this.init()
  }
  protected componentDidLoad() {
    if (this.mode === 'hover') {
      this.outputText = this.text
      this.myElement.querySelector('span').addEventListener('mouseover', () => {
        this.init()
        this.myReq = requestAnimationFrame(this.update.bind(this))
      })
    } else if (this.mode === 'in') {
      this.myReq = requestAnimationFrame(this.update.bind(this))
    }
  }
  protected render() {
    return <span>{this.outputText}</span>
  }
}
