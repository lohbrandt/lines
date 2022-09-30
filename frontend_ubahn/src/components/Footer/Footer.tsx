import React from "react";
import "./Footer.css";

type FooterProps = {
  children: React.ReactNode;
};

// TS: the component is not used at all
export const Footer = (props: FooterProps) => {
  const { children } = props;

  // TS: well, why use a <div> and not a <footer>?
  return (
    // <div className={styles["footer"]} aria-label="footer">
    <div className="Footer" aria-label="footer">
      {children}
    </div>
  );
};
