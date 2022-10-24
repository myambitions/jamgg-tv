import { useCallback, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import CanvasDraw from "react-canvas-draw";
import { drawTitleOnCanvas } from "helpers";
import { Channel } from "types";

import noSignalImg from "assets/no-signal.png";
import classes from "./index.module.css";
import { RootState } from "store";

export const Screen = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { channel } = useSelector((state: RootState) => state);
  const { current, list } = channel as { list: Channel[]; current: number };

  const drawStuff = useCallback(
    (context: any) => {
      const channelInfo = list[current];
      const image = new Image();
      image.onload = () => {
        context?.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
        drawTitleOnCanvas(
          context,
          current,
          channelInfo?.title || "There is no channel"
        );
      };
      image.src = channelInfo?.img || noSignalImg;
    },
    [current, list]
  );

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");

    const resizeCanvas = () => {
      if (canvasRef?.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }

      drawStuff(context);
    };

    if (canvasRef?.current) {
      resizeCanvas();
    }
    window.addEventListener("resize", resizeCanvas, false);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [drawStuff]);

  return (
    <>
      {current === 7 ? (
        <CanvasDraw
          canvasHeight={window.innerHeight}
          canvasWidth={window.innerWidth}
        />
      ) : (
        <canvas ref={canvasRef} className={classes.canvas} />
      )}
    </>
  );
};
