import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Project from "../content-page/Project-Desc";
import About from "../content-page/About";
import Home from "../content-page/Home";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-md bg-black/1 0 border-b border-white/10">
        <div className="px-8 py-6 text-md flex justify-between items-center">
          <Link to={'/'}>Rishav Pattnaik.</Link>

          <ul className="hidden lg:flex gap-4">
            <Link to='/projects' className="transition-transform transition-shadow duration-300 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5">Projects.</Link>
            <Link to='/connect' className="transition-transform transition-shadow duration-300 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5">Connect with me.</Link>
            <Link to='/about' className="transition-transform transition-shadow duration-300 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5">About myself.</Link>
          </ul>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1 z-50">
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
            <span className="w-6 h-[2px] bg-white"></span>
          </button>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 lg:hidden backdrop-blur-xl transition-all duration-300 ease-out ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}>
        <div className={`absolute top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-sm backdrop-blur-2xl p-6 transition-all duration-300 ease-out transform-gpu ${open ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"}`}>
          <ul className="flex flex-col gap-4 text-lg">
            <Link to='/projects' onClick={() => setOpen(false)} className = "transition-transform duration-300 ease-out hover:-translate-y-0.5 text-white text-3xl">Projects.</Link>
            <Link to='' onClick={() => setOpen(false)} className = "transition-transform duration-300 ease-out hover:-translate-y-0.5 text-white text-3xl">Connect with me.</Link>
            <Link to='/about' onClick={() => setOpen(false)} className = "transition-transform duration-300 ease-out hover:-translate-y-0.5 text-white text-3xl">About myself.</Link>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default Navbar;
