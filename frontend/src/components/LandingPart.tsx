import React from "react";

const LandingPart = () => {
  return (
    <div className="text-white w-270">
        <h2 className="text-5xl lg:text-6xl ">One of the most beautiful parts of being a developer is turning broken ideas into working solutions through <span className="text-lime-400">code and debugging.</span></h2>
        <div className="buttons flex items-center gap-5 pt-4">
            <a href="" className="bg-zinc-900 px-4 py-2 rounded-lg hover:bg-zinc-800 transition duration-300 transition-transform transition-shadow duration-280 ease-out transform-gpu">View Projects</a>
            <a href="">Github Link</a>
        </div>
    </div>
  );
};

export default LandingPart;
