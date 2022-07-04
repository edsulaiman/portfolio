import axios from "axios";
import { createContext } from "react";
import { ConfigsModel } from "./models/ConfigsModel";
import { ExperienceModel } from "./models/ExperienceModel";
import { ProfileModel } from "./models/ProfileModel";
import { ProjectModel } from "./models/ProjectModel";
import { SkillModel } from "./models/SkillModel";

export const AppContext = createContext<AppController | null>(null);

export class AppController {
  configs: ConfigsModel | null = null;
  profile: ProfileModel | null = null;
  skills: SkillModel[] = [];
  experiences: ExperienceModel[] = [];
  projects: ProjectModel[] = [];

  async fetchData() {
    const configsReq = await axios.get(process.env.PUBLIC_URL + "/configs/configs.json");
    this.configs = configsReq.data;

    const profileReq = await axios.get(process.env.PUBLIC_URL + "/configs/profile.json");
    this.profile = profileReq.data;

    const skillsReq = await axios.get(process.env.PUBLIC_URL + "/configs/skills.json");
    this.skills = skillsReq.data;

    const experiencesReq = await axios.get(process.env.PUBLIC_URL + "/configs/experiences.json");
    this.experiences = experiencesReq.data;

    const projectsReq = await axios.get(process.env.PUBLIC_URL + "/configs/projects.json");
    this.projects = projectsReq.data;
  }
}
