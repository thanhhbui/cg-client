import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen gap-3 flex justify-center items-center bg-neutral-800 text-white">
      <div className="w-1/3 flex justify-center items-center">
        <img
          className="rounded-lg"
          src="./src/assets/chessboard.png"
          alt="chessboard"
        />
      </div>
      <div className="w-1/5 h-screen pt-10 gap-10 flex flex-col justify-center items-center">
        <h1 className="text-4xl text-center font-bold">Play Chess Online on the #1 Site!</h1>
        <div className="flex flex-col gap-8 mt-4">
          <button
            onClick={() => {
              navigate("/play-online");
            }}
            className="flex justify-start items-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg"
          >
            <img
              className="w-12 h-12"
              src="./src/assets/playwhite.svg"
              alt="Play"
            />
            <div className="flex flex-col items-start">
              <div className="text-3xl">Play Online</div>
              <p>Play with someone</p>
            </div>
          </button>
          <button
            onClick={() => {
              navigate("/play-computer");
            }}
            className="flex justify-start items-center gap-4 bg-gray-700 hover:bg-gray-800 text-white font-bold py-4 px-8 rounded-lg"
          >
            <img
              className="w-12 h-12"
              src="./src/assets/computer.svg"
              alt="Play"
            />
            <div className="flex flex-col items-start">
              <div className="text-3xl">Play Computer</div>
              <p>Play with bot</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
