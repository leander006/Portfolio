import React from "react";

function Contact() {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-l from-[#6412ad] to-[#27055e]"
    >
      <div className="text-white py-8 text-center">
        <p className="text-4xl font-Lora">Contact Me</p>
        <p className="text-2xl py-3 text-gray-200">
          Please fill the following form for further details
        </p>
      </div>
      <div className="flex justify-center items-center mx-3">
        <form
          action="https://getform.io/f/188d9c50-2ffc-42a8-bbea-0ed745b65090"
          method="POST"
          className="flex flex-col w-full md:w-1/2"
        >
          <input
            className="p-2 my-2 bg-transparent text-white focus:outline-none rounded-md border-2"
            type="text"
            name="name"
            placeholder="Leander D'silva"
            required
          />
          <input
            className="p-2 my-2  bg-transparent text-white focus:outline-none rounded-md border-2"
            type="email"
            name="email"
            placeholder="abc@gmail.com"
            required
          />
          <textarea
            className="p-2 my-2  bg-transparent text-white focus:outline-none rounded-md border-2"
            rows="10"
            name="message"
            type="text"
            placeholder="Enter Message"
            required
          />
          <button className="text-white bg-gradient-to-b from-purple-700 to-purple-900 w-1/4 p-2 rounded-md ">
            Let's talk
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
