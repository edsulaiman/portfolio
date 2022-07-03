import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProfileAvatar = () => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <img className="rounded-full w-32 h-32 bg-secondary mb-8" src="https://assets.pikiran-rakyat.com/crop/0x0:0x0/x/photo/2022/01/14/4053358685.jpeg" />
      <div className="text-2xl font-bold text-primary text-center">Edwin Sulaiman</div>
      <div className="text-center">Fullstack & Mobile Developer</div>
    </div>
  );
};

const ProfileDetail = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="text-2xl text-primary font-bold hidden lg:block">About Me</div>
      <div className="text-onBackground">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas arcu. Donec eleifend gravida lectus id congue. Donec a dapibus justo. Nam
        interdum erat vitae metus pretium euismod. Nunc congue vehicula turpis. Pellentesque hendrerit finibus tempus. Sed feugiat, ligula eget tincidunt
        sollicitudin, odio dui volutpat ex, quis aliquam ex nisi sed arcu. Vivamus nec fermentum urna, ut sagittis est. Praesent imperdiet risus in dapibus
        bibendum. Integer est urna, bibendum a massa a, finibus dignissim eros. Integer augue ligula, luctus eget sagittis a, maximus non quam. Cras euismod
        orci eget eros tincidunt, in finibus dolor dapibus. Etiam aliquam eros id ante gravida bibendum vitae quis arcu. Curabitur vehicula pellentesque dui,
        quis fringilla ante sodales nec.
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
      <div className="flex-[3] flex flex-col justify-center gap-8">
        <ProfileDetail />
        <ProfileSocial />
      </div>
    </div>
  );
};

export default Profile;
