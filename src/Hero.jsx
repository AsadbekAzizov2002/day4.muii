import { Avatar, Fab, Link, TextField } from "@mui/material";
import { Input } from "postcss";
import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import MicNoneIcon from "@mui/icons-material/MicNone";
import CameraAltOutlinedIcon from "@mui/icons-material/CameraAltOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";

import img3 from "./assets/img3.jpg";
import img4 from "./assets/img4.jpg";
import img5 from "./assets/img5.png";

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
              <Link
                underline="hover"
                color="text.white"
                href="https://labs.google.com/search/error?source=ntp&authuser=0&is=i"
                aria-current="page"
              >
                <MicNoneIcon />
              </Link>
              <Link>
                <CameraAltOutlinedIcon />
              </Link>
            </div>
          </div>
          <div className=" mt-[25px] w-[465px] justify-center mx-auto grid grid-cols-4  gap-14 ml-[550px]">
            <div className=" w-[112px] h-[112px] hover:bg-blue-300 rounded">
              <Link
                underline="hover"
                color="text.white"
                href="https://erp.student.najottalim.uz"
                aria-current="page"
              >
                <div>
                  <div className=" ml-[90px] w-[2px]">
                    <MoreVertIcon fontSize="small" />
                  </div>
                  <div className=" justify-center mx-auto w-[55px]">
                    <img
                      className=" justify-center bg-inherit w-[55px] rounded-3xl"
                      src={img3}
                      alt=""
                    />
                  </div>
                  <h2>Offline Stude...</h2>
                </div>
              </Link>
            </div>
            <div className=" w-[112px] h-[112px] hover:bg-blue-300 rounded">
              <Link
                underline="hover"
                color="text.white"
                href="https://github.com/"
                aria-current="page"
              >
                <div>
                  <div className=" ml-[90px] w-[2px]">
                    <MoreVertIcon fontSize="small" />
                  </div>
                  <div className="justify-center mx-auto w-[55px]">
                    <img
                      className=" bg-inherit w-[55px] rounded-3xl"
                      src={img4}
                      alt=""
                    />
                  </div>
                  <h2 className=" w-10 mx-auto">GitHub</h2>
                </div>
              </Link>
            </div>{" "}
            <div className=" w-[112px] h-[112px] hover:bg-blue-300 rounded">
              <Link
                underline="hover"
                color="text.white"
                href="https://tailwindcss.com/docs/guides/vite"
                aria-current="page"
              >
                <div>
                  <div className=" ml-[90px] w-[2px]">
                    <MoreVertIcon fontSize="small" />
                  </div>
                  <div className="justify-center mx-auto w-[55px]">
                    <img
                      className=" bg-inherit w-[55px] rounded-3xl"
                      src={img5}
                      alt=""
                    />
                  </div>
                  <h2 className=" ">Tailwind CSS</h2>
                </div>
              </Link>
            </div>
            <div className=" w-[112px] h-[112px] hover:bg-blue-300 rounded">
              <Link
                underline="hover"
                color="text.white"
                href=""
                aria-current="page"
              >
                <div>
                  <div className=" ml-[90px] w-[2px]">
                    <MoreVertIcon fontSize="small" />
                  </div>
                  <div>
                    <Fab color="black" aria-label="edit">
                      <AddIcon />
                    </Fab>
                  </div>
                  <h2>Add shourtcut </h2>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
