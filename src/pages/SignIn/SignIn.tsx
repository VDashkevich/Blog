import React, { FC, FocusEventHandler } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import { Theme, UseThemeContext } from "../../context/ThemeModeContext";
import classnames from "classnames";
import "./SignIn.css";

type SignInProps = {};

const SignIn: FC<SignInProps> = ({}: any) => {
  const { theme } = UseThemeContext();
  const isLightTheme = theme === Theme.Light;
  return (
    <div
      className={classnames({
        ["MainContainerLight"]: isLightTheme,
        ["MainContainerDark"]: !isLightTheme,
      })}
    >
      <div
        className={classnames({
          ["SignInBackLight"]: isLightTheme,
          ["SignInBackDark"]: !isLightTheme,
        })}
      >
        Back to home
      </div>
      <div
        className={classnames({
          ["SignInTitleLight"]: isLightTheme,
          ["SignInTitleDark"]: !isLightTheme,
        })}
      >
        Sign In
      </div>
      <div
        className={classnames({
          ["SignInBoxLight"]: isLightTheme,
          ["SignInBoxDark"]: !isLightTheme,
        })}
      >
        <div
          className={classnames({
            ["SignInEmailLight"]: isLightTheme,
            ["SignInEmailDark"]: !isLightTheme,
          })}
        >
          <div>Email</div>
          <Input
            type="text"
            className="SignInEmailInput"
            placeholder="Your email"
          ></Input>
        </div>
        <div
          className={classnames({
            ["SignInEPasswordLight"]: isLightTheme,
            ["SignInEPasswordDark"]: !isLightTheme,
          })}
        >
          <div>Password</div>
          <Input
            type="text"
            className="SignInPasswordInput"
            placeholder="Your password"
          ></Input>
        </div>
        <div
          className={classnames({
            ["SignInForgotLight"]: isLightTheme,
            ["SignInForgotDark"]: !isLightTheme,
          })}
        >
          Forgot password?
        </div>
        <div className="SignInButtonBlock">
          <Button
            btnContent={"Sign In"}
            className=" button_primary SignInButton"
          />
        </div>
        <div
          className={classnames({
            ["SignInSignUpLight"]: isLightTheme,
            ["SignInSignUpDark"]: !isLightTheme,
          })}
        >
          <span>Don’t have an account?</span>
          <span
            className={classnames({
              ["SignInSignUpLinkLight"]: isLightTheme,
              ["SignInSignUpLinkDark"]: !isLightTheme,
            })}
          >
            Sign Up
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignIn;