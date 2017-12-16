var start_time;
var elapsed_time=0;
var bx=10;
var by=260;

onload = function() {
  draw();
};
function draw() {
  /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('_canvas');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  var ctx = canvas.getContext('2d');
  /* 四角を描く */
  ctx.beginPath();
  ctx.moveTo(10, 10);
  ctx.lineTo(10, 510);
  ctx.lineTo(700, 510);
  ctx.lineTo(700, 10);
  ctx.closePath();
  ctx.stroke();
  drow_line(10,10,10,510);
  drow_dot2(10,260)
}

function drow_dot(x,y){
   /* canvas要素のノードオブジェクト */
  var canvas = document.getElementById('_canvas');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas || ! canvas.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.lineWidth=6;
  ctx.strokeStyle = 'rgb(255,0,0)';
  ctx.moveTo(bx,by);
  ctx.lineTo(x,y);
  ctx.closePath();
  ctx.stroke();

  bx=x;by=y;
}

function drow_dot2(x,y){
  var canvas = document.getElementById('_canvas2');
  if ( ! canvas || ! canvas.getContext ) { return false; }
  var ctx = canvas.getContext('2d');
    ctx.strokeStyle = 'rgb(255,0,0)';
    ctx.fillStyle = 'rgb(255,0,0)';
  ctx.beginPath();
  ctx.arc(x, y,6, 0, Math.PI*2, false);
  ctx.stroke();
  ctx.fill();
}

function drow_line(x1,y1,x2,y2){
  var canvas2 = document.getElementById('_canvas2');
  /* canvas要素の存在チェックとCanvas未対応ブラウザの対処 */
  if ( ! canvas2 || ! canvas2.getContext ) {
    return false;
  }
  /* 2Dコンテキスト */
  var ctx = canvas2.getContext('2d');
    ctx.clearRect(0,0,800,600);
    ctx.strokeStyle= 'rgb(0, 0,150)';
    ctx.lineWidth=4;
  ctx.beginPath();
  ctx.moveTo(x1,y1);
  ctx.lineTo(x2,y2);
  ctx.closePath();
  ctx.stroke();

}

function drow_move(){
  if(elapsed_time<=5){
  time()
  var t=elapsed_time
   drow_dot(10 + 100*Math.sqrt(10*t - t*t)/2,260 + 50*t);
  drow_line(10,10+100*t,10 + 100*Math.sqrt(10*t - t*t),510);
  drow_dot2(10 + 100*Math.sqrt(10*t - t*t)/2,260 + 50*t);
  }else{

  }
}

function start(){
  if(elapsed_time==0){
  var date_obj1 = new Date();
  start_time = date_obj1.getTime();
  setInterval("drow_move()",10);
}
}

function time(){
  var date_obj2 = new Date();
  now_time = date_obj2.getTime();
  var elapsed_time_milli=now_time - start_time;
  elapsed_time=elapsed_time_milli/2000
  console.log(elapsed_time);
}

function reset(){
  location.reload(true);
}
