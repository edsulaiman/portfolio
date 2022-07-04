import Profile from "./components/Profile";
import Header from "./components/Header";
import ProjectList from "../../components/ProjectList";
import SkillsAndExperiences from "./components/SkillsAndExperiences";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl	m-auto md:px-8 py-16 flex flex-col gap-16">
        <Profile />
        <SkillsAndExperiences />
        <ProjectList mainSection={true} />
      </div>
    </>
  );
};

export default HomePage;
