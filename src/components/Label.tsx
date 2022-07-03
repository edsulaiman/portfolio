type LabelProps = {
  value: string;
};

const Label = (props: LabelProps) => {
  return <div className="text-primary font-bold uppercase">{props.value}</div>;
};

export default Label;
