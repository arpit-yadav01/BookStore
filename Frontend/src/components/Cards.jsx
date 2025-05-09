// import React from "react";

// function Cards({ item }) {
//   return (
//     <>
//       <div className="mt-4 my-3 p-3">
//         <div className="card w-92 bg-base-100 shadow-xl hover:scale-105 duration-200 dark:bg-slate-900 dark:text-white dark:border">
//           <figure>
//             <img src={item.image} alt="Shoes" />
//           </figure>
//           <div className="card-body">
//             <h2 className="card-title">
//               {item.name}
//               <div className="badge badge-secondary">{item.category}</div>
//             </h2>
//             <p>{item.title}</p>
//             <div className="card-actions justify-between">
//               <div className="badge badge-outline">${item.price}</div>
//               <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">
//                 Buy Now
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default Cards;


import React from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

function Cards({ item }) {
  return (
    <div className="mt-4 my-3 transition-all duration-300 hover:-translate-y-2">
      <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl dark:bg-slate-900 dark:text-white dark:border dark:border-gray-700 overflow-hidden group">
        <figure className="relative overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name} 
            className="w-full h-64 object-cover group-hover:scale-105 transition-all duration-500"
          />
          <div className="absolute top-2 right-2 bg-pink-500 text-white px-2 py-1 text-xs font-bold rounded-full">
            FREE
          </div>
        </figure>
        <div className="card-body p-5">
          <div className="flex items-center justify-between mb-2">
            <h2 className="card-title text-lg font-bold truncate">{item.name}</h2>
            <div className="flex items-center text-yellow-400">
              <FaStar />
              <span className="ml-1 text-gray-600 dark:text-gray-300">4.5</span>
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 line-clamp-2 mb-4">{item.title}</p>
          <div className="card-actions justify-between items-center">
            <div className="text-lg font-bold text-pink-500">${item.price}</div>
            <button className="btn btn-sm btn-secondary rounded-full px-4">
              <FaShoppingCart className="mr-2" />
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;