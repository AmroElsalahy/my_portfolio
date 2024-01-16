import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          
        </p>

        <br />

        <p className="text-xl">
        Hello! I am a third-year Computer Science student passionate about coding and debugging. My academic journey 
        has been fueled by a desire to create innovative solutions that can transform ideas into tangible real-world projects.
        From the moment I stepped into the field of computer science, I have always been fascinated by the power of code. 
        The ability to write a piece of code and see it come to life is incredibly satisfying. I enjoy every aspect of the process
        from designing algorithms to debugging complex issues. The thrill of seeing my code run perfectly, after countless hours of effort and troubleshooting, is truly rewarding.
        </p>
      </div>
    </div>
  );
};

export default About;
