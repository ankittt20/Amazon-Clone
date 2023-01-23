import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/815BiHeuZFL._SX3000_.jpg"
            alt=""
            width={3000}
            height={1000}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/71qMVYjRGXL._SX3000_.jpg"
            alt=""
            width={3000}
            height={1000}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/81JJgK6tUxL._SX3000_.jpg"
            alt=""
            width={3000}
            height={1000}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/81njQ5ePXBL._SX3000_.jpg"
            alt=""
            width={3000}
            height={1000}
          />
        </div>
        <div>
          <Image
            loading="lazy"
            src="https://m.media-amazon.com/images/I/81drdP+YRQL._SX3000_.jpg"
            alt=""
            width={3000}
            height={1000}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
