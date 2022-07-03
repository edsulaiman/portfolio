type LabelProps = {
  value: string;
};

const Label = (props: LabelProps) => {
  return <div className="text-lg text-primary font-bold">{props.value}</div>;
};

export default Label;
