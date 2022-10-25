import React, { useEffect, useState } from "react";

function Home() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = [
    "FullStack Developer",
    "Java programmer",
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
      className="h-screen w-screen flex justify-center  items-center z-0 text-black "
    >
      <div>
        <div className="text-center space-y-3">
          <h1>Let's build something new</h1>
          <div className="text-2xl md:text-5xl">
            Hello! I am Leander D'silva
          </div>
          <div className="text-xl md:text-3xl ">
            I am a <span className="text-blue-500">{text}</span>
          </div>
          <div className="text-xl  text-gray-600">
            <p>
              I focussed on building responsive websites with end to end
              protection
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
