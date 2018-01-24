import Rect, {clearRect, connectRect, updateRect} from './classes/Rect.js';
const SPEED_FACTOR = 30;

window.onload = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth - 20 ;
  canvas.height = window.innerHeight - 20;
  
  console.log(canvas);

  let ctx = canvas.getContext('2d');

  let rect1 = new Rect(ctx,100,100,100,100,(Math.random() * SPEED_FACTOR) -  (SPEED_FACTOR / 2),(Math.random() * SPEED_FACTOR) - (SPEED_FACTOR / 2));
  let rect2 = new Rect(ctx, 500,100,200,200,(Math.random() * SPEED_FACTOR) - (SPEED_FACTOR / 2),(Math.random() * SPEED_FACTOR) - (SPEED_FACTOR / 2));
  // let rect3 = new Rect(ctx, 300,100,10,10,.5,.7);
  let rect3 = new Rect(ctx,(rect1.pos.x + rect2.pos.x)/2,(rect1.pos.y + rect2.pos.y)/2, (rect1.size.x + rect2.size.x)/2,(rect1.size.y + rect2.size.y)/2)
  let rects = [rect1,rect2];
  let step = () => {    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    updateRect(rects);
    rect3.setPosition((rect1.pos.x + rect2.pos.x)/2,(rect1.pos.y + rect2.pos.y)/2);
    rect3.setSize((rect1.size.x + rect2.size.x)/2,(rect1.size.y + rect2.size.y)/2);
    rect3.render();
    connectRect(rects,ctx);
    window.requestAnimationFrame(step);
  }
  window.requestAnimationFrame(step);
}

window.onresize = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  console.log(canvas);
}

