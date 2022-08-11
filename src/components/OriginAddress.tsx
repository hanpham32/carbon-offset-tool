import { TextField } from "@mui/material"
import { usePlacesWidget } from "react-google-autocomplete";


type Props = {
    originAddress: string,
    setOriginAddress: any,
    inputPropsStyle: any,
}

export default function OriginAddress({originAddress, setOriginAddress, inputPropsStyle}: Props) {
  const { ref } = usePlacesWidget({
    apiKey: "AIzaSyBDTaGbVsqx6stQGmwEgze_Ar8W1fj7Qpg",
    onPlaceSelected: (place) => {
      setOriginAddress(place.formatted_address);
      console.log(originAddress);
    },
  });
  return (
    <TextField
      id="stand-basic"
      label="Physical Destination Address"
      variant="standard"
      focused
      value={originAddress}
      onChange={(e) => {
        setOriginAddress(e.target.value);
      }}
      InputProps={inputPropsStyle}
      inputRef={ref}
    />
  );
}