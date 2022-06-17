import { Ball, Racket } from "./model";

async function main() {
  const ball: Ball = { x: 500, y: 500, size: 15, color: "#FF0000", fx: 2.1, fy: 2.1 };
  const racket1: Racket = { y: 0, x: 0, size: 150, color: "#00FF00" };
  const racket2: Racket = { y: 0, x: 985, size: 150, color: "#0000FF" };
  var keyState: Record<string, boolean> = {};
  const canvas = document.querySelector("canvas");
  let ctx = canvas.getContext("2d");
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.rect(0, 0, 1000, 2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = "#000000";
  ctx.rect(0, 798, 1000, 2);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = racket1.color;
  ctx.rect(0, racket1.y, 15, racket1.size);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = racket2.color;
  ctx.rect(racket2.x, racket2.y, 15, racket2.size);
  ctx.fill();
  ctx.beginPath();
  ctx.fillStyle = ball.color;
  ctx.rect(ball.x, ball.y, ball.size, ball.size);
  ctx.fill();
  let i = 0;
  window.addEventListener('keydown', function (e) {
    keyState[e.code] = true;
  }, true);

  window.addEventListener('keyup', function (e) {
    keyState[e.code] = false;
  }, true);
  while (true) {
    ctx.clearRect(ball.x, ball.y, ball.size, ball.size);
    ball.x += Math.round(ball.fx);
    ball.y += Math.round(ball.fy);
    if (ball.x > 1000 - ball.size - 16) {
      if (ball.y > racket2.y && ball.y < racket2.y + racket2.size) {
        ball.fx = ball.fx * -1;
      }
      else break;
    };
    if (ball.x < 0 + 16) {
      if (ball.y > racket1.y && ball.y < racket1.y + racket1.size) {
        ball.fx = ball.fx * -1;
      }
      else break;
    };
    if (ball.y > 796 - ball.size || ball.y < 4) ball.fy = ball.fy * -1;
    ctx.beginPath();
    ctx.fillStyle = ball.color;
    ctx.rect(ball.x, ball.y, ball.size, ball.size);
    ctx.fill();
    if (keyState["KeyW"] && racket1.y > 0) {
      moveRacket(racket1, ctx, -5)
    }
    if (keyState["KeyS"] && racket1.y < 800 - racket1.size) {
      moveRacket(racket1, ctx, 5)
    }
    if (keyState["ArrowUp"] && racket2.y > 0) {
      moveRacket(racket2, ctx, -5)
    }
    if (keyState["ArrowDown"] && racket2.y < 800 - racket2.size) {
      moveRacket(racket2, ctx, 5)
    }
    await new Promise((r: any) => setTimeout(r, 5));
  }
}

main();

function moveRacket(racket: Racket, ctx: CanvasRenderingContext2D, factor: number) {
  ctx.beginPath();
  ctx.clearRect(racket.x, racket.y, 15, racket.size);
  racket.y += factor;
  ctx.rect(racket.x, racket.y, 15, racket.size);
  ctx.fillStyle = racket.color;
  ctx.fill();
}