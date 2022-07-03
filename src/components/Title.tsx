type TitleProps = {
  value: string;
};

const Title = (props: TitleProps) => {
  return <div className="text-4xl font-bold text-primary">{props.value}</div>;
};

export default Title;
