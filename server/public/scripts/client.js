import Rect from './classes/Rect';

window.onload = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth - 20 ;
  canvas.height = window.innerHeight - 20;
  
  console.log(canvas);

  let ctx = canvas.getContext('2d');

  let rect1 = new Rect(100,100,100,100,ctx);
}

window.onresize = () => {
  let canvas = document.getElementById('GoL');
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  console.log(canvas);
}

