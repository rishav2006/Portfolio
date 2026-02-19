import React from "react";

const LandingPart = () => {
  return (
    <div className="text-white w-270">
        <h2 className="text-4xl lg:text-6xl ">One of the most beautiful parts of being a developer is turning broken ideas into working solutions through <span className="text-lime-400">code and debugging.</span></h2>
        <div className="buttons flex items-center gap-5 pt-7">
            <a href="" className="bg-zinc-900 px-4 py-2 rounded-lg">View Projects</a>
            <a href="">Github Link</a>
        </div>
    </div>
  );
};

export default LandingPart;
