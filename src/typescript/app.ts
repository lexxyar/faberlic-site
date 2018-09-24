import "../app.scss";

import { Slider } from "./slider";
import { NavMenu } from "./navmenu";

document.addEventListener(
  "DOMContentLoaded",
  () => {
    let slider = new Slider('#slider');

    let menu = new NavMenu('#nav-menu');
  },
  false
);
