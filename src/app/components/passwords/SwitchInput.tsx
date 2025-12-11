interface IPropsSwtchInput {
  title: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

const SwitchInput = ({ title, value, onChange }: IPropsSwtchInput) => {
  return (
    <div>
      <label htmlFor={title}>{title}</label>
      <input
        className="ml-2"
        type="checkbox"
        name={title}
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        min={5}
        max={30}
      />
    </div>
  );
};

export default SwitchInput;
