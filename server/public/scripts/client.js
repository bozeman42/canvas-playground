import Rect, {clearRect, connectRect} from './classes/Rect.js';
window.onload = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth - 20 ;
  canvas.height = window.innerHeight - 20;
  
  console.log(canvas);

  let ctx = canvas.getContext('2d');

  let rect1 = new Rect(ctx);
  let rect2 = new Rect(ctx, 500,100,100,100);
  let rect3 = new Rect(ctx, 300,100,10,10);
  let rects = [rect1,rect2,rect3];
  setInterval(() => {
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    rect1.setPosition(rect1.pos.x + 1,rect1.pos.y + 1);
    rect1.setSize(rect1.size.x + 1,rect1.size.y + 1);
    rect1.render();
    rect2.setPosition(rect2.pos.x - 1,rect2.pos.y + 1);
    // rect2.setSize(rect2.size.x + 1,rect2.size.y + 1);
    rect2.render();
    rect3.render();
    connectRect(rects,ctx);
  }, 10);

}

window.onresize = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  console.log(canvas);
}

