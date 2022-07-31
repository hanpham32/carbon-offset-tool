import React from "react";
import { Stack, Button, styled, ButtonProps } from "@mui/material";
import List from "@mui/material/Icon";

const OptionsButton = styled(Button)<ButtonProps>({
  color: "#9DD841",
  "&:hover": {
    textDecoration: "underline",
    backgroundColor: "#9DD841",
    color: "white",
  },
});

export default function Navbar() {
  return (
    <div className="bg-white rounded my-2">
      <nav>
        <ul className="flex flex-row px-2 text-white my-2 h5">
          <Stack spacing={2} direction="row">
            <OptionsButton variant="text">Crypto Offset</OptionsButton>
            <OptionsButton variant="text">Shipping Offset</OptionsButton>
          </Stack>
        </ul>
      </nav>
    </div>
  );
}
