import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProjectList from "../../components/ProjectList";
import SocialMedia from "../../components/SocialMedia";
import { AppContext } from "../../AppController";
import ProjectTitle from "./components/ProjectTitle";
import ProjectImageCarousel from "./components/ProjectImageCarousel";

const ProjectDetailPage = () => {
  const { id } = useParams();
  const appController = useContext(AppContext);

  const project = appController!.projects!.at(parseInt(id!));

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, []);

  if (project === undefined) {
    window.location.href = "/";
    return <div></div>;
  }

  return (
    <>
      <div className="flex flex-col gap-16 max-w-screen-xl m-auto md:px-8 py-16">
        <div className="px-8 md:px-0">
          <div className="flex flex-col gap-8 mb-16">
            <ProjectTitle title={project!.title} />
            <ProjectImageCarousel />
          </div>
          <div className="text-lg">{project?.description ?? "No description"}</div>
        </div>
        <ProjectList mainSection={false} />
        <div className="px-8 md:px-0">
          <SocialMedia />
        </div>
      </div>
    </>
  );
};

export default ProjectDetailPage;
