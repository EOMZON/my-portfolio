import { Section } from './Section';
import Image from 'next/image';
const ImageComponent = () => {
  return (
    <div>
      <Image
        src="/pjHomeCover.svg"
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
      <ImageComponent />
      <ImageComponent />
      <ImageComponent />
    </div>
  );
};

export const MyWorks = () => {
  return <Section title={'My works'} content={<HomeCovers />} />;
};
