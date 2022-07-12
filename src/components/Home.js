import React from "react";
import image from "../bg.jpeg";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">
      <img
        src={image}
        alt="Background"
        className="filter blur absolute object-cover h-screen w-screen"
      />
      <section className="absolute flex flex-col justify-center  pt-20 lg:pt-64 px-8 w-screen h-screen">
        <h1 className="text-5xl font-bold text-white leading-none lg:leading-snug home-name">
          Hello. Welcome to my website.
        </h1>
        <a
          href="https://drive.google.com/file/d/1r9PTT8-8uKUzaM8F1zZUbJ7ogsqd-1lT/view?usp=sharing"
          target="blank"
        >
          <button
            style={{
              color: "black",
              backgroundColor: "gray",
              width: "200px",
              height: "50px",
              borderRadius: "50px",
              marginTop: "20px",
            }}
          >
            Link to Resume
          </button>
        </a>
      </section>
    </main>
  );
}
