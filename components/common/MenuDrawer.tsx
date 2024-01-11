"use client";
import React from "react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { drawerState } from "@/recoil/atom";

import { GrClose } from "react-icons/gr";

const menuItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Product",
    href: "/product",
  },
  {
    title: "Contact",
    href: "/contact",
  },
  {
    title: "FAQ",
    href: "/faq",
  },
  {
    title: "AboutUs",
    href: "/about-us",
  },
  {
    title: "Blog",
    href: "/blog/page/1",
  },
  {
    title: "News",
    href: "/news/page/1",
  },
];

const MenuDrawer = () => {
  const [showDrawer, setShowDrawer] = useRecoilState(drawerState);

  function handleShowDrawer() {
    setShowDrawer(!showDrawer);
  }
  return (
    <div
      id="drawer"
      className={`fixed top-0 left-0 z-40 w-screen h-full flex transition-all duration-300 ease-in ${
        showDrawer ? "translate-x-full" : "translate-x-0"
      } `}
    >
      <div
        className="w-2/6 h-full backdrop-blur-sm"
        onClick={handleShowDrawer}
      ></div>
      <div className="w-4/6 h-full bg-white p-4 shadow-md">
        <div className="flex justify-between items-center">
          <p className="text-4xl font-bold tracking-wider">Menu</p>
          <button onClick={handleShowDrawer}>
            <GrClose />
          </button>
        </div>
        <div>
          <ul className="my-12">
            {menuItems.map((menu, index) => {
              return (
                <li key={index} className="my-3 mb-5">
                  <Link
                    className="block transition-all duration-300 hover:-translate-y-1 w-fit"
                    href={menu.href}
                    onClick={handleShowDrawer}
                  >
                    <span className="py-2 border-b-2 transition-colors duration-300 hover:border-lime-700 text-black hover:text-lime-700  border-gray-300">
                      {menu.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuDrawer;
