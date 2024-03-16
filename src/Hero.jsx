import { Link, TextField } from "@mui/material";
import { Input } from "postcss";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";

const Hero = () => {
  return (
    <div>
      <main>
        <div className=" container ">
          <h1 className=" mt-[130px] justify-center mx-[50%] text-white font-semibold items-center text-8xl w-[550px]">
            Google
          </h1>
          <div className=" flex items-center bg-white rounded-2xl  w-[650px] ml-[450px] mt-9 ">
            <Link>
              <SearchIcon />
            </Link>
            <TextField fullWidth label="Search Google or type a URL" id="" />
            <div className=" flex gap-3 mr-1">
              <Link>
                <MicNoneIcon />
              </Link>
              <Link>
                <CameraAltOutlinedIcon />
              </Link>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
