import { Button, ButtonProps } from "./Button";

type TextButtonProps = ButtonProps & { label: string };

export const TextButton = (props: TextButtonProps) => {
  const { label, ...rest } = props;

  return (
    <Button {...rest}>
      <span className="Button-TextButton">{label}</span>
    </Button>
  );
};
