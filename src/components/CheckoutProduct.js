import { StarIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
import CurrencyFormat from "react-currency-format";
import { useDispatch } from "react-redux";
import { addToBasket, removeFromBasket } from "../slices/basketSlice";

const CheckoutProduct = ({
  id,
  title,
  price,
  rating,
  description,
  category,
  hasPrime,
  image,
}) => {
  const dispatch = useDispatch();
  const addItemToCart = () => {
    const product = {
      id,
      title,
      price,
      rating,
      description,
      category,
      hasPrime,
      image,
    };
    // Push item into redux store
    dispatch(addToBasket(product));
  };

  const removeItemToCart = () => {
    // Remove item from redux store
    dispatch(removeFromBasket({ id }));
  };

  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={200} width={200} alt="Product" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <div className="flex">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <StarIcon key={i} className="h-5 text-yellow-500" />
            ))}
        </div>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <CurrencyFormat value={price * 50} prefix="₹" />
        {hasPrime && (
          <div className="flex items-center space-x-2">
            <Image
              loading="lazy"
              className="w-12"
              height={200}
              width={200}
              src="https://links.papareact.com/fdw"
              alt="Prime"
            />
            <p className="text-xs text-gray-500">FREE Next-day Delivery</p>
          </div>
        )}
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToCart} className="button">
          Add Again
        </button>
        <button onClick={removeItemToCart} className="button">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
