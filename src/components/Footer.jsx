import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiOutlineArrowUp,
  AiFillWechat
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={"https://avatars.githubusercontent.com/u/83070875?s=400&u=b7c39128edbcc9e02dbe9d53648b8662c3c99ba0&v=4"}
          alt="Mustafa"
        />

        <h2>Mustafa Gautampura Wala</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="/" target={"blank"}>
            <AiFillTwitterCircle />
          </a>
          <a href="https://instagram.com/mustafaabdeali" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/mustafagaut" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://wa.me/9340578759" target={"blank"}>
            <AiFillWechat />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;