import React from "react";

function About() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-800 to-gray-900">
      <h1 className="text-5xl font-WorkSans font-bold text-white text-center pb-16">
        About
      </h1>
      <div className="flex flex-col justify-evenly md:flex-row ">
        <div className="text-white text-center mx-2 lg:mx-24">
          <h1 className="text-4xl my-4">I am LEANDER D'SILVA</h1>
          <p className="text-3xl text-gray-500">
            I am a full stack web Developer .
          </p>
          <p className="text-3xl text-gray-500">
            I am currently perceiving my BTech from Dwarkadas J. Sanghvi College
            of Engineering, Mumbai in IT.
          </p>
          <p className="text-3xl text-gray-500">
            I like exploring new technologies and challenging myself.
          </p>
          <p className="text-3xl text-gray-500">
            Currently i am exploring Blockchain technology
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
