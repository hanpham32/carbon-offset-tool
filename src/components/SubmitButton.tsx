import React from "react";
import { Button, styled, ButtonProps } from "@mui/material";

const CustomSubmitButton = styled(Button)<ButtonProps>({
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
export default function SubmitButton() {
  return (
    <div>
      <div className="flex flex-row-reverse mt-4">
        <CustomSubmitButton variant="contained" size="medium">
          Submit
        </CustomSubmitButton>
      </div>
    </div>
  );
}
