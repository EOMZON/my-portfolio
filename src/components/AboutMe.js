import { Section } from './Section';
export const AboutMe = () => {
  const aboutMeText =
    " As a designer with 7 years of invaluable experience, I'm on an exciting journey to blend creativity with technology to craft memorable user experiences.";
  const aboutMeSkillText =
    "With a big heart and strong social skills, I'm not just here to design products; I'm here to connect with people. I'm genuinely excited about the impact design can have on users and their lives. I'm passionate about making technology more human-centered, accessible, and delightful.";
  return (
    <Section
      title={'About'}
      content={
        <>
          <p className="text-2xl mt-8">{aboutMeText}</p>
          <p className="text-1xl mt-8">{aboutMeSkillText}</p>
        </>
      }
    />
  );
};
