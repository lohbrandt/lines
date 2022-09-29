import React from "react";
import "./Footer.css";

type FooterProps = {
  children: React.ReactNode;
};

export const Footer = (props: FooterProps) => {
  const { children } = props;

  return (
    // <div className={styles["footer"]} aria-label="footer">
    <div className="Footer" aria-label="footer">
      {children}
    </div>
  );
};
