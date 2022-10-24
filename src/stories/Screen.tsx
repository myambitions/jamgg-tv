import { useCallback, useRef, useEffect, FC } from "react";
import CanvasDraw from "react-canvas-draw";
import { drawTitleOnCanvas } from "helpers";

import noSignalImg from "assets/no-signal.png";
import classes from "./screen.module.css";

export const Screen: FC<ScreenProps> = ({
  channel = 1,
  title = "Your title could be here",
  img = noSignalImg,
  isDrawable = channel === 7,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const drawStuff = useCallback(
    (context: any) => {
      const image = new Image();
      image.onload = () => {
        context?.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
        if (context) {
          drawTitleOnCanvas(context, channel, title);
        }
      };
      image.src = img;
    },
    [channel, title, img]
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
      {isDrawable ? (
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

interface ScreenProps {
  title: string;
  channel: number;
  img: string;
  isDrawable: boolean;
}
