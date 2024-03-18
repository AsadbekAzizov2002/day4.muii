import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import { Link } from "@mui/material";

const Heros = () => {
  return (
    <div>
      <main className=" w-full flex items-center justify-center flex-col h-[200px] ">
        <div>
          <h1 className=" text-white text-7xl font-medium mb-16 ">Google</h1>
        </div>
        <div className=" w-[500px] h-12 rounded-3xl items-center px-4 gap-4 flex bg-white">
          <span>
            <SearchIcon />
          </span>
          <input
            type="text"
            placeholder="Search Google or type a URL"
            className=" w-[480px] rounded outline-none"
          />
          <span className=" flex items-center gap-5 ">
            <Link
              underline="hover"
              color="text.white"
              href="/"
              aria-current="page"
            >
              <MicIcon />
            </Link>
            <Link underline="hover" color="red" href="/">
              <CameraAltIcon />
            </Link>
          </span>
        </div>
      </main>
    </div>
  );
};

export default Heros;
