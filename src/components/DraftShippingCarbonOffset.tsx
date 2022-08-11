import React, { useState } from "react";
import { Buffer } from "buffer";
import { Divider, Box, TextField, Button, Menu, MenuItem } from "@mui/material";

import { usePlacesWidget } from "react-google-autocomplete";

import SubmitButton from "./SubmitButton";
import DestinationAddress from "./DestinationAddress";
import OriginAddress from "./OriginAddress";

interface State {
  transportation_method: string;
  weight: number;
  destination_address: string;
  origin_address: string;
}

const transportation_methods = [
  {
    value: "air",
    label: "Air",
  },
  {
    value: "truck",
    label: "Truck",
  },
  {
    value: "rail",
    label: "Rail",
  },
  {
    value: "sea",
    label: "Sea",
  },
];

const inputPropsStyle = {
  style: {
    color: "grey",
  },
};

const API_KEYS = {
  pk_test:
    "pk_live_a9d6aa3ace41842eb0ccab4b98e8d53c26803a8a7481afcdbda011a1023f78a8",
  sk_test:
    "sk_live_01a8068d7a6fbef04dff370c67411fc0a2316d36a56d1d917bd6486f5e270551",
};

export default function DraftShippingCarbonOffset() {
  const [transportationMethod, setTransportationMethod] = useState("air");
  const [weight, setWeight] = useState(0);
  const [destinationAddress, setDestinationAddress] = useState("");
  const [originAddress, setOriginAddress] = useState("");

  // MenuList
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSubmitClick = () => {
    console.log("submit shipping carbon!");
    console.log(JSON.stringify(BodyContent));
    fetchData().catch(console.error);
  };

  const BodyContent = {
    transportation_method: transportationMethod,
    weight_lb: weight,
    destination_address: destinationAddress,
    origin_address: originAddress,
  };

  const fetchData = async () => {
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
      "https://api.getchange.io/api/v1/climate/shipping_offset",
      {
        method: "POST",
        headers,
        body: JSON.stringify(BodyContent),
      }
    );
  };

  const handleMethodChange = (e: any) => {
    setTransportationMethod(e.target.value);
  };
  return (
    <div>
      <div className="h3 text-lime-600">Draft Shipping Carbon Offset</div>
      <Divider />
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "95%" },
        }}
        noValidate
        autoComplete="off"
        className="my-4"
      >
        <TextField
          id="outlined-select-transportationMethod"
          select
          label="Transportation Method"
          value={transportationMethod}
          onChange={handleMethodChange}
          helperText="Please select your transportation method"
          required
        >
          {transportation_methods.map((method) => (
            <MenuItem key={method.value} value={method.value}>
              {method.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="standard-basic"
          label="Input Order Weight in Lbs"
          variant="standard"
          focused
          value={weight}
          onChange={(e) => {
            const weight = e.target.value;
            {
              parseInt(weight) > 0
                ? setWeight(parseInt(e.target.value))
                : setWeight(0);
            }
          }}
          InputProps={inputPropsStyle}
          required
        />
        <DestinationAddress
          destinationAddress={destinationAddress}
          setDestinationAddress={setDestinationAddress}
          inputPropsStyle={inputPropsStyle}
        />
        <OriginAddress
          originAddress={originAddress}
          setOriginAddress={setOriginAddress}
          inputPropsStyle={inputPropsStyle}
        />
      </Box>
      <Divider />
      <SubmitButton onClick={handleSubmitClick} />
    </div>
  );
}
