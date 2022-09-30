import React from "react";
import "./Header.css";

type HeaderProps = {
  children: React.ReactNode;
  className?: string;
  component?: React.ComponentType | keyof JSX.IntrinsicElements;
  style?: React.CSSProperties;
};

// TS: component is not used
export const Header = (props: HeaderProps) => {
  const {
    children,
    className,
    component: AsComponent = "header", // TS: interesting, but why would you need anything other than <header>? I'd go with YAGNI here for now
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
