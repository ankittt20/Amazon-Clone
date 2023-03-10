import React from "react";
import Image from "next/image";
import { StarIcon } from "@heroicons/react/solid";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket } from "../slices/basketSlice";

const Product = ({ id, title, price, rating, description, category, image }) => {
  const dispatch = useDispatch();
  const MAX_RATING = 5;
  const MIN_RATING = 1;
  const randomRating =
    Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING;
  const hasPrime = Math.random() < 0.5;
  const addItemToCart = () => {
    const cartItem = {
      id,
      title,
      price,
      rating,
      description,
      category,
      image,
      hasPrime,
    };
    // Push item to cart
    dispatch(addToBasket(cartItem));
  };

  return (
    <div className="relative flex flex-col bg-white z-30 p-10 m-2 shadow-md">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} width={200} height={200} alt="Product Image" />
      <h4 className="my-3">{title}</h4>
      <div className="flex">
        {Array(randomRating)
          .fill()
          ?.map((_, i) => (
            <StarIcon key={i} className="h-5 text-yellow-500" />
          ))}
      </div>
      <p className="text-xs my-2 line-clamp-2">{description}</p>
      <div className="mb-5">
        <CurrencyFormat value={price * 50} prefix="₹" />
      </div>
      {hasPrime && (
        <div className="flex items-center space-x-2 -mt-5">
          <Image
            className="w-12"
            width={300}
            height={150}
            src="https://links.papareact.com/fdw"
            alt="Prime"
          />
          <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
        </div>
      )}
      <button onClick={addItemToCart} className="mt-auto button">Add to Cart</button>
    </div>
  );
};

export default Product;
