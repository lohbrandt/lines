import React from "react";

export type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  component?: React.ComponentType | keyof JSX.IntrinsicElements;
  disabled?: boolean;
  onClickHandler?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
  testId?: string;
};

export const Button = (props: ButtonProps) => {
  const {
    children,
    className,
    // component: AsComponent = "button",
    disabled,
    onClickHandler,
    style,
    testId,
    ...rest // TS: the ButtonProps don't declare that there's anything else that could be passed to the button
  } = props;

  // const toggleClick = (e: React.MouseEvent): void => {
  //   console.info(e);
  // };

  return (
    <button
      className={className}
      // onClick={toggleClick}
      onClick={(el) => console.info("hello")} // TS: onClickHandler is not called :)
      data-testId={testId}
      disabled
      style={style}
      {...rest}
    >
      {children}
    </button>
  );
};
