import React from "react";
import "./Header.css";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  component?: React.ComponentType | keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
};

export const Header = (props: HeaderProps) => {
  const {
    children,
    className,
    component: AsComponent = "header",
    style,
  } = props;

  return (
    <>
      <AsComponent className={`Header ${className}`} style={style}>
        {children}
      </AsComponent>
    </>
  );
};
