import { useAppContext } from "../../../AppContext";

const Header = () => {
  const appProvider = useAppContext();
  const profile = appProvider!.profile;

  return (
    <div className="bg-primary w-full h-96 flex flex-col items-center justify-center gap-4">
      <div className="text-onPrimary text-2xl md:text-4xl lg:text-6xl font-bold">Hi, I'm {profile?.name}</div>
      <div className="text-onPrimary text-lg md:text-2xl lg:text-4xl font-bold">{profile?.position}</div>
    </div>
  );
};

export default Header;
