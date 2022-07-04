import Profile from "../../components/Profile";
import Header from "./components/Header";
import ProjectList from "./components/ProjectList";
import SkillAndExperience from "./components/SkillAndExperience";

const HomePage = () => {
  return (
    <>
      <Header />
      <div className="max-w-screen-xl	m-auto md:px-8 py-16 flex flex-col gap-16">
        <Profile />
        <SkillAndExperience />
        <ProjectList />
      </div>
    </>
  );
};

export default HomePage;
