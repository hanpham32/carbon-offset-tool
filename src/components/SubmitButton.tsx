import React from "react";
import { Button, styled, ButtonProps } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";

const CustomSubmitButton = styled(Button)<ButtonProps>({
  boxShadow: "0.2rem 0.2rem 0 0 #3C5319",
  backgroundColor: "#84CC15",
  color: "black",
  "&:focus": {
    backgroundColor: "#9DD841",
  },
  "&:hover": {
    backgroundColor: "#84CC15",
  },
});

export default function SubmitButton() {

  const notify = () => toast("Submitted");

  return (
    <div>
      <div className="flex flex-row-reverse mt-4">
        <CustomSubmitButton variant="contained" size="medium" onClick={notify}>
          Submit
        </CustomSubmitButton>
        <ToastContainer
          position='top-right'
          autoClose={3000}
          closeOnClick
          draggable
          pauseOnHover
          theme='light'
        />
      </div>
    </div>
  );
}
