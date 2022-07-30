import React from "react";
import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import DraftCarbonOffset from "../components/DraftCarbonOffset";
import Navbar from "../components/Navbar";

export default function Home() {
  // const notify = () => toast("Hello World!");
  const [address, setAddress] = useState("");

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-900">
      <DraftCarbonOffset />
      <div>{address}</div>

      {/* <button onClick={notify}>Calculate</button>
            <ToastContainer 
                position='top-right'
                autoClose={3000}
                closeOnClick
                draggable
                pauseOnHover
                theme='dark'
            /> */}
    </div>
  );
}
