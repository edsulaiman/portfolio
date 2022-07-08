import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../AppController";

type ProjectItemProps = {
  image: string;
  index?: number;
  currentIndex?: number;
  onClick?: () => void;
};

const ProjectImage = (props: ProjectItemProps) => {
  return <div className="aspect-video bg-gray rounded-lg bg-center bg-contain bg-no-repeat" style={{ backgroundImage: "url(" + props.image + ")" }}></div>;
};

const ProjectImageThumbnail = (props: ProjectItemProps) => {
  return (
    <div
      className={
        (props.index === props.currentIndex ? "border-primary border-4 " : "border-gray border-2 ") +
        "rounded-lg flex justify-center aspect-video  bg-gray bg-cover bg-center bg-no-repeat cursor-pointer col-span-4 md:col-span-2 hover:scale-105 transition duration-150 ease-in"
      }
      onClick={props.onClick}
      style={{ backgroundImage: "url(" + props.image + ")" }}
    />
  );
};

const ProjectImageCarousel = () => {
  const { id } = useParams();
  const appController = useContext(AppContext);
  const project = appController!.projects!.at(parseInt(id!));

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeIndex = (index: number) => setCurrentIndex(() => index);

  return (
    <div className="flex flex-col gap-4">
      <ProjectImage image={project!.images[currentIndex]} />
      <div className="grid grid-cols-12 gap-4">
        {project!.images.map((e, index) => (
          <ProjectImageThumbnail index={index} currentIndex={currentIndex} image={e} onClick={() => changeIndex(index)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
