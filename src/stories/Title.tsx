import { useRef, useEffect, FC } from "react";
import { drawTitleOnCanvas } from "helpers";
import classes from "./title.module.css";

export const Title: FC<Props> = ({
  channel = 1,
  title = "Your title could be here",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = canvasRef.current?.getContext("2d");
    const resizeCanvas = () => {
      if (canvasRef?.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
      }

      drawTitleOnCanvas(context, channel, title);
    };

    if (canvasRef?.current) {
      resizeCanvas();
    }
    window.addEventListener("resize", resizeCanvas, false);

    return () => window.removeEventListener("resize", resizeCanvas);
  }, [channel, title]);

  return <canvas ref={canvasRef} className={classes.canvas} />;
};

interface Props {
  title: string;
  channel: number;
}
