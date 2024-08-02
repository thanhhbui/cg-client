import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const isPlayOnline = location.pathname === "/play-online";

  return (
    <div className="w-1/6 h-screen pb-10 flex flex-col justify-between items-center bg-neutral-900">
      <div className="w-full">
        <button
          onClick={() => navigate("/")}
          className="flex justify-start items-center gap-4 hover:bg-neutral-800 text-white font-bold py-4 px-8 w-full"
        >
          <img
            className="w-8 h-8"
            src="./src/assets/home-icon.svg"
            alt="Home"
          />
          <div className="flex flex-col items-start">
            <div className="text-xl">Home</div>
          </div>
        </button>
        <button
          onClick={() =>
            navigate(isPlayOnline ? "/play-computer" : "/play-online")
          }
          className={`flex justify-start items-center gap-4 ${
            isPlayOnline
              ? " hover:bg-neutral-800"
              : " hover:bg-neutral-800"
          } text-white font-bold py-4 px-8 w-full`}
        >
          <img
            className="w-8 h-8"
            src={`${
              isPlayOnline
                ? "./src/assets/computer.svg"
                : "./src/assets/playwhite.svg"
            }`}
            alt="Play"
          />
          <div className="flex flex-col items-start">
            <div className="text-xl">
              {isPlayOnline ? "Play Computer" : "Play Online"}
            </div>
          </div>
        </button>
      </div>
      <div className="w-full flex flex-col gap-0 text-white">
        <button className="flex justify-start items-center gap-4 py-1 px-8 w-full hover:bg-neutral-800">
          <img className="w-9 h-9" src="./src/assets/user-96.png" alt="user" />
          <div className="font-bold">User</div>
        </button>
        <button className="flex justify-start items-center gap-4 py-1 px-8 w-full hover:bg-neutral-800">
          <img className="w-9 h-9" src="./src/assets/settings.svg" alt="settings" />
          <div className="font-bold">Setting</div>
        </button>
        <button className="flex justify-start items-center gap-4 py-1 px-8 w-full hover:bg-neutral-800">
          <img className="w-9 h-9" src="./src/assets/logout-100.png" alt="logout" />
          <div className="font-bold">Logout</div>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
