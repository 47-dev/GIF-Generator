import React, { useState } from "react";
import useGif from "../hooks/useGif";
import Spinner from "./Spinner";

const Tag = () => {
  const [tag, setTag] = useState("");

  const {gif, loading, fetchGif} = useGif(tag);

  return (
    <div className="w-1/2  bg-blue-500 rounded-lg border border-black 
    flex flex-col items-center gap-y-5 mt-[15px]">
      <h1 className="mt-[15px] text-2xl underline uppercase font-bold">
        {tag} Gif
      </h1>

      {loading ? <Spinner /> : <img src={gif} width="450" alt="gif" />}

      <input
        className="w-10/12 text-lg py-2 rounded-lg items-center"
        onChange={(event) => setTag(event.target.value)}
        value={tag}
      />

      <button
        onClick={() => fetchGif(tag)}
        className="w-10/12 mb-[20px] bg-yellow-500 text-lg py-2 rounded-lg"
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
