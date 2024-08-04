import React from "react";
import Menu from "./menu";

const Header = () => {
  return (
    <section className="container m-auto h-[100px] flex justify-between">
      <div className="container  h-[36px] last:flex justify-between m-10">
        <img className="w[158px] h-[36px]" src="/images/logo.png" alt="" />
        <Menu />
        <input
          className="border border-stone-400 rounded-md"
          type="Search"
          placeholder="Search"
        ></input>
      </div>
    </section>
  );
};

export default Header;
