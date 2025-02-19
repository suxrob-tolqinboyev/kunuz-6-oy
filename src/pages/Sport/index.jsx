import React, { useContext } from "react";
import Navbar from "../navbar";
import { NameContext } from "../../context";

const Sport = () => {
  const { isDark, setIsDark } = useContext(NameContext);
  return (
    <div
      className={`${isDark ? "bg-black " : "bg-white"} ${
        isDark ? "text-white" : "text-black"
      }`}
    >
      <div className="w-[1000px] mx-auto">
        <h1 className="text-center  font-[700] text-[25px] py-[20px]">
          Sport Yangiliklari
        </h1>
        <div className="pb-[50px]">
          <img src="./src/assets/image 1.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Sport;
