import React from "react";

// images
import BoardImage from "../../assets/board.png";
import Sidebar from "../Sidebar";
import Square from "./Square";
import { Team, TypeObject } from "./enum/type_object";

const getTypeByPosition = (x, y) => {
  if (x === 1 && (y === 1 || y === 9)) return TypeObject.Rock;
  if (x === 10 && (y === 1 || y === 9)) return TypeObject.Rock;

  if (x === 1 && (y === 2 || y === 8)) return TypeObject.Horse;
  if (x === 10 && (y === 2 || y === 8)) return TypeObject.Horse;

  if (x === 1 && (y === 3 || y === 7)) return TypeObject.Elephant;
  if (x === 10 && (y === 3 || y === 7)) return TypeObject.Elephant;

  if (x === 1 && (y === 4 || y === 6)) return TypeObject.Advisor;
  if (x === 10 && (y === 4 || y === 6)) return TypeObject.Advisor;

  if (x === 1 && y === 5) return TypeObject.General;
  if (x === 10 && y === 5) return TypeObject.General;

  if (x === 3 && (y === 2 || y === 8)) return TypeObject.Cannon;
  if (x === 8 && (y === 2 || y === 8)) return TypeObject.Cannon;

  if (x === 4 && y % 2 === 1) return TypeObject.Soldier;
  if (x === 7 && y % 2 == 1) return TypeObject.Soldier;

  return null;
};

const getBoardSquares = (x, y) => {
  const ans = [];

  for (let index = 0; index < x; index++)
    for (let j = 0; j < y; j++) {
      let team = null;
      if (index+1 <= 5) team = Team.Black;
      if (index+1 >= 6) team = Team.Red;

      const type = getTypeByPosition(index + 1, j + 1);

      const obj = {
        x: index + 1,
        y: j + 1,
        team,
        type,
      };

      ans.push(obj);
    }

  return ans;
};

const randomType = () => {
  const t = Math.floor(Math.random() * 100);
  if (t < 10) return null;
  if (t < 20) return TypeObject.Rock;
  if (t < 30) return TypeObject.Horse;
  if (t < 40) return TypeObject.Elephant;
  if (t < 50) return TypeObject.Advisor;
  if (t < 60) return TypeObject.General;
  if (t < 70) return TypeObject.Cannon;

  return TypeObject.Soldier;
};

const Board = () => {
  const squaresData = getBoardSquares(10, 9);

  return (
    <div className="w-full h-screen bg-neutral-800 flex justify-center items-center text-white">
      <Sidebar />
      <div className="w-full">
        <div
          style={{
            position: "relative",
          }}
          className="w-1/2 max-w-6xl mx-auto bg-white flex justify-center items-center"
        >
          <img
            src={BoardImage}
            style={{
              height: 1000,
              width: 1000,
            }}
          />

          {squaresData.map((item, index) => {
            return (
              <Square
                key={`${index}`}
                x={item.x}
                y={item.y}
                type={item.type}
                team={item.team}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Board;
