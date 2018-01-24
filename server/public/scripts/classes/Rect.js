import {Vec2} from './math';

export default class Rect {
  constructor(width = 100,height = 100,x = 0, y = 0,context) {
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

  render() {
    this.context.drawRect(this.size.x,this.size.y,this.pos.x,this.pos.y);
  }

}