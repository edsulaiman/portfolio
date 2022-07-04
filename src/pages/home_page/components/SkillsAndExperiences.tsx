import { ReactNode, useContext } from "react";
import { AppContext } from "../../../AppController";
import Subtitle from "../../../components/Subtitle";
import Title from "../../../components/Title";
import { ExperienceModel } from "../../../models/ExperienceModel";
import { SkillModel } from "../../../models/SkillModel";

const SkillBar = (props: SkillModel) => {
  return (
    <div>
      <div>{props.name}</div>
      <div className="relative rounded-full w-full h-4 bg-secondary">
        <div className={"absolute rounded-full left-0 inset-y-0 h-full bg-primary"} style={{ width: props.value + "%" }}></div>
      </div>
    </div>
  );
};

const ExperienceCard = (props: ExperienceModel) => {
  return (
    <div className="rounded-lg bg-primary hover:bg-secondary text-onPrimary hover:onSecondary p-8 ease-in duration-150 col-span-12 md:col-span-6 lg:col-span-4">
      <div className="font-bold">{props.position}</div>
      <div className="text-sm">{props.company}</div>
      <div className="text-sm">{props.startEnd}</div>
    </div>
  );
};

const Skills = () => {
  const appController = useContext(AppContext);
  const configs = appController?.configs;
  const skills = appController?.skills;

  const skillChildren: ReactNode[] = [];
  skills?.map((e) => {
    skillChildren.push(<SkillBar name={e.name} value={e.value} />);
  });

  return (
    <div className="flex flex-col gap-4">
      <Subtitle value="Skills" />
      <div>{configs?.skills}</div>
      {skillChildren}
    </div>
  );
};

const Experiences = () => {
  const appController = useContext(AppContext);
  const configs = appController?.configs;
  const experiences = appController?.experiences;

  const experienceChildren: ReactNode[] = [];
  experiences?.map((e) => {
    experienceChildren.push(<ExperienceCard position={e.position} company={e.company} startEnd={e.startEnd} />);
  });

  return (
    <div className="flex flex-col gap-4">
      <Subtitle value="Experiences" />
      <div>{configs?.experiences}</div>
      <div className="grid grid-cols-12 gap-4">{experienceChildren}</div>
    </div>
  );
};

const SkillsAndExperiencesTitle = () => {
  const appController = useContext(AppContext);
  const configs = appController?.configs;

  return (
    <div className="flex flex-col gap-16">
      <Title value="Skills & Experiences" />
      <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0d8ea6fb53d41950d8d1_Spot-Policy%26Safety.svg" />
      <div>{configs?.skillsAndExperiences}</div>
    </div>
  );
};

const SkillsAndExperiences = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 rounded-lg bg-gray p-8">
      <div className="flex-[1]">
        <SkillsAndExperiencesTitle />
      </div>
      <div className="flex-[3] flex flex-col gap-8 md:gap-16">
        <Skills />
        <Experiences />
      </div>
    </div>
  );
};

export default SkillsAndExperiences;
