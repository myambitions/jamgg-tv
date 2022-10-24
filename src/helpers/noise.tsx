function generateNoise(ctx: CanvasRenderingContext2D) {
  const w = ctx.canvas.width;
  const h = ctx.canvas.height;

  const idata = ctx.createImageData(w, h);
  // Creating Uint32Array typed array
  const buffer32 = new Uint32Array(idata.data.buffer);
  const buffer_len = buffer32.length;

  for (let i = 0; i < buffer_len; i++)
    buffer32[i] = ((255 * Math.random()) | 0) << 24;

  ctx.putImageData(idata, 0, 0);
}

// Creating animation effect
var toggle = true;

export const initNoise = (ctx: CanvasRenderingContext2D) => {
  function loop() {
    toggle = !toggle;
    if (toggle) {
      // Loop function is called each time
      // before next repaint.
      requestAnimationFrame(loop);
      return;
    }
    generateNoise(ctx);
    requestAnimationFrame(loop);
  }

  loop();
};
