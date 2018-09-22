class SliderConfig {
  public interval: number = 1000;
}

export class Slider {
  private _obj: HTMLElement;
  private _timer: number;
  private _conf: SliderConfig;
  private _navItems: NodeList;
  private _slideItems: NodeList;
  private _activeItem: number;
  static a: number = 1;
  public constructor(private _selector: string, private _config: object = {}) {
    Slider.a++;
    console.log(Slider.a);
    this._obj = document.querySelector(_selector) as HTMLElement;
    this._activeItem = 0;
    this._navItems = this._obj.querySelectorAll(".navpg ul li") as NodeList;
    this._slideItems = this._obj.querySelectorAll(".items .item") as NodeList;
    this.setActiveNav();
    for (let i = 0; i < this._navItems.length; i++) {
      let liItem = (this._navItems[i] as HTMLElement).querySelector(
        "a"
      ) as HTMLElement;
      let that = this;
      liItem.addEventListener("click", e => {
        e.preventDefault();
        let slideNum = new Number((e.target as HTMLElement).dataset.slide);
        that._activeItem = slideNum.valueOf();
        that.setActiveNav();
      });
    }

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

  private setActiveNav() {
    for (let i = 0; i < this._navItems.length; i++) {
      let liItem = (this._navItems[i] as HTMLElement).querySelector(
        "a"
      ) as HTMLElement;
      let classList = liItem.classList;
      if (this._activeItem === i) {
        if (!classList.contains("active")) {
          classList.add("active");
        }
      } else {
        if (classList.contains("active")) {
          classList.remove("active");
        }
      }
    }
  }
}
