import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppController";
import Label from "./Label";
import Title from "./Title";

type ProjectImageProps = {
  image: string;
};

const ProjectImage = (props: ProjectImageProps) => {
  return <div className="aspect-video bg-primary rounded-lg bg-center bg-cover bg-no-repeat" style={{ backgroundImage: "url(" + props.image + ")" }}></div>;
};

type ProjectTitleProps = {
  label: string;
  title: string;
};

const ProjectTitle = (props: ProjectTitleProps) => {
  return (
    <div className="flex flex-col gap-2">
      <Label value={props.label} />
      <div className="text-xl font-bold">{props.title} </div>
    </div>
  );
};

type ProjectProps = {
  index: number;
  label: string;
  title: string;
  image: string;
};

const Project = (props: ProjectProps) => {
  return (
    <Link to={"/project/" + props.index} className="flex flex-col gap-4 col-span-12 md:col-span-6 lg:col-span-4">
      <ProjectImage image={props.image} />
      <ProjectTitle label={props.label} title={props.title} />
    </Link>
  );
};

type ProjectListProps = {
  mainSection: boolean;
};

const ProjectList = (props: ProjectListProps) => {
  const generateRandom = (min = 0, max = 100) => {
    const difference = max - min;
    let rand = Math.random();

    rand = Math.floor(rand * difference);
    rand = rand + min;

    return rand;
  };

  const appController = useContext(AppContext);
  const projects = appController?.projects;

  const projectChildren: ReactNode[] = [];
  if (props.mainSection) {
    projects?.map((e, index) => {
      projectChildren.push(<Project index={index} label={e.label} title={e.title} image={e.image[0]} />);
    });
  } else {
    const maxProject = projects!.length > 3 ? 3 : projects?.length;
    for (let i = 0; i < maxProject!; i++) {
      const index = generateRandom(0, projects?.length);
      const e = projects![index];
      projectChildren.push(<Project index={index} label={e.label} title={e.title} image={e.image[0]} />);
    }
  }

  return (
    <div className="flex flex-col gap-8 px-8 md:px-0">
      <Title value="Projects" />
      <div className="grid grid-cols-12 gap-8">{projectChildren}</div>
    </div>
  );
};

export default ProjectList;
