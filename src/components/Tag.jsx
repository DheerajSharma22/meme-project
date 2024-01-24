import React, { useState } from "react";
import Spinner from "./Spinner";
import useGif from "../hooks/useGif";

const Tag = () => {
  const [tag, setTag] = useState("");
  const { gif, loading, fetchData } = useGif(tag);

  return (
    <div className="w-1/2 height-[450px] bg-blue-500 rounded-lg border border-black flex flex-col items-center gap-5 mt-[15px] p-2">
      <h1 className="text-2xl underline uppercase font-bold">
        Random {tag} Gif
      </h1>
      {loading ? (
        <Spinner />
      ) : (
        <img src={gif} alt="" width={450} height={450} />
      )}

      <input
        type="text"
        value={tag}
        className="w-10/12 bg-gray-200 py-2 mb-[3px] rounded-md outline-none text-center font-semibold"
        onChange={(e) => setTag(e.target.value)}
      />
      <button
        onClick={fetchData}
        className="w-10/12 bg-gray-200 text-lg py-2 rounded-md cursor-pointer outline-none font-bold"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
