import React, { useState, useEffect } from "react";
import Image from "next/image";
import sidebarNavigation from "./sidebarNavigation";

export default function Sidebar() {
  const [activeMenu, setActiveMenu] = useState("question-1");

  const handleMenu = (menu: any) => {
    setActiveMenu(menu.id);
  };

  return (
    <div className="bg-white rounded-r-2xl drop-shadow-2xl h-screen w-[240px]">
      <div className="py-4 pl-8 ml-4 pr-0 mr-0">
        <Image
          src="/assets/logo/logo.svg"
          alt="moduit logo"
          width="100%"
          height="100%"
        />
        {/* load content sidebar */}
        <div>
          {sidebarNavigation &&
            sidebarNavigation.map((item, idx) => (
              <div
                onClick={() => handleMenu(item)}
                key={idx}
                className={
                  "cursor-pointer h-8 flex items-center my-2 " +
                  (activeMenu == item.id && " border-[#034EA1] border-r-4")
                }
              >
                <Image
                  src={item.icons}
                  alt={item.id}
                  width="24px"
                  height="24px"
                />
                <span
                  className={
                    "text-sm font-semibold pl-4 " +
                    (activeMenu == item.id
                      ? " text=[#424242]"
                      : " text-[#888888]")
                  }
                >
                  {item.name}
                </span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
