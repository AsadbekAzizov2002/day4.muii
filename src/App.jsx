import React from "react";
import Header from "./Header";
import Hero from "./Hero";

const App = () => {
  return (
    <div className="">
      <Header />
      <main className=" container w-[1240px] px-4">
        <Hero />
      </main>
    </div>
  );
};

export default App;
