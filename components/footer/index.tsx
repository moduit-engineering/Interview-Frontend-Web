import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="text-center p-4 text-[#888888]">
        <small>
          Copyright &copy; {new Date().getFullYear()}{" "}
          <span className="text-[#4986F2]">PT Moduit Digital Indonesia.</span>{" "}
          All rights reserved
        </small>
      </div>
    </div>
  );
}
