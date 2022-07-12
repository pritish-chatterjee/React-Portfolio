import React from "react";
import image from "../bg.jpeg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="Background"
        className="filter blur absolute object-cover w-full h-full"
      />
      <section className="relative flex flex-col justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl font-bold text-white leading-none lg:leading-snug home-name">
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
            }}
          >
            Link to Resume
          </button>
        </a>
      </section>
    </main>
  );
}
