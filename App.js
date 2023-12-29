import React from "react";
import ReactDOM from "react-dom/client";
import Authentication from "./Components/auth/Authentication";
import Index from "./Components/auth/Index";
import ForgotPassword from "./Components/auth/ForgotPassword";
import EmailVerification from "./Components/auth/EmailVerification";
import ResetPassword from "./Components/auth/ResetPassword";
import Layout from "./Components/Consumer/shared/Layout";
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Dashboard from "./Components/Consumer/Dashboard";
import Order from "./Components/Consumer/Order";
import Report from "./Components/Consumer/Report";
import Settings from "./Components/Consumer/Settings";
import Support from "./Components/Consumer/Support";

const App = () => {
  return (
    <>
      {/* <Index/> */}
      {/* <Authentication/> */}
      {/* <ForgotPassword/> */}
      {/* <EmailVerification/> */}
      {/* <ResetPassword/> */}
      {/* <Layout/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>} >
            <Route index element={<Dashboard/>} />
            <Route path="order" element={<Order/>} />
            <Route path="report" element={<Report/>} />
            <Route path="settings" element={<Settings/>} />
            <Route path="support" element={<Support/>} />
          </Route>
          <Route path="login" element={<Authentication/>} />
        </Routes>
      </BrowserRouter>

    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
