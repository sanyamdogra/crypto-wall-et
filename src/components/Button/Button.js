import React from "react";
import styles from "./Button.module.css";

function Button(props) {
  return (
    <div
      className={styles.button}
      onClick={props.onClick}
      style={{
        fontSize: `${props.fontSize}`,
        padding: `${props.padding}`,
        color: !props.active
          ? `${props.textColorInActive}`
          : `${props.textColor}`,
        backgroundColor: !props.active
          ? `${props.inActiveColor}`
          : `${props.bgColor}`,
        borderRadius: `${props.borderRadius}`,
        boxShadow: `${props.boxShadow}`,
        borderStyle: props.active ? null : "solid",
        borderWidth: props.active ? null : `${props.border}`,
        borderColor: props.active ? null : `${props.borderCol}`,
        margin: `${props.margin}`,
        fontWeight:`${props.fontWeight}`
      }}
    >
      {props.children}
    </div>
  );
}

export default Button;
