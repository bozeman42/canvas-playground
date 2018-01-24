import Rect from './classes/Rect.js';

window.onload = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth - 20 ;
  canvas.height = window.innerHeight - 20;
  
  console.log(canvas);

  let ctx = canvas.getContext('2d');

  let rect1 = new Rect(100,100,100,100,ctx);
  let rect2 = new Rect(500,100,100,100,ctx);
  
  setInterval(() => {
    
    ctx.clearRect(rect1.pos.x,rect1.pos.y,rect1.size.x,rect1.size.y);
    ctx.clearRect(rect2.pos.x,rect2.pos.y,rect2.size.x,rect2.size.y);
    rect1.setPosition(rect1.pos.x + 1,rect1.pos.y + 1);
    rect1.setSize(rect1.size.x + 1,rect1.size.y + 1);
    rect1.render();
    rect2.setPosition(rect2.pos.x - 1,rect2.pos.y + 1);
    // rect2.setSize(rect2.size.x + 1,rect2.size.y + 1);
    rect2.render();
  }, 10);

}

window.onresize = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  console.log(canvas);
}

