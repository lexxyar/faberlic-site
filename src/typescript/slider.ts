class SliderConfig {
  public interval: number = 1000;
}

export class Slider {
  private _obj: HTMLElement;
  private _timer: number;
  private _conf: SliderConfig;
  private _items: NodeList;
  private _activeItem: number;
  static a:number = 1;
  public constructor(private _selector: string, private _config: object = {}) {
    Slider.a++;
    console.log(Slider.a);
    this._obj = document.querySelector(_selector) as HTMLElement;
    this._items = this._obj.querySelectorAll(".item");
    this._activeItem = 1;
    let e = this._items[this._activeItem - 1] as HTMLElement;
    e.classList.toggle("active");
    console.log(e.classList);
    // (this._items[this._activeItem - 1] as HTMLElement).classList.toggle('active');

    this._conf = new SliderConfig();
    this.fillConfig();

    this._timer = setInterval(() => {
      this.onTick();
    }, this._conf.interval);
  }
  private onTick() {
    // console.log('Tick');
  }

  private fillConfig() {}
}
