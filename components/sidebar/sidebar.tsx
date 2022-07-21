import React, { useState, useEffect } from "react";
import Image from "next/image";
import sidebarNavigation from "./sidebarNavigation";
import { useRouter } from "next/router";

export default function Sidebar() {
  const router = useRouter();
  const [activeMenu, setActiveMenu] = useState("/");

  useEffect(() => {
    setActiveMenu(router.pathname);
  }, [router.pathname]);

  const handleRouting = (route: string) => {
    router.push(route);
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
                onClick={() => handleRouting(item.url)}
                key={idx}
                className={
                  "cursor-pointer h-8 flex items-center my-2 " +
                  (activeMenu == item.url && " border-[#034EA1] border-r-4")
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
                    (activeMenu == item.url
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
