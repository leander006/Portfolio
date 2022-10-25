import React from "react";

function Contact() {
  return (
    <div name="contact" className="w-screen pt-12">
      <div className="text-white  text-center">
        <p className="text-5xl mx-6 pb-3 lg:mx-24 font-WorkSans font-bold text-blue-500 ">
          Contact Me
        </p>
        <p className="text-2xl py-3 text-gray-500">
          Please fill the following form for further details
        </p>
      </div>
      <div className="flex justify-center items-center mx-3">
        <form
          action="https://getform.io/f/188d9c50-2ffc-42a8-bbea-0ed745b65090"
          method="POST"
          className="flex flex-col w-full md:w-1/2 shadow-lg p-2 rounded-lg bg-gray-300"
        >
          <input
            className="p-2 my-2 bg-transparent bg-white text-black focus:outline-none rounded-md border-2"
            type="text"
            name="name"
            placeholder="Leander D'silva"
            required
          />
          <input
            className="p-2 my-2  bg-transparent  bg-white text-black focus:outline-none rounded-md border-2"
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            required
          />
          <textarea
            className="p-2 my-2  bg-transparent  bg-white text-black focus:outline-none rounded-md border-2"
            rows="10"
            name="message"
            type="text"
            placeholder="Enter Message"
            required
          />
          <button className="text-white bg-gradient-to-b from-blue-400 to-blue-600 w-1/4 p-2 rounded-md ">
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
