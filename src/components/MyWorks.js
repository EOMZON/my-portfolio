import { Section } from './Section';

const ImgComponent = () => {
  return (
    <div>
      <img src="/PJ-HOMEPAGE.svg" alt="Your UI" className="mt-4" />
    </div>
  );
};

const ImgComponentPNG = () => {
  return (
    <div>
      <img src="/PJ-HOMEPAG.png" alt="Your UI" className="mt-4" />
    </div>
  );
};

const HomeCovers = () => {
  return (
    <div>
      <ImgComponent />
      <ImgComponent />
      <ImgComponentPNG />
    </div>
  );
};

export const MyWorks = () => {
  return <Section title={'My works'} content={<HomeCovers />} />;
};
