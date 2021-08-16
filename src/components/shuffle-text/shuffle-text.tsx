import { Component, Element, h, Prop, State, Watch } from "@stencil/core";

@Component({
  tag: "shuffle-text",
})
export class ShuffleText {
  @Prop() text: string;
  @Prop() emptyChars: string = "-";
  @Prop() randomChars: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ?!#$%&()=~-|";
  @Prop() timeOut: number = 10;
  @Prop() openTime: number = 1000;
  @Prop() hover: boolean = false;

  @State() myRequestAnimationFrame: ReturnType<typeof requestAnimationFrame> | undefined;
  @State() myTimer: ReturnType<typeof setTimeout> | undefined;
  @State() rawText: string = "";
  @State() outputText: string = "";
  @State() initTime: number = 0;
  @State() startTime: number = 0;
  @State() originalLength: number = 0;
  @State() shuffleLength: number = 0;
  @State() outputLength: number = 0;

  @State() Element: HTMLElement;
  @Element() myElement: HTMLElement;

  private init(): void {
    clearTimeout(this.myTimer);
    cancelAnimationFrame(this.myRequestAnimationFrame);
    this.rawText = "";
    this.outputText = "";
    this.initTime = new Date().getTime();
    this.startTime = this.initTime;
    this.originalLength = this.text.length;
    this.shuffleLength = 0;
    this.outputLength = 0;
  }

  private generateRandomChars(l: number): string {
    let randomText = "";
    for (let i = 0; i < l; i++) {
      randomText += this.randomChars[Math.floor(Math.random() * this.randomChars.length)];
    }
    return randomText;
  }

  private update() {
    if (this.rawText.length > this.originalLength) {
      return;
    }
    const currentTime = new Date().getTime();
    if (currentTime - this.startTime > this.timeOut) {
      this.startTime = currentTime;

      if (this.rawText.length < this.originalLength) {
        this.rawText += this.emptyChars;
      }

      this.rawText =
        this.generateRandomChars(this.shuffleLength) + this.rawText.slice(this.shuffleLength);

      if (this.shuffleLength < this.originalLength && this.rawText.length > 2) this.shuffleLength++;

      if (currentTime - this.initTime > this.openTime) {
        this.rawText =
          this.text.slice(0, this.outputLength) + this.rawText.slice(this.outputLength);
        this.outputLength++;
      }
    }

    this.outputText = this.rawText;

    this.myRequestAnimationFrame = requestAnimationFrame(this.update.bind(this));
  }

  private start(): void {
    this.myTimer = setTimeout(this.update.bind(this), 100);
  }

  @Watch("text")
  protected reboot(): void {
    this.init();
    this.start();
  }

  protected componentWillLoad(): void {
    this.init();
    this.start();
  }
  protected componentDidLoad(): void {
    if (this.hover) {
      this.myElement.querySelector("span").addEventListener("mouseover", () => {
        this.init();
        this.myRequestAnimationFrame = requestAnimationFrame(this.update.bind(this));
      });
    }
  }

  protected render(): typeof h {
    return <span>{this.outputText}</span>;
  }
}
