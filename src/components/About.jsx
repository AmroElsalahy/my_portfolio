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
        <div className="mt-20">
           <h1 className="text-4xl font-bold mb-4">Hello!</h1>
           <p className="mb-4">I am a third-year Computer Science student passionate about coding and debugging. My academic journey has been fueled by a desire to create innovative solutions that can transform ideas into tangible real-world projects.</p>
           <p className="mb-4">From the moment I stepped into the field of computer science, I have always been fascinated by the power of code. The ability to write a piece of code and see it come to life is incredibly satisfying.</p>
           <p className="mb-4">I enjoy every aspect of the process from designing algorithms to debugging complex issues. The thrill of seeing my code run perfectly, after countless hours of effort and troubleshooting, is truly rewarding.</p>
           <p className="mb-4">Currently, I am focused on three key areas of growth:</p>
           <ul className="list-disc pl-5 mb-4">
               <li>Kotlin for Android Development: I am keen to enhance my skills in Kotlin, specifically in developing Android applications.</li>
               <li>C Language: Engaging in a comprehensive study of the C programming language to broaden my understanding of system-level operations.</li>
               <li>Internet Security: I am expanding my knowledge in internet security through getting a Certificate in Communication Technologies and Cyber Security. While the specific details of this area are still being defined, I am eager to understand how to build secure systems and applications.</li>
           </ul>
       </div>
      </div>
    </div>
  );
};

export default About;
