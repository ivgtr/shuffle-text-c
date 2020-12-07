export declare class ShuffleText {
  text: string;
  emptyChars: string;
  randomChars: string;
  timeOut: number;
  openTime: number;
  mode: 'in' | 'hover';
  myReq: number;
  _text: string;
  outputText: string;
  initTime: number;
  startTime: number;
  originalLength: number;
  shuffleLength: number;
  outputLength: number;
  Element: HTMLElement;
  myElement: HTMLElement;
  private init;
  private generateRandomChars;
  private update;
  protected reboot(): void;
  protected componentWillLoad(): void;
  protected componentDidLoad(): void;
  protected render(): any;
}
