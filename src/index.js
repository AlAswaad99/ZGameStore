import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import LoginContextProvider from "./context/LoginContext";
import { BrowserRouter, Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginContextProvider>
        <App />
      </LoginContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// const AppWrapper = () => {
//   return (
//     <Router>
//       {" "}
//       // Set context
//       <App /> // Now App has access to context
//     </Router>
//   );
// };
