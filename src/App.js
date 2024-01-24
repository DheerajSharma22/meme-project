import React from "react";
import Random from "./components/Random";
import Tag from "./components/Tag";

const App = () => {
  return (
    <div className="w-full h-full flex flex-col background py-5">
      <h1 className="bg-white rounded-lg w-11/12 text-center mx-auto px-10 py-2 text-3xl font-bold">
        RANDOM GIFS
      </h1>
      <div className="flex flex-col items-center gap-y-10 mt-[30px]">
        <Random />
        <Tag />
      </div>
    </div>
  );
};

export default App;
