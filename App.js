import React from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./Components/auth/Authentication";
import Index from "./Components/auth/Index";
import ForgotPassword from "./Components/auth/ForgotPassword";
import EmailVerification from "./Components/auth/EmailVerification";
import ResetPassword from "./Components/auth/ResetPassword";

const App = () => {
  return (
    <>
      <Index/>
      {/* <Authentication/> */}
      {/* <ForgotPassword/> */}
      {/* <EmailVerification/> */}
      {/* <ResetPassword/> */}
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
