import React from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Random = () => {
  const { gif, loading, fetchData } = useGif();

  return (
    <div className="w-1/2 height-[450px] bg-green-500 rounded-lg border border-black flex flex-col items-center gap-5 mt-[15px] p-2">
      <h1 className="text-2xl underline uppercase font-bold">A Random Gif</h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" width={450} height={450} />
      )}
      <button
        onClick={fetchData}
        className="w-10/12 bg-gray-200 text-lg py-2 rounded-md cursor-pointer outline-none font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Random;
