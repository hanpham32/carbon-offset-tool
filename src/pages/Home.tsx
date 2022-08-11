import React from "react";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";

import DraftCryptoCarbonOffset from "../components/DraftCryptoCarbonOffset";
import DraftShippingCarbonOffset from "../components/DraftShippingCarbonOffset";
import Navbar from "../components/Navbar";
import SubmitButton from "../components/SubmitButton";

export default function Home() {
  const [cryptoOffset, setCryptoOffset] = useState(false);
  const [shippingOffset, setShippingOffset] = useState(true);

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-blue-900">
      <Navbar cryptoOffset={cryptoOffset} setCryptoOffset={setCryptoOffset} shippingOffset={shippingOffset} setShippingOffset={setShippingOffset}/>
      <div className="bg-white rounded pt-6 px-4 py-4 w-5/12">
        {cryptoOffset ? 
          <DraftCryptoCarbonOffset /> :
          <DraftShippingCarbonOffset />
        }
      </div>
    </div>
  );
}
