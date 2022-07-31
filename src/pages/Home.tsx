import React from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import DraftCryptoCarbonOffset from "../components/DraftCryptoCarbonOffset";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-900">
      <Navbar />
      <div className="bg-white rounded pt-6 px-4 py-4">
        <DraftCryptoCarbonOffset />
        <SubmitButton />
      </div>
    </div>
  );
}
