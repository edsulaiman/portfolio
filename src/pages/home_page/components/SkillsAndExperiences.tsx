import { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import { useAppContext } from "../../../AppContext";
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
  const appProvider = useAppContext();
  const configs = appProvider!.configs;
  const skills = appProvider!.skills;

  const skillChildren: ReactNode[] = [];
  skills?.map((e) => {
    skillChildren.push(<SkillBar name={e.name} value={e.value} />);
  });

  return (
    <div className="flex flex-col gap-4">
      <Subtitle value="Skills" />
      <div className="flex flex-col gap-4">
        <ReactMarkdown>{configs?.skills ?? ""}</ReactMarkdown>
      </div>
      {skillChildren}
    </div>
  );
};

const Experiences = () => {
  const appProvider = useAppContext();
  const configs = appProvider!.configs;
  const experiences = appProvider!.experiences;

  const experienceChildren: ReactNode[] = [];
  experiences?.map((e) => {
    experienceChildren.push(<ExperienceCard position={e.position} company={e.company} startEnd={e.startEnd} />);
  });

  return (
    <div className="flex flex-col gap-4">
      <Subtitle value="Experiences" />
      <div className="flex flex-col gap-4">
        <ReactMarkdown>{configs?.experiences ?? ""}</ReactMarkdown>
      </div>
      <div className="grid grid-cols-12 gap-4">{experienceChildren}</div>
    </div>
  );
};

const SkillsAndExperiencesTitle = () => {
  const appProvider = useAppContext();
  const configs = appProvider!.configs;

  return (
    <div className="flex flex-col gap-16">
      <Title value="Skills & Experiences" />
      <img src={process.env.PUBLIC_URL + "/assets/illustrations/DrawKit Vector Illustration Team Work (11).svg"} />
      <div className="flex flex-col gap-4 md:text-lg">
        <ReactMarkdown>{configs?.skillsAndExperiences ?? ""}</ReactMarkdown>
      </div>
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
