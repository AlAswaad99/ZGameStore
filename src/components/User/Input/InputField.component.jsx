import React from "react";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/core/styles";

const InputField = ({ label, setValue, inputName, value }) => {
  const onChanged = (e) => {
    e.preventDefault();
    let val = e.target.value;
    // console.log(name);
    console.log("in input", label);
    console.log("in input", val);
    // console.log(e.type);
    // console.log(e.target());
    // if(e.type === 'keypress' && e.key === 'Enter') {
    //   if(q_game && q_game !== currentQGame) {
    //     setCurrentQGame(q_game);
    //     setdoneFetchPopularGames(false);
    //     setdoneFetchUpcomingGames(false);
    //     setdoneFetchNewGames(false);
    //     getSearchedGames(q_game);
    //   }
    // }
    setValue(label, val);
  };
  const CssTextField = withStyles({
    root: {
      "& label": {
        color: "#ffffff",
      },
      "& label.Mui-focused": {
        color: "#ffffff",
      },
      "& .MuiInput-underline:after": {
        borderBottomColor: "#ffffff",
      },
      "& .MuiOutlinedInput-root": {
        "& fieldset": {
          borderColor: "#ffffff",
        },
        "& input": {
          color: "#ffffff",
        },
        "&:hover fieldset": {
          borderColor: "#ffffff",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#ffffff",
        },
      },
    },
  })(TextField);

  return (
    <CssTextField
      type="text"
      id={inputName}
      label={label}
      margin="normal"
      variant="outlined"
      style={{ width: "100%", borderRadius: "20px" }}
      onChange={(e) => onChanged(e)}
      value={value}
    />
  );
};

export default InputField;
