import { Link } from "react-router-dom";
import Label from "../../../components/Label";
import Title from "../../../components/Title";

const ProjectImage = () => {
  return <div className="aspect-video bg-primary rounded-lg"></div>;
};

const ProjectTitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label value="Video Editing" />
      <div className="text-xl font-bold">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ante nec nulla dictum, quis tincidunt tortor efficitur.
      </div>
    </div>
  );
};

const Project = () => {
  return (
    <Link to="/project/1" className="flex flex-col gap-4 col-span-12 md:col-span-6 lg:col-span-4">
      <ProjectImage />
      <ProjectTitle />
    </Link>
  );
};

const ProjectList = () => {
  const items = [];
  for (let i = 0; i < 9; i++) {
    items.push(<Project />);
  }

  return (
    <div className="flex flex-col gap-8 px-8 md:px-0">
      <Title value="Projects" />
      <div className="grid grid-cols-12 gap-8">{items}</div>
    </div>
  );
};

export default ProjectList;
