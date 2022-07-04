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
  return (
    <div className="rounded-lg flex justify-center bg-gray aspect-video overflow-hidden">
      <img className="max-h-full" src={props.image} />
    </div>
  );
};

const ProjectImageThumbnail = (props: ProjectItemProps) => {
  return (
    <img
      src={props.image}
      className={
        (props.index === props.currentIndex ? "border-primary border-4 " : "border-gray border-2 ") +
        "rounded-lg flex justify-center bg-gray aspect-video overflow-hidden object-cover cursor-pointer col-span-4 md:col-span-2"
      }
      onClick={props.onClick}
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
      <ProjectImage image={project!.image[currentIndex]} />
      <div className="grid grid-cols-12 gap-4">
        {project!.image.map((e, index) => (
          <ProjectImageThumbnail index={index} currentIndex={currentIndex} image={e} onClick={() => changeIndex(index)} />
        ))}
      </div>
    </div>
  );
};

export default ProjectImageCarousel;
