import React from "react";
import Header from "./Header";
import Googles from "./Googles";
import Heros from "./Heros";

const App = () => {
  return (
    <div className=" bg-cover h-screen bg-center bg-[url('https://getwallpapers.com/wallpaper/full/8/2/3/25529.jpg')]">
      <Header />
      <Heros />
      <Googles />
    </div>
  );
};

export default App;
