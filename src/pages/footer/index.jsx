import React, { useContext } from "react";
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaInstagram } from "react-icons/fa";
import { NameContext } from "../../context";

const Footer = () => {
    const { isDark, setIsDark } = useContext(NameContext);
  return (
     
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">

        <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-6">
          <h2 className="text-2xl font-bold uppercase">Kun.uz</h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-blue-500"><FaFacebookF size={24} /></a>
            <a href="#" className="hover:text-blue-400"><FaTelegramPlane size={24} /></a>
            <a href="#" className="hover:text-blue-300"><FaTwitter size={24} /></a>
            <a href="#" className="hover:text-pink-500"><FaInstagram size={24} /></a>
          </div>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-400 mt-6">
          <div>
            <h3 className="text-white font-semibold mb-2">Bo‘limlar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Jamiyat</a></li>
              <li><a href="#" className="hover:text-blue-400">Siyosat</a></li>
              <li><a href="#" className="hover:text-blue-400">Texnologiya</a></li>
              <li><a href="#" className="hover:text-blue-400">Sport</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Qo‘shimcha</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Reklama</a></li>
              <li><a href="#" className="hover:text-blue-400">Foydalanish shartlari</a></li>
              <li><a href="#" className="hover:text-blue-400">Maxfiylik siyosati</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Biz bilan bog‘laning</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Email: info@kun.uz</a></li>
              <li><a href="#" className="hover:text-blue-400">Telefon: +998 71 200 00 00</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-2">Ilovalar</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-blue-400">Android</a></li>
              <li><a href="#" className="hover:text-blue-400">iOS</a></li>
            </ul>
          </div>
        </div>


        <div className="text-center text-gray-500 text-sm mt-6 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} Kun.uz. Barcha huquqlar himoyalangan.
        </div>
      </div>
    </footer>

  );
};

export default Footer;
