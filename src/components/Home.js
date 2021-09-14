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
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl font-bold text-white leading-none lg:leading-snug home-name">
          Hello. Welcome to my website.
        </h1>
      </section>
    </main>
  );
}
