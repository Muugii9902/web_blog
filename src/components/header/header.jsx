import React, { useContext } from "react";
import Menu from "./menu";
import Link from "next/link";
import { SearchContext } from "@/provider/sreach-provider";

const Header = () => {
  const { setSearchValue } = useContext(SearchContext);
  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };
  return (
    <section className="container m-auto h-[100px] flex justify-between">
      <div className="container  h-[36px] last:flex justify-between m-10">
        <img className="w[158px] h-[36px]" src="/images/logo.png" alt="" />
        <ul className="flex gap-10">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contactus">Contact</Link>
          </li>
        </ul>
        <input
          className="border border-stone-400 rounded-md"
          type="Search"
          placeholder="Search"
          onChange={handleChange}
        ></input>
      </div>
    </section>
  );
};

export default Header;
