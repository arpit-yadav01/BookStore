// import React from "react";
// import banner from "../../public/Banner.png";
// function Banner() {
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
//         <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
//           <div className="space-y-8">
//             <h1 className="text-2xl md:text-4xl font-bold">
//               Hello, welcomes here to learn something{" "}
//               <span className="text-pink-500">new everyday!!!</span>
//             </h1>
//             <p className="text-sm md:text-xl">
//            Your gateway to knowledge, imagination, and discovery. Whether you're seeking inspiration, 
//            indulging in stories, or expanding your expertise, our collection of books is just a click away. 
//            Start your journey today and let every page lead you to something extraordinary.
//             </p>
//             <label className="input input-bordered flex items-center gap-2">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 viewBox="0 0 16 16"
//                 fill="currentColor"
//                 className="w-4 h-4 opacity-70"
//               >
//                 <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//                 <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//               </svg>
//               <input type="text" className="grow" placeholder="Email" />
//             </label>
//           </div>
//           <button className="btn mt-6 btn-secondary">Get Started</button>
//         </div>
//         <div className=" order-1 w-full mt-20 md:w-1/2">
//           <img
//             src={banner}
//             className="md:w-[550px] md:h-[460px] md:ml-12"
//             alt=""
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default Banner;

import React from "react";
import banner from "../../public/Banner.png";
import { FiSearch } from "react-icons/fi";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-20 mt-16 md:mt-50">
      <div className="bg-gradient-to-r from-pink-50 to-indigo-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl overflow-hidden shadow-xl">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
                Discover Your Next <span className="text-pink-500">Favorite Book</span>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-lg">
                Your gateway to knowledge, imagination, and discovery. Whether you're seeking inspiration or expanding your expertise, our collection is just a click away.
              </p>
              
              <div className="relative max-w-md">
                <input
                  type="text"
                  placeholder="Search for books..."
                  className="w-full pl-12 pr-4 py-3 rounded-full border-0 shadow-sm focus:ring-2 focus:ring-pink-500 dark:bg-slate-700 dark:text-white"
                />
                <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl" />
                <button className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium transition-all">
                  Search
                </button>
              </div>
              
              <div className="flex space-x-4">
                <button className="btn btn-primary px-6 rounded-full">
                  Explore Now
                </button>
                <button className="btn btn-outline px-6 rounded-full border-pink-500 text-pink-500 hover:bg-pink-50 dark:border-pink-400 dark:text-pink-400">
                  Learn More
                </button>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2 flex items-center justify-center p-4">
            <img
              src={banner}
              className="w-full max-w-lg object-contain"
              alt="Reading books"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;