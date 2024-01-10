import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="flex items-center justify-center   mt-20 ml-12">
        <h1 className="text-5xl ">
          👋 Hi there,I'm Zon, Product Designer with a touch of magic 🔮 on a
          mission to help you level up your value 🚀
        </h1>
      </div>
      <div className="flex mt-24 ml-12">
        <h1 className="text-4xl font-bold">👇 My works</h1>
      </div>
      <div className=" mt-24 ml-12">
        <h1 className="text-4xl font-bold ">👇 About</h1>
        <p className="text-2xl mt-8">
          As a designer with 7 years of invaluable experience, I'm on an
          exciting journey to blend creativity with technology to craft
          memorable user experiences.
        </p>
        <p className="text-1xl mt-8">
          With a big heart and strong social skills, I'm not just here to design
          products; I'm here to connect with people. I'm genuinely excited about
          the impact design can have on users and their lives. I'm passionate
          about making technology more human-centered, accessible, and
          delightful.
        </p>
      </div>
      <div className="flex mt-24 ml-12">
        <h1 className="text-4xl font-bold">👇 Testimonials</h1>
      </div>
      <div className="flex mt-24 ml-12">
        <h1 className="text-4xl font-bold">👇 Resume</h1>
      </div>
      <div className="flex flex-col items-center justify-center mt-20 ml-12">
        <h1 className="text-5xl mb-4">❣️</h1>
        <h1 className="text-5xl mb-4">Get in touch</h1>
        <h1 className="text-2xl">zonlily@outlook.com</h1>
      </div>
    </main>
  );
}
