import axios from "axios";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ConfigsModel } from "./models/ConfigsModel";
import { ExperienceModel } from "./models/ExperienceModel";
import { ProfileModel } from "./models/ProfileModel";
import { ProjectModel } from "./models/ProjectModel";
import { SkillModel } from "./models/SkillModel";

interface AppProviderProps {
  configs?: ConfigsModel;
  profile?: ProfileModel;
  skills?: SkillModel[];
  experiences?: ExperienceModel[];
  projects?: ProjectModel[];
}

const AppContext = createContext<AppProviderProps | null>(null);
export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children }: { children?: ReactNode }) => {
  const [configs, setConfigs] = useState<ConfigsModel>();
  const [profile, setProfile] = useState<ProfileModel>();
  const [skills, setSkills] = useState<SkillModel[]>();
  const [experiences, setExperiences] = useState<ExperienceModel[]>();
  const [projects, setProjects] = useState<ProjectModel[]>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async () => {
    const configsReq = await axios.get(process.env.PUBLIC_URL + "/configs/configs.json");
    setConfigs(configsReq.data);

    const profileReq = await axios.get(process.env.PUBLIC_URL + "/configs/profile.json");
    setProfile(profileReq.data);

    const skillsReq = await axios.get(process.env.PUBLIC_URL + "/configs/skills.json");
    setSkills(skillsReq.data);

    const experiencesReq = await axios.get(process.env.PUBLIC_URL + "/configs/experiences.json");
    setExperiences(experiencesReq.data);

    const projectsReq = await axios.get(process.env.PUBLIC_URL + "/configs/projects.json");
    setProjects(projectsReq.data);
  };

  useEffect(() => {
    fetchData().then(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <AppContext.Provider
      value={{
        configs: configs,
        profile: profile,
        skills: skills,
        experiences: experiences,
        projects: projects,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
