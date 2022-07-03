import Header from "./sections/Header";
import Profile from "./sections/Profile";
import ProjectList from "./sections/ProjectList";
import SkillAndExperience from "./sections/SkillAndExperience";

const App = () => {
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

export default App;
