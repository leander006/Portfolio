import React from "react";

function About() {
  return (
    <div
      name="about"
      className="w-screen h-screen justify-center items-center flex text-black "
    >
      <div className="flex flex-col">
        <h1 className="text-5xl mx-6 lg:mx-24 font-WorkSans text-blue-500 font-bold  pt-14">
          ABOUT
        </h1>
        <div className="flex flex-col h-full items-center md:flex-row md:mx-12">
          <div className="mx-6 lg:mx-24">
            <h1 className="text-4xl my-4">I am LEANDER D'SILVA</h1>
            <p className="text-gray-600">
              I am currently perceiving my BTech from Dwarkadas J. Sanghvi
              College of Engineering, Mumbai in IT.
            </p>
            <p className="text-gray-600">
              I like exploring new technologies and challenging myself.
            </p>
            <p className="text-gray-600"></p>
            <p className="text-gray-600">Currently i am exploring Blockchain</p>
          </div>
          <div>
            <img
              className="w-32 md:w-52 mt-8 md:mt-0 border-2 border-black  flex items-center"
              src="/Images/profile.png"
              alt="leander"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
