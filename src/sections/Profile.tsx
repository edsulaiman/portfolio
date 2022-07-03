import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <div className="rounded-full w-32 h-32 bg-secondary mb-8"></div>
      <div className="text-2xl font-bold text-primary text-center">Edwin Sulaiman</div>
      <div className="text-center">Fullstack & Mobile Developer</div>
    </div>
  );
};

const ProfileDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl text-primary font-bold">About Me</div>
      <div className="mb-8 text-onBackground">
        I am Steven Miller, and I am looking for a job in Customer Services. I have 10 years of experience in related job positions. I started working as a
        Customer Care Agent in a call center gradually moving to a Customer Experience Analyst. I am a team player. I am outgoing, dedicated, and open-minded. I
        get across to people and adjust to changes with ease. I believe that a person should work on developing their professional skills and learning new
        things all the time. Currently, I am looking for new career opportunities my current job position cannot provide. I have enough experience to occupy a
        managing position and I will be glad to work on increasing the customer loyalty rate of your company.
      </div>
    </div>
  );
};

const ProfileSocial = () => {
  return (
    <div className="flex flex-col md:flex-row gap-8">
      <div>
        <FontAwesomeIcon icon={faInstagram} className="mr-2" size="lg" />
        ed.sulaiman
      </div>
      <div>
        <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg" />
        edsulaiman
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg" />
        edwinsulaiman20@gmail.com
      </div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 rounded-lg bg-gray p-8">
      <div className="flex-[1]">
        <ProfileAvatar />
      </div>
      <div className="flex-[3]">
        <ProfileDetail />
        <ProfileSocial />
      </div>
    </div>
  );
};

export default Profile;
