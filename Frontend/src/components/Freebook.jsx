import React, { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import axios from "axios";

import Cards from "./Cards";
function Freebook() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log("All books:", res.data);
  
        const data = res.data.filter((data) => data.category?.toLowerCase() === "free");
        console.log("Filtered books:", data);
  
        setBook(data);
      } catch (error) {
        console.log("Error fetching books:", error);
      }
    };
    getBook();
  }, []);
  

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4 pd-10 py-10">
        <div>
          <h1 className="font-semibold text-xl pb-2">Free Offered Courses</h1>
          <p>
          Explore our free book collection! Unlock endless learning and adventure with no cost — just dive in and enjoy.
          </p>
        </div>

        <div>
        <Slider {...settings}>
  {book.map((item) => (
    <div key={item.id} className="px-4"> {/* Adds space between slides */}
      <Cards item={item} />
    </div>
  ))}
</Slider>

        </div>
      </div>
    </>
  );
}
export default Freebook;

