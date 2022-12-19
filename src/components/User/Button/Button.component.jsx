import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const SubmitButton = ({ label, submit, inputName }) => {
  const CssSubmitButton = withStyles({
    root: {
      "& label": {
        color: "#ffffff",
      },
      //   '& label.Mui-focused': {
      //     color: '#ffffff',
      //   },
      //   '& .MuiInput-underline:after': {
      //     borderBottomColor: '#ffffff',
      //   },
      //   '& .MuiOutlinedInput-root': {
      //     '& fieldset': {
      //       borderColor: '#ffffff',
      //     },
      //     '& input': {
      //       color: '#ffffff',
      //     },
      //     '&:hover fieldset': {
      //       borderColor: '#ffffff',
      //     },
      //     '&.Mui-focused fieldset': {
      //       borderColor: '#ffffff',
      //     },
      //   },
    },
  })(Button);

  return (
    <CssSubmitButton
      type="submit"
      id={inputName}
      label={label}
      margin="normal"
      variant="contained"
      disableElevation
      style={{ width: "100%", borderRadius: "20px", backgroundColor: "black" }}
      onSubmit={submit}
    />
  );
};

export default SubmitButton;
