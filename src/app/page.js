import React from 'react';
import Image from 'next/image';

export default function Home() {
  const Header = () => {
    return (
      <div className="flex items-center justify-center   mt-20 ml-12">
        <h1 className="text-5xl ">{greetings}</h1>
      </div>
    );
  };
  const Section = ({ title, content }) => {
    return (
      <div className="mt-24 ml-12 mr-12">
        <h1 className="text-4xl font-bold">👇 {title}</h1>
        {content && <div>{content}</div>}
      </div>
    );
  };

  const Footer = () => {
    return (
      <div className="flex flex-col items-center justify-center mt-20 ml-12">
        <h1 className="text-5xl mb-4">❣️</h1>
        <h1 className="text-5xl mb-4">Get in touch</h1>
        <h1 className="text-2xl">zonlily@outlook.com</h1>
      </div>
    );
  };

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

  const AboutMe = () => {
    return (
      <>
        <p className="text-2xl mt-8">{aboutMe}</p>
        <p className="text-1xl mt-8">{aboutMeDescription}</p>
      </>
    );
  };
  return (
    <main>
      <Header />
      <Section title={'My works'} content={<HomeCovers />} />

      <Section title={'About'} content={<AboutMe />} />

      <Section title={'Skills'} />
      <Section title={'Testimonials'} />
      <Section title={'Resume'} />

      <Footer />
    </main>
  );
}

const greetings =
  "👋 Hi there,I'm Zon, Product Designer with a touch of magic 🔮 on a mission to help you level up your value 🚀";

const aboutMe =
  " As a designer with 7 years of invaluable experience, I'm on an exciting journey to blend creativity with technology to craft memorable user experiences.";
const aboutMeDescription =
  "With a big heart and strong social skills, I'm not just here to design products; I'm here to connect with people. I'm genuinely excited about the impact design can have on users and their lives. I'm passionate about making technology more human-centered, accessible, and delightful.";
