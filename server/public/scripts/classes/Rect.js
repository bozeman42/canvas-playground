import {Vec2} from './math.js';
export default class Rect {
  constructor(context,x = 0, y = 0,width = 100,height = 100) {
    this.size = new Vec2;
    this.pos = new Vec2;
    this.context = context;
    this.setSize(width,height);
    this.setPosition(x,y);
    this.render();
  }
  setSize (w,h) {
    this.size.x = w;
    this.size.y = h;
  }
  setPosition(x,y) {
    this.pos.x = x;
    this.pos.y = y;
  }

  clear() {
    this.context.clearRect(this.pos.x - 1, this.pos.y - 1, this.size.x + 2, this.size.y + 2);
  }

  render() {
    this.context.strokeRect(this.pos.x,this.pos.y,this.size.x,this.size.y);
  }

}

export function clearRect(array) {
  array.forEach((rect) => {
    rect.clear();
  })
}