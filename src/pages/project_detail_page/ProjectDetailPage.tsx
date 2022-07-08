import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../../components/ProjectList";
import SocialMedia from "../../components/SocialMedia";
import { useAppContext } from "../../AppContext";
import ProjectTitle from "./components/ProjectTitle";
import ProjectImageCarousel from "./components/ProjectImageCarousel";
import ReactMarkdown from "react-markdown";

const ProjectDetailPage = () => {
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [id]);

  const appProvider = useAppContext();
  const project = appProvider!.projects!.at(parseInt(id!));

  if (project === undefined) {
    window.location.href = "/";
    return <div></div>;
  }

  return (
    <div className="flex flex-col gap-16 max-w-screen-xl m-auto md:px-8 py-16">
      <div className="px-8 md:px-0">
        <div className="flex flex-col gap-8 mb-16">
          <ProjectTitle title={project!.title} />
          <ProjectImageCarousel />
        </div>
        <div className="flex flex-col gap-4 text-lg">
          <ReactMarkdown>{project?.description ?? "No description"}</ReactMarkdown>
        </div>
      </div>
      <ProjectList mainSection={false} currentProjectIndex={parseInt(id!)} />
      <div className="px-8 md:px-0">
        <SocialMedia />
      </div>
    </div>
  );
};

export default ProjectDetailPage;
