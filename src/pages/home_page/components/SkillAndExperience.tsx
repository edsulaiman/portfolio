import Subtitle from "../../../components/Subtitle";
import Title from "../../../components/Title";

const SkillBar = () => {
  return (
    <div>
      <div>HTML</div>
      <div className="relative rounded-full w-full h-4 bg-secondary">
        <div className="absolute rounded-full w-3/4 left-0 inset-y-0 h-full bg-primary"></div>
      </div>
    </div>
  );
};

const ExperienceCard = () => {
  return (
    <div className="rounded-lg bg-primary hover:bg-secondary text-onPrimary hover:onSecondary p-8 ease-in duration-150 col-span-12 md:col-span-6 lg:col-span-4">
      <div>Mobile Developer</div>
      <div>PT. Lingkar Kreasi</div>
      <div>Aug 2021 - Now</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="flex flex-col gap-4">
      <Subtitle value="Skills" />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ante nec nulla dictum, quis tincidunt tortor efficitur. Fusce lobortis, enim id
        euismod semper, ligula lorem lobortis libero, et pretium justo arcu at leo.
      </div>
      <SkillBar />
      <SkillBar />
      <SkillBar />
    </div>
  );
};

const Experience = () => {
  return (
    <div className="flex flex-col gap-4">
      <Subtitle value="Experiences" />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ante nec nulla dictum, quis tincidunt tortor efficitur. Fusce lobortis, enim id
        euismod semper, ligula lorem lobortis libero, et pretium justo arcu at leo.
      </div>
      <div className="grid grid-cols-12 gap-4">
        <ExperienceCard />
        <ExperienceCard />
        <ExperienceCard />
      </div>
    </div>
  );
};

const SkillAndExperienceTitle = () => {
  return (
    <div className="flex flex-col gap-16">
      <Title value="Skills & Experiences" />
      <img src="https://assets-global.website-files.com/5f9072399b2640f14d6a2bf4/618c0d8ea6fb53d41950d8d1_Spot-Policy%26Safety.svg" />
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam congue ante nec nulla dictum, quis tincidunt tortor efficitur. Fusce lobortis, enim id
        euismod semper, ligula lorem lobortis libero, et pretium justo arcu at leo.
      </div>
    </div>
  );
};

const SkillAndExperience = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8 md:gap-16 rounded-lg bg-gray p-8">
      <div className="flex-[1]">
        <SkillAndExperienceTitle />
      </div>
      <div className="flex-[3] flex flex-col gap-8 md:gap-16">
        <Skills />
        <Experience />
      </div>
    </div>
  );
};

export default SkillAndExperience;
