import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-black text-white w-screen ">
      <div className="container mx-auto flex justify-between w-screen">
        <nav className="flex w-screen">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-8 px-3 mr-4 text-gray-100 hover:text-gray-500 text-4xl font-bold tracking-widest"
          >
            Pritish
          </NavLink>
          <NavLink
            to="/post"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-200"
            activeClassName="text-white bg-gray-500"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-200"
            activeClassName="text-white bg-gray-500"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-gray-100 hover:text-gray-200"
            activeClassName="text-white bg-gray-500"
          >
            About Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/pritishchatterjee48/"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://github.com/pritish-chatterjee"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/lessthan_30"
            className="mr-4 "
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <a
            href="https://drive.google.com/file/d/1r9PTT8-8uKUzaM8F1zZUbJ7ogsqd-1lT/view?usp=sharing"
            target="blank"
          >
            <img
              src="resume.svg"
              alt="resume-link"
              style={{
                height: 30,
                width: 30,
                marginTop: "3px",
                filter: "invert(100%)",
              }}
            ></img>
          </a>
        </div>
      </div>
    </header>
  );
}
