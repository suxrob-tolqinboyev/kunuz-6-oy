// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useTranslation } from "react-i18next";
// import { NameContext } from "../../context";
// import Card from "../../components/card";

// const Home = () => {
//   const { isDark, setIsDark } = useContext(NameContext);
//   const { t, i18n } = useTranslation();
//   const [products , setProducts]  = useState([]);

//   useEffect(() =>{
//     async function handleAdd() {
//       try {
//         const res = await axios.get("https://dummyjson.com/posts");
//         console.log(res.data.posts);
//         // setProducts(res.data.posts)
//       } catch (error) {

//       }
//     }
//     handleAdd()
//   }, [])

//   return (
//     <div className={`${isDark ? "bg-black " : "bg-white"} ${isDark ? "text-white" : "text-black"}`}>
//      <div className="">
//          {products.map((product) => (
//           <Card key={product.id}  product={product}/>
//          ))}
//      </div>
//     </div>
//   );
// };

// export default Home;

// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import { useTranslation } from "react-i18next";
// import { NameContext } from "../../context";
// import { NavLink } from "react-router";
// import Card from "../../components/card";
// import Navbar from "../navbar";

// const Home = () => {
//   const { isDark } = useContext(NameContext);
//   const { t, i18n } = useTranslation();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // useEffect(() => {
//   //   async function handleAdd() {
//   //     try {
//   //       const res = await axios.get("");
//   //       console.log(res.posts);
//   //       setProducts(res.posts);
//   //     } catch (error) {
//   //       console.error("Xatolik yuz berdi:", error);
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   }
//   //   handleAdd();
//   // }, []);

//   return (
//     <div className={`${isDark ? "bg-black text-white" : "bg-white text-black"} min-h-screen p-4`}>
//       <Navbar />
//      <Card />
//     </div>
//   );
// };

// export default Home;

import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "../../components/card";

import { NameContext } from "../../context";

const Home = () => {
  const { isDark, setIsDark } = useContext(NameContext);
  const [news, setNews] = useState([]);
  // const { t, i18n } = useTranslation();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await axios.get("https://dummyjson.com/posts");
        setNews(res.data.posts);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <>
      <div
        className={`${isDark ? "bg-black " : "bg-white"} ${
          isDark ? "text-white" : "text-black"
        }`}
      >
        <div className="min-h-screen  p-6">
          <h1 className="text-2xl font-bold text-center mb-6">
            Kun.uz Yangiliklari
          </h1>

          {loading ? (
            <p className="text-center text-gray-700">Yuklanmoqda...</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {news.map((item) => (
                <NewsCard key={item.id} news={item} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Home;
