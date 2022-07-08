import { ReactNode, useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../AppController";
import Label from "./Label";
import Title from "./Title";

type ProjectImageProps = {
  image: string;
};

const ProjectImage = (props: ProjectImageProps) => {
  return (
    <div
      className="aspect-video bg-primary rounded-lg bg-center bg-cover bg-no-repeat border-gray border-2"
      style={{ backgroundImage: "url(" + props.image + ")" }}
    ></div>
  );
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
    <Link
      to={"/project/" + props.index}
      className="flex flex-col gap-4 col-span-12 md:col-span-6 lg:col-span-4 hover:text-primary hover:scale-105 transition duration-150 ease-in"
    >
      <ProjectImage image={props.image} />
      <ProjectTitle label={props.label} title={props.title} />
    </Link>
  );
};

type ProjectListProps = {
  mainSection: boolean;
  currentProjectIndex?: number;
};

const ProjectList = (props: ProjectListProps) => {
  const shuffle = (list: number[]) => {
    var j, x, i;
    for (i = list.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = list[i];
      list[i] = list[j];
      list[j] = x;
    }

    return list;
  };

  const appController = useContext(AppContext);
  const projects = appController?.projects;

  const projectChildren: ReactNode[] = [];
  if (props.mainSection) {
    projects?.map((e, index) => {
      const project: ProjectProps = {
        index: index,
        label: e.label,
        title: e.title,
        image: e.images[0],
      };

      projectChildren.push(<Project {...project} />);
    });
  } else {
    let projectIndex: number[] = [];
    projects?.map((e, index) => projectIndex.push(index));
    projectIndex = projectIndex.filter((e) => e != props.currentProjectIndex);
    projectIndex = shuffle(projectIndex);

    const maxProject = projectIndex!.length > 3 ? 3 : projectIndex!.length;
    for (;;) {
      if (projectIndex.length > maxProject) {
        projectIndex.pop();
      } else {
        break;
      }
    }

    projectIndex.map((e) => {
      const project: ProjectProps = {
        index: e,
        label: projects![e].label,
        title: projects![e].title,
        image: projects![e].images[0],
      };
      projectChildren.push(<Project {...project} />);
    });
  }

  return (
    <div className="flex flex-col gap-8 px-8 md:px-0">
      <Title value="Projects" />
      {projectChildren.length != 0 ? <div className="flex flex-col md:grid grid-cols-12 gap-8">{projectChildren}</div> : <div>No projects to show</div>}
    </div>
  );
};

export default ProjectList;
