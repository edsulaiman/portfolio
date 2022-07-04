import { useEffect, useState } from "react";
import Title from "../../components/Title";
import Profile from "../../components/Profile";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

type ProjectItemProp = {
  image: string;
  index?: number;
  currentIndex?: number;
  onClick?: () => void;
};

const ProjectImage = (props: ProjectItemProp) => {
  return (
    <div className="rounded-lg flex justify-center bg-gray aspect-video overflow-hidden">
      <img className="max-h-full" src={props.image} />
    </div>
  );
};

const ProjectImageThumbnail = (props: ProjectItemProp) => {
  return (
    <img
      src={props.image}
      className={
        (props.index == props.currentIndex ? "border-primary border-4 " : "border-gray border-2 ") +
        "border rounded-lg flex justify-center bg-gray aspect-video overflow-hidden object-cover cursor-pointer col-span-4 md:col-span-2"
      }
      onClick={props.onClick}
    />
  );
};

const ProjectImageCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/1.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/2.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/3.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/4.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/5.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/6.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/7.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/8.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/9.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/10.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/11.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/12.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/13.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/14.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/15.jpg",
    process.env.PUBLIC_URL + "/assets/images/hillsong_church/16.jpg",
  ];

  const changeIndex = (index: number) => setCurrentIndex(() => index);

  return (
    <div className="flex flex-col gap-4">
      <ProjectImage image={images[currentIndex]} />
      <div className="grid grid-cols-12 gap-4">
        {images.map((e, index) => (
          <ProjectImageThumbnail index={index} currentIndex={currentIndex} image={e} onClick={() => changeIndex(index)} />
        ))}
      </div>
    </div>
  );
};

const ProjectDetailPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  return (
    <>
      <div className="flex flex-col gap-16 max-w-screen-lg m-auto p-8">
        <div className="flex flex-col gap-8">
          <div className="flex justify-between items-center">
            <Title value="Lorem ipsum dolor sit amet" />
            <Link to="/">
              <FontAwesomeIcon icon={faTimes} size="2x" />
            </Link>
          </div>
          <ProjectImageCarousel />
        </div>
        <div className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae egestas arcu. Donec eleifend gravida lectus id congue. Donec a dapibus justo. Nam
          interdum erat vitae metus pretium euismod. Nunc congue vehicula turpis. Pellentesque hendrerit finibus tempus. Sed feugiat, ligula eget tincidunt
          sollicitudin, odio dui volutpat ex, quis aliquam ex nisi sed arcu. Vivamus nec fermentum urna, ut sagittis est. Praesent imperdiet risus in dapibus
          bibendum. Integer est urna, bibendum a massa a, finibus dignissim eros. Integer augue ligula, luctus eget sagittis a, maximus non quam. Cras euismod
          orci eget eros tincidunt, in finibus dolor dapibus. Etiam aliquam eros id ante gravida bibendum vitae quis arcu. Curabitur vehicula pellentesque dui,
          quis fringilla ante sodales nec.
        </div>
        <Profile />
      </div>
    </>
  );
};

export default ProjectDetailPage;
