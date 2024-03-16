import { Avatar, Link } from "@mui/material";
import React from "react";
import ScienceIcon from "@mui/icons-material/Science";
import AppsIcon from "@mui/icons-material/Apps";

const Header = () => {
  return (
    <div>
      <main>
        <div className=" flex justify-end items-center gap-9 pt-5 pr-3">
          <div>
            <Link
              underline="hover"
              color="text.white"
              href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox"
              aria-current="page"
            >
              Gmail
            </Link>
          </div>
          <div>
            <Link
              underline="hover"
              color="text.white"
              href="https://www.google.com/imghp?hl=en&tab=ri&authuser=0&ogbl"
              aria-current="page"
            >
              Images
            </Link>
          </div>
          <div>
            <Link
              underline="hover"
              color="text.white"
              href="https://labs.google.com/search/error?source=ntp&authuser=0&is=i"
              aria-current="page"
            >
              <ScienceIcon />
            </Link>
          </div>
          <div>
            <Link
              underline="hover"
              color="text.white"
              href="/"
              aria-current="page"
            >
              <AppsIcon />
            </Link>
          </div>
          <div>
            <Link
              underline="hover"
              color="text.white"
              href="/"
              aria-current="page"
            >
              <Avatar>A</Avatar>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Header;
