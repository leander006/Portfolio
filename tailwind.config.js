/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lora: ["Lora"],
        Varela: ["Varela"],
        VarelaRound: ["Varela Round"],
        WorkSans: ["Work Sans"],
        Nunito: ["Nunito"],
        Oswald: ["Oswald"],
        Nunito: ["Nunito"],
        SyneMono: ["Syne Mono"],
        Blaka: ["Blaka"],
      },
      animation: {
        "spin-slow": "spin 5s ease-in-out infinite ",
      },
    },
  },
  plugins: [],
};
