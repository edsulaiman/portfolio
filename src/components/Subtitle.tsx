type SubtitleProps = {
  value: string;
};

const Subtitle = (props: SubtitleProps) => {
  return <div className="text-2xl text-primary font-bold">{props.value}</div>;
};

export default Subtitle;
