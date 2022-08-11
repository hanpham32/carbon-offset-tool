import React, { useEffect, useState, useRef } from "react";
import { Buffer } from "buffer";
import SubmitButton from "./SubmitButton";
import { toast, ToastContainer } from "react-toastify";

import {
  TextField,
  Box,
  Button,
  MenuItem,
  Divider,
  ButtonGroup,
} from "@mui/material";

interface State {
  zipcode: string;
  amount: number;
  chain: string;
  data: any;
  loading: boolean;
}

const currencies = [
  {
    value: "eth",
    label: "Ethereum",
  },
  {
    value: "sol",
    label: "Solana",
  },
];

const API_KEYS = {
  pk_test:
    "pk_live_a9d6aa3ace41842eb0ccab4b98e8d53c26803a8a7481afcdbda011a1023f78a8",
  sk_test:
    "sk_live_01a8068d7a6fbef04dff370c67411fc0a2316d36a56d1d917bd6486f5e270551",
};

export default function DraftCryptoCarbonOffset() {
  const [zipcode, setZipcode] = useState("");
  const [amount, setAmount] = useState(2);
  const [chain, setChain] = useState("eth");

  const [totalAmount, setTotalAmount] = useState(0);

  const BodyContent = {
    count: amount,
    currency: chain,
    zipcode: zipcode,
    funds_collected: false,
  };

  const fetchData = async () => {
    // Configure Header
    const headers = new Headers();
    headers.set(
      "Authorization",
      "Basic " +
        Buffer.from(API_KEYS.pk_test + ":" + API_KEYS.sk_test).toString(
          "base64"
        )
    );
    headers.set("Content-Type", "application/json");

    const response = await fetch(
      "https://api.getchange.io/api/v1/climate/crypto_offset",
      {
        method: "GET",
        headers,
        body: JSON.stringify(BodyContent),
      }
    );

    // convert data to json
    const data = await response.json(); // local data variable
    console.log(data)
  };

  // NUMBER OF TRANSACTION 
  const displayAmount = amount > 1;
  const handleIncrement = () => {
    setAmount(amount + 1);
  };
  const handleDecrement = () => {
    {
      displayAmount && setAmount(amount - 1);
    }
  };
  ////

  const handleChainChange = (e: any) => {
    setChain(e.target.value);
  };

  const notifyFalseAmount = () => toast("Please enter a number greater than 2");

  // SUBMIT
  const handleSubmitClick = () => {
    console.log(JSON.stringify(BodyContent));
    fetchData().catch(console.error);
  };

  return (
    <div>
      <div className="h3 text-lime-600">Draft Crypto Carbon Offset</div>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "95%" },
        }}
        noValidate
        autoComplete="off"
        className="py-2"
      >
        <TextField
          id="outlined-select-chain"
          select
          label="Select Chain"
          value={chain}
          onChange={handleChainChange}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="zipcode"
          label="Input zipcode"
          autoFocus
          value={zipcode}
          onChange={(e) => {
            setZipcode(e.target.value);
          }}
          InputProps={{
            style: {
              color: "grey",
            },
          }}
        />

        <div>Number of Transaction</div>
        <ButtonGroup size="small">
          <Button onClick={handleDecrement}>-</Button>
          {displayAmount ? (
            <Button>{amount}</Button>
          ) : (
            <Button disabled>{amount}</Button>
          )}
          <Button onClick={handleIncrement}>+</Button>
        </ButtonGroup>
      </Box>
      <Divider />
      <SubmitButton onClick={handleSubmitClick} />
    </div>
  );
}
