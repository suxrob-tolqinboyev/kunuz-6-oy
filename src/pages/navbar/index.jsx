import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router";
import { NameContext } from "../../context";
import { IoMoonOutline } from "react-icons/io5";
import { MdOutlineWbSunny } from "react-icons/md";

const Navbar = () => {
  const { isDark, setIsDark } = useContext(NameContext);
  const { t, i18n } = useTranslation();
  return (
    <div className="bg-gray-900 text-white">
      <div className="flex justify-between w-[1000px] mx-auto h-[50px] items-center ">
        <div className="">
          <img src="./src/assets/logo-light.svg" alt="" />
        </div>
        <ul className="flex gap-[20px] ">
          <li className=" ">
            <NavLink to="/">{t("title1")}</NavLink>
          </li>
          <li className="">
            <NavLink to="/sport">{t("title2")}</NavLink>
          </li>
          <li className="">
            <NavLink to="/jahon">{t("title3")}</NavLink>
          </li>
          <li className="">
            <NavLink to="/jamiyat">{t("title4")}</NavLink>
          </li>
        </ul>
        <div className=" flex items-center gap-[10px]">
          <button className="flex" onClick={() => setIsDark((prev) => !prev)}>
          <IoMoonOutline />
          
          <MdOutlineWbSunny />
          </button>
          <button onClick={() => i18n.changeLanguage("uz")}>Uz</button>
          <button onClick={() => i18n.changeLanguage("eng")}>Eng</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
