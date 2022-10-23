import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Skills() {
  const skill = [
    {
      id: 1,
      name: "HTML",
      src: "Images/html.png",
      p: "70",
    },
    {
      id: 2,
      name: "css",
      src: "Images/css.png",
      p: "70",
    },
    {
      id: 3,
      name: "Javascript",
      src: "Images/Javasript.png",
      p: "60",
    },
    {
      id: 4,
      name: "react",
      src: "Images/react.png",
      p: "40",
    },
    {
      id: 5,
      name: "Next",
      src: "Images/next.png",
      p: "40",
    },
    {
      id: 6,
      name: "Tailwind",
      src: "Images/tailwind.png",
      p: "60",
    },
    {
      id: 7,
      name: "mongo",
      src: "Images/mongo.png",
      p: "50",
    },
    {
      id: 8,
      name: "sql",
      src: "Images/sql.png",
      p: "30",
    },
    {
      id: 9,
      name: "hardhat",
      src: "Images/hardhat.png",
      p: "10",
    },
    {
      id: 10,
      name: "bootstarp",
      src: "Images/bootstrap.png",
      p: "80",
    },
    {
      id: 11,
      name: "Node",
      src: "Images/node.png",
      p: "40",
    },
  ];
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="w-full h-full bg-gradient-to-b from-gray-700 to-gray-800 md:px-12">
      <h1 className="text-5xl font-WorkSans font-bold text-white text-center pb-16">
        Skills
      </h1>
      <Carousel responsive={responsive} infinite={true}>
        {skill.map(({ id, name, src, p }) => (
          <div
            key={id}
            className="md:flex mb-16 flex-col font-Nunito justify-center text-center items-center  text-gray-300"
          >
            <h1 className="text-xl uppercase">{name}</h1>
            <div className="flex justify-center">
              <img className="w-[50%] md:w-1/3" alt="i" src={src} />
            </div>
            <h2>{p} % </h2>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

export default Skills;
