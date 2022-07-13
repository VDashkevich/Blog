import React, { FC, FocusEventHandler } from "react";
import "./Input.css";

type InputProps = {
  type: string;
  disabled?: boolean;
  className?: string;
  placeholder?: string;
};

const Input: FC<InputProps> = ({
  type,
  disabled,
  className,
  placeholder,
}: any) => {
  return (
    <input
      type={type}
      disabled={disabled}
      className={className}
      placeholder={placeholder}
    />
  );
};

export default Input;
