//alert("Js connected");
let ball=document.querySelector(".ball");
let board=document.querySelector(".board")
let boardBounds=board.getBoundingClientRect();
let leftPaddle=document.querySelector(".left")
let rightPaddle=document.querySelector(".right")
let x=true;
let y=true;
//user input 
document.addEventListener("keydown",function(e)

{
    if(e.key=='w')
    {
   movePaddle(leftPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=='s')
    {
        movePaddle(leftPaddle, window.innerHeight*0.1);
    }
    else if(e.key=='ArrowUp')
    {
        movePaddle(rightPaddle,-window.innerHeight*0.1);
    }
    else if(e.key=='ArrowDown'){
        movePaddle(rightPaddle, window.innerHeight*0.1);
    }
}
)
function movePaddle(cPaddle,change){
  let cPaddleBounds=  cPaddle.getBoundingClientRect();
  if(cPaddleBounds.top+change>=boardBounds.top && cPaddleBounds.bottom+change<=boardBounds.bottom)
  {
 cPaddle.style.top=cPaddleBounds.top+change+"px";
  }

}
function moveBall()
{
    let ballcord=ball.getBoundingClientRect();
    let ballTop=ballcord.top;
    let ballleft=ballcord.left;
    let ballBottom=ballcord.bottom;
    let ballRight=ballcord.right;
    
    //is ball in boundary
    //handle vertical ball position
    if(ballTop<=boardBounds.top||ballBottom>=boardBounds.bottom)
    {
        y=!y;
    }

    //handle horizaontal bound
    if(ballleft<=boardBounds.left||ballRight>=boardBounds.right)
    {
     x=!x;
    }
    
    ball.style.top= y==true?ballTop+4+"px":ballTop-4+"px";
    ball.style.left= x==true?ballleft+4+"px":ballleft-4+"px";
    requestAnimationFrame(moveBall);
} //moving the ball 
//requestAnimationFrame(moveBall)

