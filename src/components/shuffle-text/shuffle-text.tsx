import { Component, h, Listen, Prop, State, Watch } from '@stencil/core';

@Component({
  tag: 'shuffle-text',
})
export class ShuffleText {
  @Prop() text = '';
  @Prop() emptyChars = '-';
  @Prop() randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ?!#$%&()=~-|';
  @Prop() timeOut = 10;
  @Prop() openTime = 1000;
  @Prop() hover = false;

  @State() outputText = '';

  private animationFrameId?: number;
  private timerId?: ReturnType<typeof setTimeout>;
  private rawText = '';
  private initTime = 0;
  private startTime = 0;
  private originalLength = 0;
  private shuffleLength = 0;
  private outputLength = 0;

  private stop(): void {
    if (this.timerId !== undefined) {
      clearTimeout(this.timerId);
      this.timerId = undefined;
    }

    if (this.animationFrameId !== undefined) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = undefined;
    }
  }

  private init(): void {
    this.stop();
    this.rawText = '';
    this.outputText = '';
    this.initTime = Date.now();
    this.startTime = this.initTime;
    this.originalLength = this.text.length;
    this.shuffleLength = 0;
    this.outputLength = 0;
  }

  private generateRandomChars(length: number): string {
    if (this.randomChars.length === 0) {
      return '';
    }

    let randomText = '';
    for (let index = 0; index < length; index++) {
      randomText += this.randomChars[Math.floor(Math.random() * this.randomChars.length)];
    }
    return randomText;
  }

  private update = (): void => {
    const currentTime = Date.now();

    if (currentTime - this.startTime > this.timeOut) {
      this.startTime = currentTime;

      if (this.rawText.length < this.originalLength) {
        this.rawText = `${this.rawText}${this.emptyChars}`.slice(0, this.originalLength);
      }

      this.rawText =
        this.generateRandomChars(this.shuffleLength) + this.rawText.slice(this.shuffleLength);

      if (this.shuffleLength < this.originalLength && this.rawText.length > 2) {
        this.shuffleLength++;
      }

      if (currentTime - this.initTime > this.openTime) {
        this.rawText =
          this.text.slice(0, this.outputLength) + this.rawText.slice(this.outputLength);
        this.outputLength++;
      }
    }

    this.outputText = this.rawText;

    if (this.outputLength >= this.originalLength) {
      this.outputText = this.text;
      this.stop();
      return;
    }

    this.animationFrameId = requestAnimationFrame(this.update);
  };

  private start(): void {
    if (this.originalLength === 0) {
      return;
    }

    this.timerId = setTimeout(this.update, 100);
  }

  private restart(): void {
    this.init();
    this.start();
  }

  @Watch('text')
  protected reboot(): void {
    this.restart();
  }

  @Listen('mouseover')
  protected handleMouseOver(): void {
    if (this.hover) {
      this.restart();
    }
  }

  protected componentWillLoad(): void {
    this.restart();
  }

  disconnectedCallback(): void {
    this.stop();
  }

  protected render() {
    return <span>{this.outputText}</span>;
  }
}
