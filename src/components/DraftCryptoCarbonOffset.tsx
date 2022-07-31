import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";

import { TextField, Box, Button, Menu, MenuItem, Divider } from "@mui/material";
import ListIcon from "@mui/icons-material/Menu";

export default function DraftCryptoCarbonOffset() {
  const [address, setAddress] = useState("");
  const [amount, setAmount] = useState("");

  const [data, setData] = useState(null);
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
      const data = await response.json();
      console.log(data);
      // set state with result
      setData(data);
    };

    // call function
    fetchData().catch(console.error);
  }, []);

  return (
    <div>
      <div className="h3 text-lime-500">Draft Crypto Carbon Offset {"\n"}</div>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Input address"
          variant="standard"
          focused
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
        <TextField
          id="standard-basic"
          label="Number of transaction(s)"
          variant="standard"
          focused
          value={amount}
          onChange={(e) => {
            setAmount(e.target.value);
          }}
          InputProps={{
            style: {
              color: "grey",
            },
          }}
        />
      </Box>
      <Button
        id="basic-button"
        onClick={handleClick}
        startIcon={<ListIcon color="primary" />}
      >
        Select Chain
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem>Ethereum</MenuItem>
        <MenuItem>Solana</MenuItem>
      </Menu>
      <Divider />
    </div>
  );
}
