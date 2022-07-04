import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Title from "../../../components/Title";

type ProjectTitleProps = {
  title: string;
};

const ProjectTitle = (props: ProjectTitleProps) => {
  return (
    <div className="flex justify-between items-center">
      <Title value={props.title} />
      <Link to="/">
        <FontAwesomeIcon icon={faTimes} size="2x" />
      </Link>
    </div>
  );
};

export default ProjectTitle;
