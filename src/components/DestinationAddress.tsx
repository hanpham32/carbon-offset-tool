import { TextField } from "@mui/material";
import { usePlacesWidget } from "react-google-autocomplete";

type Props = {
  destinationAddress: string;
  setDestinationAddress: any;
  inputPropsStyle: any;
};

export default function DestinationAddress({
  destinationAddress,
  setDestinationAddress,
  inputPropsStyle,
}: Props) {
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyBDTaGbVsqx6stQGmwEgze_Ar8W1fj7Qpg",
    onPlaceSelected: (place) => {
      setDestinationAddress(place.formatted_address);
      console.log(destinationAddress);
    },
  });
  return (
    <TextField
      id="stand-basic"
      label="Physical Destination Address"
      variant="standard"
      focused
      value={destinationAddress}
      onChange={(e) => {
        setDestinationAddress(e.target.value);
      }}
      InputProps={inputPropsStyle}
      inputRef={ref}
    />
  );
}
