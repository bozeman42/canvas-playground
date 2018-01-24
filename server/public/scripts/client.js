import Rect, {clearRect, connectRect, updateRect} from './classes/Rect.js';
window.onload = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth - 20 ;
  canvas.height = window.innerHeight - 20;
  
  console.log(canvas);

  let ctx = canvas.getContext('2d');

  let rect1 = new Rect(ctx,100,100,100,100,3,2);
  let rect2 = new Rect(ctx, 500,100,200,200,-4,1);
  let rect3 = new Rect(ctx, 300,100,10,10,.5,.7);
  let rects = [rect1,rect2,rect3];
  setInterval(() => {
    
    ctx.clearRect(0,0,canvas.width, canvas.height);
    updateRect(rects);
    connectRect(rects,ctx);
  }, 1);

}

window.onresize = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  console.log(canvas);
}

