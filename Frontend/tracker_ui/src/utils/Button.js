import React from "react";
import { MoveRight } from "lucide-react";
import btn from "./Button.module.css";

export const Button = (props) => {
  return (
    <button className={btn.btn1}>
      {props.children} <MoveRight />
    </button>
  );
};
