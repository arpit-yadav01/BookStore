// import React, { useEffect, useState } from "react";
// import Cards from "./Cards";
// import axios from "axios";
// import { Link } from "react-router-dom";
// function Course() {
//   const [book, setBook] = useState([]);
//   useEffect(() => {
//     const getBook = async () => {
//       try {
//         const res = await axios.get("http://localhost:4001/book");
//         console.log(res.data);
//         setBook(res.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getBook();
//   }, []);
//   return (
//     <>
//       <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
//         <div className="mt-28 items-center justify-center text-center">
//           <h1 className="text-2xl  md:text-4xl">
//             We're delighted to have you{" "}
//             <span className="text-pink-500"> Here! :)</span>
//           </h1>
//           <p className="mt-12">
         

//             Welcome to our online book store! we believe that everyone should have access to a world of knowledge, 
//             entertainment, and inspiration. Whether you're a lover of thrilling mysteries, a fan of heartwarming romance,
//              or someone seeking self-improvement, our collection has something for you. We offer a wide variety of books across 
//              multiple genres, including fiction, non-fiction, science fiction, fantasy, history, self-help, business, and more. 
//              Each book has been carefully selected to ensure high quality and relevance, allowing you to discover new ideas, 
//              captivating stories, and useful knowledge. Whether you're curling up with a cozy novel or exploring new concepts, 
//              our platform provides the perfect book to suit your taste and needs. 


//           </p>
//           <Link to="/">
//             <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
//               Back
//             </button>
//           </Link>
//         </div>
//         <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
//           {book.map((item) => (
//             <Cards key={item.id} item={item} />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Course;

import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft, FaBookOpen } from "react-icons/fa";
import { motion } from "framer-motion";

function Course() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        setBook(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getBook();
  }, []);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 min-h-screen">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-32 pb-16 text-center"
      >
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 dark:text-white mb-6">
          We're delighted to have you {" "}
          <span className="text-pink-500">Here! <span className="inline-block animate-wiggle">:)</span></span>
        </h1>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
        >
          Welcome to our literary wonderland! Discover stories that transport you, 
          knowledge that transforms you, and adventures that stay with you forever. 
          From page-turning thrillers to soul-nourishing classics, we've curated 
          every book with your reading journey in mind.
        </motion.p>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-8 inline-block"
        >
          <Link 
            to="/" 
            className="flex items-center justify-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300"
          >
            <FaArrowLeft />
            Back to Home
          </Link>
        </motion.div>
      </motion.div>

      {/* Books Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-pink-500"></div>
        </div>
      ) : (
        <>
          {book.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12"
            >
              {book.map((item) => (
                <motion.div key={item.id} variants={itemVariants}>
                  <Cards item={item} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <div className="text-center py-20">
              <FaBookOpen className="mx-auto text-5xl text-pink-500 mb-4" />
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">No Books Available</h3>
              <p className="text-gray-600 dark:text-gray-400 mt-2">We're currently updating our collection</p>
            </div>
          )}
        </>
      )}

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-3xl p-8 md:p-12 my-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          Let us know your favorite genres and we'll make sure to stock them!
        </p>
        <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-full shadow-md transition-all duration-300">
          Suggest a Book
        </button>
      </div>
    </div>
  );
}

export default Course;