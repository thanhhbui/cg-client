import React, { useRef, useEffect } from "react";

import ObjectImage from "../../assets/chinese-chess.png";
import { Team, TypeObject } from "./enum/type_object";

const getPosByTeamAndType = (type, team) => {
  if (team === Team.Red) {
    if (type === TypeObject.General) return { x: 1, y: 1 };
    if (type === TypeObject.Rock) return { x: 2, y: 1 };
    if (type === TypeObject.Horse) return { x: 2, y: 2 };
    if (type === TypeObject.Elephant) return { x: 1, y: 3 };
    if (type === TypeObject.Advisor) return { x: 1, y: 2 };
    if (type === TypeObject.Cannon) return { x: 2, y: 3 };
    if (type === TypeObject.Soldier) return { x: 1, y: 4 };
    return { x: 0, y: 0 };
  }

  if (team === Team.Black) {
    if (type === TypeObject.General) return { x: 3, y: 1 };
    if (type === TypeObject.Rock) return { x: 4, y: 1 };
    if (type === TypeObject.Horse) return { x: 4, y: 2 };
    if (type === TypeObject.Elephant) return { x: 3, y: 3 };
    if (type === TypeObject.Advisor) return { x: 3, y: 2 };
    if (type === TypeObject.Cannon) return { x: 4, y: 3 };
    if (type === TypeObject.Soldier) return { x: 3, y: 4 };
    return { x: 0, y: 0 };
  }

  return {
    x: 0,
    y: 0,
  };
};

const getPositionByTeamAnType = (type, team) => {
  const startY = 25;
  const startX = 25;
  const size = 350;

  const xAdd = 365;
  const yAdd = 365;

  const { x, y } = getPosByTeamAndType(type, team);

  console.log({ x, y, type, team });

  const x1 = startX + xAdd * (y - 1);
  const y1 = startY + yAdd * (x - 1);
  const x2 = x1 + size;
  const y2 = y1 + size;

  return {
    x1,
    y1,
    x2,
    y2,
  };
};

const ImageCrop = ({ imageUrl, x1, y1, x2, y2, width, height }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const image = new Image();

    image.onload = () => {
      const widthX = x2 - x1;
      const heightX = y2 - y1;
      canvas.width = width;
      canvas.height = height;

      // Vẽ hình tròn bo tròn góc
      ctx.beginPath();
      ctx.arc(width / 2, height / 2, Math.min(width, height) / 2, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();

      // Vẽ hình ảnh
      ctx.drawImage(image, x1, y1, widthX, heightX, 0, 0, width, height);
    };

    image.src = imageUrl;
  }, [imageUrl, x1, y1, x2, y2, width, height]);

  return <canvas ref={canvasRef} />;
};

const Object = ({ type, team }) => {
  if (!type || !team) return null;

  const { x1, y1, x2, y2 } = getPositionByTeamAnType(type, team);

  return (
    <div
      style={{
        backgroundColor: "white",
        borderRadius: "50%",
        // borderWidth: 3,
        // borderStyle: "solid",
        // borderColor: team === Team.Black ? "black" : "red",
        // display: "flex",
        // alignItems: 'center',
        // justifyContent: 'center'
      }}
    >
      <ImageCrop
        imageUrl={ObjectImage}
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        width={70}
        height={70}
        style={{borderRadius: "50%"}}
      />
    </div>
  );
};

export default Object;
