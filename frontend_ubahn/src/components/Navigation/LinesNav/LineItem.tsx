type LineItemProps = {
  active?: number;
  color?: string;
  name: string;
  id: number;
  setLineItem: (id: number) => void;
};

export const LineItem = (props: LineItemProps) => {
  const { active, color, name, id, setLineItem } = props;

  const handleClick = () => {
    setLineItem(id);
  };

  // TS: IMO the <button> should be a <a> for better accessibility and more consistent behavior (cursor change on mouse over etc.)
  return (
    <li className={`${active === id && "active"}`}>
      <button
        className="cta line-select"
        onClick={handleClick}
        style={{ backgroundColor: `${color}` }}
      >
        <span>{name}</span>
      </button>
    </li>
  );
};
