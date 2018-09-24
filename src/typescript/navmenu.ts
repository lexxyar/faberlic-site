export class NavMenu {
  private _menuObject: HTMLElement;
  public constructor(_menuSelector: string) {
    this._menuObject = document.querySelector(_menuSelector) as HTMLElement;
    if (!this._menuObject) {
      return;
    }
    let button = this._menuObject.querySelector(
      ".expandable-button"
    ) as HTMLElement;
    let that = this;
    button.addEventListener("click", e => {
      e.preventDefault();
      that._menuObject.classList.toggle("expanded");
    });
  }
}
