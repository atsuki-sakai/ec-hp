"use client";

import React from "react";
import { useRecoilState } from "recoil";
import { drawerState } from "@/recoil/atom";
import { TbMenuDeep } from "react-icons/tb";

const Header = () => {
  const [showDrawer, setShowDrawer] = useRecoilState<boolean>(drawerState);
  function handleShowMenu() {
    setShowDrawer(!showDrawer);
  }

  return (
    <header className="sticky top-0 left-0 right-0 z-20 flex justify-between items-center px-4 py-2 bg-slate-800 text-white">
      <h2>EC × HP</h2>
      <button onClick={handleShowMenu}>
        <TbMenuDeep className="h-[24px] w-[24px]" />
      </button>
    </header>
  );
};

export default Header;
