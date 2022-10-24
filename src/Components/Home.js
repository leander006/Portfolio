import React, { useEffect, useState } from "react";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "FullStack Developer",
    "Java programming",
    "Blockchain enthusiast",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <div
      name="home"
      className="w-full pt-28 pb-2 bg-gradient-to-b from-black via-slate-700 to-gray-700"
    >
      <div className="flex flex-col md:flex-row h-full justify-around items-center ">
        <div className="md:ml-24 text-center">
          <span className="md:text-6xl text-3xl mx-2 text-white ">
            Welcome to my Portfolio
          </span>
          <h1 className="text-xl text-gray-400 mt-2 w-full">
            {`Hi! I am Leander `}
            <span>{text}</span>
          </h1>
        </div>
        <img
          className="w-72 md:mr-12 mt-12 animate-bounce"
          src="Images/header.svg"
          alt="leander"
        />
      </div>
    </div>
  );
}

export default Home;
