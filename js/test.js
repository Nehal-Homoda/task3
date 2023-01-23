function draw(ctx,point1,point2,point3,color){

    ctx.beginPath();
    ctx.moveTo(point1.x,point1.y);
    ctx.lineTo(point2.x,point2.y);
    ctx.lineTo(point3.x,point3.y);
    ctx.closePath();
    ctx.fillStyle=color;
    ctx.fill();
}
let can=document.querySelector(".can");
let context=can.getContext("2d");
const point1={x:300,y:200};
const point2={x:0 ,y:300};
const point3={x:200 ,y:0};


