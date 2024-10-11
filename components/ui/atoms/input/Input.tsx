import React, { CSSProperties } from "react";
import styles from "./input.module.css";
import colors from "@/styles/colors";

export type InputMode = "sm" | "xs" | "lg" | "md" | undefined;

interface InputProps {
  mode?: InputMode;
  color?: keyof typeof colors;
  customStyle?: CSSProperties;
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({
  mode = "md",
  color,
  customStyle,
  placeholder,
}) => {
  const modeClass = styles[mode];
  const borderColor = color ? colors[color] : "initial";

  return (
    <input
      className={`${styles.input} ${modeClass}`}
      style={{
        ...customStyle,
        borderColor,
      }}
      placeholder={placeholder}
    />
  );
};

export default Input;