import { faInstagram, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";
import { useAppContext } from "../AppContext";

const SocialMedia = () => {
  const appProvider = useAppContext();
  const social = appProvider!.profile?.social;

  if (social == null) {
    return <div></div>;
  }

  const children: ReactNode[] = [];
  social!.forEach((e) => {
    switch (e.name) {
      case "instagram":
        children.push(
          <div>
            <FontAwesomeIcon icon={faInstagram} className="mr-2" size="lg" />
            {e.value}
          </div>
        );
        break;

      case "github":
        children.push(
          <div>
            <FontAwesomeIcon icon={faGithub} className="mr-2" size="lg" />
            {e.value}
          </div>
        );
        break;

      case "email":
        children.push(
          <div>
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" size="lg" />
            {e.value}
          </div>
        );
        break;
    }
  });

  return <div className="flex flex-col md:flex-row gap-8">{children}</div>;
};

export default SocialMedia;
