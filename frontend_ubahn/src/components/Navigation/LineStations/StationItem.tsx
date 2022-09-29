type StationItemProps = {
  active?: number;
  id: number;
  name: string;
  setStationItem: (id: number) => void;
};

export const StationItem = (props: StationItemProps) => {
  const { active, name, id, setStationItem } = props;

  const handleClick = () => {
    setStationItem(id);
  };

  return (
    <li className={`${active === id && "active"}`}>
      <button className="cta station-select" onClick={handleClick}>
        <span>{name}</span>
      </button>
    </li>
  );
};
