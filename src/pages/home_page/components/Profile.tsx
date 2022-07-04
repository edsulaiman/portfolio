import { useContext } from "react";
import { AppContext } from "../../../AppController";
import SocialMedia from "../../../components/SocialMedia";

const ProfileAvatar = () => {
  const appController = useContext(AppContext);
  const profile = appController?.profile;

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img className="rounded-full w-32 h-32 bg-secondary mb-8" src={profile?.image} />
      <div className="text-2xl font-bold text-primary text-center">{profile?.name}</div>
      <div className="text-center">{profile?.position}</div>
    </div>
  );
};

const ProfileDetail = () => {
  const appController = useContext(AppContext);
  const profile = appController?.profile;

  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl text-primary font-bold hidden lg:block">About Me</div>
      <div className="text-onBackground">{profile?.description}</div>
    </div>
  );
};

const Profile = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 rounded-lg bg-gray p-8">
      <div className="flex-[1]">
        <ProfileAvatar />
      </div>
      <div className="flex-[3] flex flex-col justify-center gap-8">
        <ProfileDetail />
        <SocialMedia />
      </div>
    </div>
  );
};

export default Profile;
