import React from "react";
import styles from "./button.module.css";

interface ButtonProps {
  onClick: () => void;
  type: "button" | "submit" | "reset";
  title: string;
  label?: string;
  height?: number;
  width?: string | number;
  mb?: number,
  fontSize?: number;
  borderRadius?: number;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  variant?: "primary" | "secondary" | "default";
}

const Button = ({
  onClick,
  type,
  label,
  title,
  height = 56,
  fontSize = 18,
  width = '100%',
  mb = 0,
  borderRadius = 50,
  icon,
  iconPosition = "left",
  variant = "primary",
}: ButtonProps): JSX.Element => {
  const buttonStyles = {
    height: `${height}px`,
    width: typeof width === 'number' ? `${width}px` : width,
    fontSize: `${fontSize}px`,
    marginBottom: `${mb}px`,
    borderRadius: `${borderRadius}px`,
  };

  return (
    <button
      aria-label={label}
      onClick={onClick}
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      style={buttonStyles}
    >
      {icon && iconPosition === "left" && (
        <span className={styles.icon}>{icon}</span>
      )}
      {title}
      {icon && iconPosition === "right" && (
        <span className={styles.icon}>{icon}</span>
      )}
    </button>
  );
};

Button.displayName = "Button";

export default Button;
