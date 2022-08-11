import { useState } from "react";
import { Stack, Button, styled, ButtonProps } from "@mui/material";

// const OptionsButton = styled(Button)<ButtonProps>({
//   color: "black",
//   fontWeight: "bold",
//   "&:hover": {
//     textDecoration: "underline",
//     backgroundColor: "#9DD841",
//     color: "black",
//   },
// });

const highLight = {
  backgroundColor: "#9DD841",
};
const buttonStyle = {
  color: "black",
  fontWeight: "bold",
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "#9DD841",
    color: "black",
  },
};

export default function Navbar({cryptoOffset, setCryptoOffset, shippingOffset, setShippingOffset} : {cryptoOffset: boolean, setCryptoOffset: any, shippingOffset: boolean, setShippingOffset: any}) {

  const handleCryptoOffsetClick = () => {
    setCryptoOffset(true);
    setShippingOffset(false);
  };
  const handleShippingOffsetClick = () => {
    setCryptoOffset(false);
    setShippingOffset(true);
  };

  return (
    <div className="bg-white rounded my-2">
      <nav>
        <ul className="flex flex-row px-2 text-white my-2 h5">
          <Stack spacing={2} direction="row">
            <Button
              variant="text"
              sx={cryptoOffset ? highLight : buttonStyle}
              onClick={handleCryptoOffsetClick}
            >
              Crypto Offset
            </Button>
            <Button
              variant="text"
              sx={shippingOffset ? highLight : buttonStyle}
              onClick={handleShippingOffsetClick}
            >
              Shipping Offset
            </Button>
          </Stack>
        </ul>
      </nav>
    </div>
  );
}
