import React from "react";
import Object from "./Object";

// props
// position: {x, y}
// type:
// name

const Square = ({ x, y, type, team }) => {
  const size = 83;
  const startX = 113;
  const startY = 205;
  const after5Add = 27;

  const xPos = startX + (x - 1) * size - size / 2 + (x > 5 ? after5Add : 0);
  const yPos = startY + (y - 1) * size - size / 2;

  return (
    <div
      style={{
        height: 82,
        width: 82,
        // backgroundColor: "yellow",
        position: "absolute",
        top: xPos,
        left: yPos,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "black",
      }}
    >
        {
            type && 
            <Object type={type} team={team}/>
        }
    </div>
  );
};

export default Square;
