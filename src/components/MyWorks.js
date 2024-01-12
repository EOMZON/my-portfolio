import { Section } from './Section';
import Image from 'next/image';

const ImgComponent = () => {
  return (
    <div>
      <img src="images/pjHomeCover.svg" alt="Your UI" className="mt-4" />
    </div>
  );
};

const ImgComponentPNG = () => {
  return (
    <div>
      <img src="images/pjHomeCover.png" alt="Your UI" className="mt-4" />
    </div>
  );
};

const ImageComponent = () => {
  return (
    <div>
      <Image
        src="images/pjHomeCover.svg"
        alt="Next.js Logo"
        width={1198}
        height={656}
        priority
        className="mt-4"
      />
    </div>
  );
};

const ImageComponentPNG = () => {
  return (
    <div>
      <Image
        src="images/pjHomeCover.png"
        alt="Next.js Logo"
        width={1198}
        height={656}
        priority
        className="mt-4"
      />
    </div>
  );
};

const MidTitle = ({ content }) => {
  return (
    <div className="mt-8 ">
      <h1 className="text-2xl  text-gray-400">{content}</h1>
    </div>
  );
};

const HomeCovers = () => {
  return (
    <div>
      <MidTitle content={'SVG'} />
      <ImgComponent />
      <ImageComponent />

      <MidTitle content={'PNG'} />
      <ImgComponentPNG />
      <ImageComponentPNG />
    </div>
  );
};

export const MyWorks = () => {
  return <Section title={'My works'} content={<HomeCovers />} />;
};
