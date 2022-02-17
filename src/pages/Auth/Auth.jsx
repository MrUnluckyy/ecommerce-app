import React from "react";

import "./auth.scss";

import SignIn from "../../components/SignIn/SignIn";
import SignUp from "../../components/Signup/SignUp";

const Auth = () => {
  return (
    <div className="auth-page">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
