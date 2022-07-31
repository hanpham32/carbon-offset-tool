import React, { useState } from "react";

import { Divider, Box, TextField, Button, Menu, MenuItem } from "@mui/material";
import ListIcon from "@mui/icons-material/Menu";

export default function DraftShippingCarbonOffset() {
  const [transporationMethod, setTransportationMethod] = useState("");
  const [weight, setWeight] = useState("");
  const [originAddress, setOriginAddress] = useState("");
  const [destinationAddress, setDestinationAddress] = useState("");

  // MenuList
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div className="h3 text-lime-500">
        Draft Shipping Carbon Offset {"\n"}
      </div>
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
          value={originAddress}
          onChange={(e) => {
            setOriginAddress(e.target.value);
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
          value={destinationAddress}
          onChange={(e) => {
            setDestinationAddress(e.target.value);
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
