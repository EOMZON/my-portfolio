import { Section } from './Section';
import Image from 'next/image';

const ImgComponent = () => {
  return (
    <div>
      <img src="/images/pjHomeCover.svg" alt="Your UI" className="mt-4" />
    </div>
  );
};

const ImgComponentPNG = () => {
  return (
    <div>
      <img src="/images/pjHomeCover.png" alt="Your UI" className="mt-4" />
    </div>
  );
};

const ImageComponent = () => {
  return (
    <div>
      <Image
        src="/images/pjHomeCover.svg"
        alt="Next.js Logo"
        width={1198}
        height={656}
        priority
        className="mt-4"
      />
    </div>
  );
};

const HomeCovers = () => {
  return (
    <div>
      <ImgComponent />
      <ImageComponent />
      <ImgComponentPNG />
    </div>
  );
};

export const MyWorks = () => {
  return <Section title={'My works'} content={<HomeCovers />} />;
};
