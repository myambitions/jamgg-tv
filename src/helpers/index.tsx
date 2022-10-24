const LINE_WIDTH = 1;
const RECT_HEIGHT = 40;
const RECT_WIDTH = 70;
const RECT_X = 40;
const RECT_Y = 30;
const RADIUS = 15;
const FONT = "18px Arial";
const COLOR = "#b8b8b8";

export const drawTitleOnCanvas = (ctx: any, value: number, title: string) => {
  drawChannelNumber(ctx, value);
  drawChannelTitle(ctx, title);
};

export const drawChannelNumber = (ctx: any, channel: number) => {
  const roundRect: RectProps = (x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.lineTo(x + width, y);
    ctx.lineTo(x + width, y + height);
    ctx.lineTo(x + radius, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.lineTo(x, y + radius);
    ctx.quadraticCurveTo(x, y, x + radius, y);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = COLOR;
  ctx.fillStyle = "#1d1d1d60";
  const rectHeight = RECT_HEIGHT;
  const rectWidth = RECT_WIDTH;
  const rectX = RECT_X;
  const rectY = RECT_Y;
  const radius = RADIUS;
  roundRect(rectX, rectY, rectWidth, rectHeight, radius);
  ctx.font = FONT;
  ctx.textBaseline = "middle";
  ctx.fillStyle = COLOR;
  const value = channel ? updateChannelNumber(channel) : "- - -";
  ctx.fillText(value, rectX * 1.5, rectY + rectHeight / 2);
};

export const drawChannelTitle = (ctx: any, title: string) => {
  const roundRect: RectProps = (x, y, width, height, radius) => {
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x + width - radius, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
    ctx.lineTo(x + width, y + height - radius);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
    ctx.lineTo(x, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
  };

  ctx.lineWidth = LINE_WIDTH;
  ctx.strokeStyle = COLOR;
  ctx.fillStyle = "#4a4a4a5f";
  const rectHeight = RECT_HEIGHT;
  const rectWidth = title.length * 10;
  const rectX = RECT_X + RECT_WIDTH;
  const rectY = RECT_Y;
  const radius = RADIUS;
  roundRect(rectX, rectY, rectWidth, rectHeight, radius);
  ctx.font = FONT;
  ctx.textBaseline = "middle";
  ctx.fillStyle = COLOR;
  ctx.fillText(title, rectX * 1.15, rectY + rectHeight / 2);
};

export const updateChannelNumber = (currentChannel: number) => {
  const next = "00" + currentChannel;
  return next.slice(-3);
};

interface RectProps {
  (x: number, y: number, width: number, height: number, radius: number): void;
}
