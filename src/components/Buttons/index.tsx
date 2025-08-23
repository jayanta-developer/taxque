import React from "react";
import "./style.css";

interface btnProps {
  btnText: string;
  bgColor?: string;
  width?: string;
  height?: string;
  textColor?: string;
  textweight?: string;
  icon?: string;
  disable?: boolean;
  onClick?: () => void;
}

export const AppBtn: React.FC<btnProps> = ({
  btnText,
  bgColor,
  width,
  height,
  textColor,
  textweight,
  icon,
  disable,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className={disable ? "appBtn disableBtn" : "appBtn "}
      style={{
        width,
        minHeight: height || "50px",
        background: bgColor || "#0D203B",
      }}
    >
      <p style={{ color: textColor || "#fff", fontWeight: textweight || 500 }}>{btnText}</p>
      {icon ? <img src={icon} alt="" /> : null}
    </div>
  );
};

export const AppHoloBtn: React.FC<btnProps> = ({
  btnText,
  bgColor,
  width,
  height,
  textColor,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="appBtn appholorBtn"
      style={{
        width,
        minHeight: height || "50px",
        background: bgColor,
      }}
    >
      <p style={{ color: textColor || "#fff" }}>{btnText}</p>
      {icon ? <img style={{ width: "19px" }} src={icon} alt="" /> : null}
    </div>
  );
};

export const AppOrangeBtn: React.FC<btnProps> = ({
  btnText,
  bgColor,
  width,
  height,
  textColor,
  icon,
  onClick,
}) => {
  return (
    <div
      onClick={onClick}
      className="appBtn orangeBtn"
      style={{
        width,
        minHeight: height || "50px",
        background: bgColor || "#0D203B",
      }}
    >
      <p style={{ color: textColor || "#fff" }}>{btnText}</p>
      {icon ? <img src={icon} alt="" /> : null}
    </div>
  );
};