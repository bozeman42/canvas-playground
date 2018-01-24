import { Vec2 } from './math.js';
export default class Rect {
  constructor(context, x = 0, y = 0, width = 100, height = 100, velX = 0, velY = 0) {
    this.size = new Vec2;
    this.pos = new Vec2;
    this.velocity = new Vec2;
    this.context = context;
    this.setSize(width, height);
    this.setPosition(x, y);
    this.setVelocity(velX, velY);
    console.log(context);
    this.render();
  }
  setSize(w, h) {
    this.size.x = w;
    this.size.y = h;
  }
  setPosition(x, y) {
    this.pos.x = x;
    this.pos.y = y;
  }
  setVelocity(x, y) {
    this.velocity.x = x;
    this.velocity.y = y;
  }

  clear() {
    this.context.clearRect(this.pos.x - 1, this.pos.y - 1, this.size.x + 2, this.size.y + 2);
  }

  render() {
    this.context.strokeRect(this.pos.x, this.pos.y, this.size.x, this.size.y);
  }

  update() {
    let x = this.pos.x;
    let x2 = x + this.size.x;
    let vx = this.velocity.x;
    let y = this.pos.y;
    let y2 = y + this.size.y;
    let vy = this.velocity.y;
    let w = this.context.canvas.width;
    let h = this.context.canvas.height;

    this.setPosition(x + vx,y);
    x = x + vx;
    if (vx > 0) {
      if (x2 > w) {
        console.log('collision x+');
        this.setPosition(w - this.size.x,y);
        this.setVelocity(-vx,vy);
      }
    }
    if (vx < 0) {
      if (x < 0) {
        console.log('collision x-');
        this.setPosition(0,y);
        this.setVelocity(-vx,vy);
      }
    }
    this.setPosition(x,y+vy);
    y = y + vy;
    if (vy > 0) {
      if (y2 > h) {
        console.log('collision y+');
        this.setPosition(x,h - this.size.y);
        this.setVelocity(vx,-vy);
      }
    }
    if (vy < 0) {
      if (y < 0) {
        console.log('collision y-');
        this.setPosition(x,0);
        this.setVelocity(vx,-vy);
      }
    }
    this.render();
  }

}

export function clearRect(array) {
  array.forEach((rect) => {
    rect.clear();
  })
}

export function updateRect(array) {
  array.forEach((rect) => {
    rect.update();
  })
}

export function connectRect(array, context) {
  let c = context;
  array.forEach((rect, i, arr) => {
    arr.forEach((otherRect, j) => {
      if (i !== j) {
        let x = rect.pos.x;
        let y = rect.pos.y;
        let xs = rect.size.x;
        let ys = rect.size.y;
        let x2 = otherRect.pos.x
        let y2 = otherRect.pos.y
        let xs2 = otherRect.size.x
        let ys2 = otherRect.size.y
        c.beginPath();
        c.moveTo(x,y);
        c.lineTo(x2,y2);
        c.stroke();
        c.beginPath();
        c.moveTo(x + xs, y);
        c.lineTo(x2 + xs2,y2);
        c.stroke();
        c.beginPath();
        c.moveTo(x, y + ys);
        c.lineTo(x2, y2 + ys2);
        c.stroke();
        c.beginPath();
        c.moveTo(x + xs, y + ys);
        c.lineTo(x2 + xs2, y2 + ys2);
        c.stroke();
      }
    })
  })
}