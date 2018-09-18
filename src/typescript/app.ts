import '../css/app.scss';

export class C {
    private x = 10
    getX = () => this.x;
    setX = (newVal: number) => { this.x = newVal; }
}

export let x = new C();
export let y = { ...{ some: "value" } }

import { a } from './next';

console.log(a.sum(2, 3).toString());
