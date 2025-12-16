interface IPropsSlideBar {
  value: number;
  changeVlaue: (value: number) => void;
}

const SliderBar = ({
  value,
  changeVlaue,
}: IPropsSlideBar) => {
  return (
    <div>
      <input
        value={value}
        onChange={(e) =>
          changeVlaue(Number(e.target.value))
        }
        className="w-full"
        type="range"
        min={1}
        max={30}
      />
    </div>
  );
};

export default SliderBar;
