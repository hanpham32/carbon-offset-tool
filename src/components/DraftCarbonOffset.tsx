import React, { useEffect, useState } from "react";
import { Buffer } from "buffer";

import { TextField, Box, Button, styled, ButtonProps } from "@mui/material";
const SubmitButton = styled(Button)<ButtonProps>({
  boxShadow: "0.2rem 0.2rem 0 0 #3C5319",
  backgroundColor: "#84CC15",
  fontColor: "",
  "&:focus": {
    backgroundColor: "#9DD841",
  },
  "&:hover": {
    backgroundColor: "#84CC15",
  },
});

export default function DraftCarbonOffset() {
  const [address, setAddress] = useState("");

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

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
        "Basic " +
          Buffer.from(pk_test + ":" + sk_test).toString("base64")
      );
      headers.set("Content-Type", "application/json");

      const response = await fetch('https://api.getchange.io/api/v1/climate/crypto_offset', {
        method: "POST",
        headers,
        body: JSON.stringify({
          "count": 2,
          "currency": "eth",
          "funds_collected": false,
        }),
      })

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
    <div className="bg-white rounded pt-6 px-2">
      <div className="py-2">
        <div className="h3 text-lime-500">Draft Carbon Offset {"\n"}</div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
          className=""
        >
          <TextField
            id="standard-basic"
            label="Input address"
            variant="standard"
            focused
            className="text-white"
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
        </Box>
        <div className="flex flex-row-reverse">
          <SubmitButton variant="contained" size="medium">
            Submit
          </SubmitButton>
        </div>
      </div>
    </div>
  );
}
