import React, { FC, FocusEventHandler } from "react";
import "./SignIn.css";
import Input from "../../components/Input";
import Button from "../../components/Button";

type SignInProps = {};

const SignIn: FC<SignInProps> = ({}: any) => {
  return (
    <div className="MainContainer">
      <div className="SignInBack">Back to home</div>
      <div className="SignInTitle">Sign In</div>
      <div className="SignInBox">
        <div className="SignInEmail">
          <div className="SignInEmailTitle">Email</div>
          <Input
            type="text"
            className="SignInEmailInput"
            placeholder="Your email"
          ></Input>
        </div>
        <div className="SignInPassword">
          <div className="SignInEPasswordTitle">Password</div>
          <Input
            type="text"
            className="SignInPasswordInput"
            placeholder="Your password"
          ></Input>
        </div>
        <div className="SignInForgot">Forgot password?</div>
        <div className="SignInButton">
          <Button
            btnContent={"Sign In"}
            className="SignInButton button_primary "
          />
        </div>
        <div className="SignInSignUp">
          <span className="SignInSignUpText">Don’t have an account?</span>
          <span className="SignInSignUpLink">Sign Up</span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
