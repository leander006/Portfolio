import React from "react";

function Skills() {
  const skill = [
    {
      id: 1,
      name: "HTML",
      src: "Images/html.png",
    },
    {
      id: 2,
      name: "css",
      src: "Images/css.png",
    },
    {
      id: 3,
      name: "Javascript",
      src: "Images/Javasript.png",
    },
    {
      id: 4,
      name: "react",
      src: "Images/react.png",
    },
    {
      id: 5,
      name: "Next",
      src: "Images/next.png",
    },
    {
      id: 6,
      name: "Tailwind",
      src: "Images/tailwind.png",
    },
    {
      id: 7,
      name: "mongo",
      src: "Images/mongo.png",
    },
    {
      id: 8,
      name: "sql",
      src: "Images/sql.png",
    },
    {
      id: 9,
      name: "hardhat",
      src: "Images/hardhat.png",
    },
    {
      id: 10,
      name: "bootstarp",
      src: "Images/bootstrap.png",
    },
    {
      id: 11,
      name: "Node",
      src: "Images/node.png",
    },
  ];

  return (
    <div name="skills" className="w-screen justify-center  flex flex-col pt-12 h-screen ">
      <h1 className="text-5xl mx-6 pb-3 lg:mx-24 font-WorkSans font-bold text-blue-500 ">
        SKILLS
      </h1>
      <p className="text-gray-600 text-xl mx-6 pb-3 lg:mx-24">
        Tools i work with on daily basis
      </p>
      <div className="grid rounded-md grid-cols-2 mx-6 lg:mx-24 md:grid-cols-3 gap-8 lg:grid-cols-4 items-center justify-center">
        {skill.map(({ id, name, src }) => (
          <div
            key={id}
            className="flex justify-center p-3 rounded-md cursor-pointer hover:scale-105 duration-150 items-center shadow-lg bg-gray-200 h-full w-full "
          >
            <div className="flex justify-center items-center">
              <img className="w-[20%]" alt="i" src={src} />
              <h1 className="md:text-xl uppercase">{name}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
