import React from "react";
import { Flex } from "../Flex";
import style from "./style.module.scss";

type ButtonTheme =
  | "submit"
  | "green"
  | "neutral"
  | "delete"
  | "callToActionWhite"
  | "callToActionBlack";
export const ButtonThemes: { [key: string]: ButtonTheme } = {
  submit: "submit",
  green: "green",
  neutral: "neutral",
  delete: "delete",
  callToActionWhite: "callToActionWhite",
  callToActionBlack: "callToActionBlack",
};

export interface ButtonProps {
  onClick: (e: any) => void;
  children: any;
  containerStyle?: any;
  labelStyle?: any;
  disabled?: boolean;
  theme?: ButtonTheme;
  toggleDim?: boolean;
  IconComponent?: any;
  className?: any;
}

export const Button = (props: ButtonProps) => {
  const {
    theme = ButtonThemes.submit,
    disabled,
    toggleDim,
    className,
    IconComponent,
  } = props;

  const isDimmable = toggleDim !== undefined ? toggleDim : true;
  return (
    <Flex
      center
      onClick={(!disabled && props.onClick) || undefined}
      className={`${style.button} ${className} ${disabled && isDimmable && style.disabled
        }  ${style[`${theme}Theme`]}`}
      style={props.containerStyle}
    >
      <span
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          whiteSpace: "nowrap",
          color: "white",
          ...(props.labelStyle || {}),
        }}
      >
        {props.children}
      </span>
      {IconComponent && (
        <div
          style={{
            marginLeft: 15,
            color: "white",
          }}
        >
          <IconComponent style={{ ...(props.labelStyle || {}), paddingTop: 5, }} />
        </div>
      )}
    </Flex>
  );
};
