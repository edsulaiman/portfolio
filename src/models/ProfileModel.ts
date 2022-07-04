import { SocialModel } from "./SocialModel";

export type ProfileModel = {
  name: string;
  position: string;
  image: string;
  description: string;
  social: SocialModel[];
};
