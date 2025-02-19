// import axios from "axios";
// import React, { useEffect, useState } from "react";

// const Card = () => {
//   const [post, setPost] = useState([]);

//   useEffect(() => {
//     async function card() {
//       try {
//         const res = await axios.get("https://dummyjson.com/posts");
//         setPost(res.data.posts);
//         console.log(res.data.posts);
//       } catch (error) {
//         console.log(error);
//       }
//     }
//     card();
//   }, []);

//   return (
//     <div className="mx-auto w-[1000px]">
//       <div className="">
//         <img src="./src/assets/image.png" alt="" />
//       </div>
//       <div className="grid grid-cols-2 justify-between items-center ">
//         {post.map((item) => (
//           <div className="border  w-[400px] text-center">
//             <h1 key={item.id} className="font-[700] text-[20px]">
//               {item.title}
//             </h1>
//             <p className="">{item.body}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Card;

import React, { useContext } from "react";
import { NameContext } from "../../context";

const NewsCard = ({ news }) => {
  const { isDark, setIsDark } = useContext(NameContext);
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden">
      <img
        src="./src/assets/image.png"
        alt="news"
        className="w-full h-[200px] object-cover"
      />
      <div className="p-4">
        <div
          className={`${isDark ? "bg-white " : "bg-black"} ${
            isDark ? "text-black" : "text-white"
          }`}
        >
          <h2 className="text-lg font-bold ">{news.title}</h2>
          <p className=" text-sm mt-2">
            {news.body.length > 100
              ? news.body.slice(0, 100) + "..."
              : news.body}
          </p>
          <button className="mt-4 text-blue-600 hover:text-blue-800">
            Batafsil →
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
