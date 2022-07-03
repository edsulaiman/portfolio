import Label from "../components/Label";
import Title from "../components/Title";

const ProjectImage = () => {
  return <div className="aspect-video bg-primary rounded-lg"></div>;
};

const ProjectTitle = () => {
  return (
    <div className="flex flex-col gap-2">
      <Label value="Video Editing" />
      <div className="text-3xl md:text-xl font-bold">Meet Your Newest Community Moderator: AutoMod Is Here</div>
    </div>
  );
};

const Project = () => {
  return (
    <div className="flex flex-col gap-4 col-span-12 md:col-span-6 lg:col-span-4">
      <ProjectImage />
      <ProjectTitle />
    </div>
  );
};

const ProjectList = () => {
  const items = [];
  for (let i = 0; i < 9; i++) {
    items.push(<Project />);
  }

  return (
    <div className="flex flex-col gap-8 px-8">
      <Title value="Projects" />
      <div className="grid grid-cols-12 gap-8">{items}</div>
    </div>
  );
};

export default ProjectList;
