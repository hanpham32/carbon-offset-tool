import React, { useEffect, useState, useRef } from "react";
import { Buffer } from "buffer";

import { TextField, Box, Button, MenuItem, Divider, ButtonGroup } from "@mui/material";

interface State {
  address: string;
  amount: number;
  chain: string;
  data: any;
  loading: boolean;
}

const chains = [
  {
    value: 'eth',
    label: 'Ethereum',
  },
  {
    value: 'sol',
    label: 'Solana',
  },
];

export default function DraftCryptoCarbonOffset() {

  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState(1);
  const [chain, setChain] = useState("eth");

  // const [data, setData] = useState(null);
  const [amountCarbon, setAmountCarbon] = useState(0);
  const [loading, setLoading] = useState(true);

  // MenuList
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // API Keys
  const pk_test =
    "pk_live_a9d6aa3ace41842eb0ccab4b98e8d53c26803a8a7481afcdbda011a1023f78a8";
  const sk_test =
    "sk_live_01a8068d7a6fbef04dff370c67411fc0a2316d36a56d1d917bd6486f5e270551";

  useEffect(() => {
    const fetchData = async () => {
      // Configure header
      const headers = new Headers();
      headers.set(
        "Authorization",
        "Basic " + Buffer.from(pk_test + ":" + sk_test).toString("base64")
      );
      headers.set("Content-Type", "application/json");

      const response = await fetch(
        "https://api.getchange.io/api/v1/climate/crypto_offset",
        {
          method: "POST",
          headers,
          body: JSON.stringify({
            count: 2,
            currency: "eth",
            funds_collected: false,
          }),
        }
      );

      // convert data to json
      const data = await response.json(); // local data variable
      console.log(data);
      // set state with result
      setAmountCarbon(data.amount);
      // setData(data);
    };

    // call function
    fetchData().catch(console.error);
    console.log({amountCarbon})

  }, [amountCarbon]);

  const displayAmount = amount > 0;
  const handleIncrement = () => {
    setAmount(amount + 1);
  }
  const handleDecrement = () => {
    { displayAmount && setAmount(amount - 1) };
  }
  const handleChainChange = (e: any) => {
    setChain(e.target.value);
  }
  return (
    <div>
      <div className="h3 text-lime-600">Draft Crypto Carbon Offset {"\n"}</div>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "95%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          variant="standard"
          margin="normal"
          required
          fullWidth
          id="address"
          label="Input address"
          autoFocus
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          InputProps={{
            style: {
              color: "grey",
            },
          }}
        />
        <div>Number of Transaction</div>

        <ButtonGroup size="small">
          <Button onClick={handleIncrement}>+</Button>
          {displayAmount ? <Button>{amount}</Button> :
            <Button disabled>{amount}</Button>
          }
          <Button onClick={handleDecrement}>-</Button>
        </ButtonGroup>

        <TextField
          id="outlined-select-chain"
          select
          label="Select Chain"
          value={chain}
          onChange={handleChainChange}
          helperText="Please select your currency"
        >
          {chains.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

      </Box>

      <Divider />
    </div>
  );
}
