import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-full h-full bg-gradient-to-r from-[#230d45] via-[#3e0a92] to-[#12032a] "
    >
      <h1 className="text-5xl font-WorkSans  font-bold text-white text-center py-10">
        About Me
      </h1>
      <div className="flex flex-col justify-evenly items-center md:flex-row ">
        <div className="text-white text-center mx-2 lg:mx-24">
          <h1 className="text-4xl my-4">I am LEANDER D'SILVA</h1>
          <p className="text-3xl text-gray-300">
            I am a full stack web Developer .
          </p>
          <p className="text-3xl text-gray-300">
            I am currently perceiving my BTech from Dwarkadas J. Sanghvi College
            of Engineering, Mumbai in IT.
          </p>
          <p className="text-3xl text-gray-300">
            I like exploring new technologies and challenging myself.
          </p>
          <p className="text-3xl text-gray-300">
            Currently i am exploring Blockchain
          </p>
        </div>
        <div>
          <img
            className="w-2/3 md:w-full mx-auto md:pr-12 mt-4 md:mt-0 rounded-md "
            src="/Images/profile.png"
            alt="leander"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
