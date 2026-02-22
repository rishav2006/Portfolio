import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const AdminNavbar = () => {
  const [open, setOpen] = useState(false);
  const navigator = useNavigate();
  const logoutHandler = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/admin/logout", {}, {
        withCredentials: true
      });
      console.log("Logout Successful");
      navigator("/login");
    } catch (error) {
      console.log("An error happened: " + error.message);
    }
  };
  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 text-white backdrop-blur-md bg-black/1 0 border-b border-white/10">
        <div className="px-8 py-6 text-md flex justify-between items-center">
          <Link to={'/'}>Rishav Pattnaik.</Link>

          <ul className="hidden lg:flex gap-4">
            <a href="" onClick={() => setOpen(false)} className = "transition-transform transition-shadow duration-300 ease-out transform-gpu hover:shadow-xl/5 hover:-translate-y-0.5 text-red-400">Logout.</a>
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
            <button onClick={logoutHandler} className = "transition-transform duration-300 ease-out hover:-translate-y-0.5 text-red-400 text-3xl">Logout.</button>
          </ul>
        </div>
      </div>

      
    </>
  );
};

export default AdminNavbar;
