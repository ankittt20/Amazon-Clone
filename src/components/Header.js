import React from "react";
import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);
  return (
    <header>
      <div className="flex items-center bg-amazon_blue p-1 py-2 flex-grow">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="https://links.papareact.com/f90"
            width={100}
            height={40}
            className="cursor-pointer mx-5"
            alt="Amazon Logo"
          />
        </div>
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            type="text"
            className="p-2 px-4 w-6 h-10 rounded-l-md flex-grow flex-shrink focus:outline-none"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div onClick={!session ? signIn : signOut} className="link">
            <p>{session ? `Hello, ${session.user.name}` : "Sign In"}</p>
            <p className="font-bold md: text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md: text-sm">& Orders</p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-7 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-bold md: text-sm mt-4">Cart</p>
          </div>
        </div>
      </div>

      <div>
        <div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
          <p className="link flex items-center">
            <MenuIcon className="h-6 mr-1" />
            All
          </p>
          <p className="link">Sell</p>
          <p className="link">Fresh</p>
          <p className="link">Buy Again</p>
          <p className="link">Amazon miniTV</p>
          <p className="link hidden lg:inline-flex">Gift Cards</p>
          <p className="link hidden lg:inline-flex">Browsing History</p>
          <p className="link hidden lg:inline-flex">Baby</p>
          <p className="link hidden lg:inline-flex">Gift Ideas</p>
          <p className="link hidden lg:inline-flex">Subscribe & Save</p>
          <p className="link hidden lg:inline-flex">Electronics</p>
          <p className="link hidden lg:inline-flex">Ankit&apos;s Amazon.in</p>
          <p className="link hidden lg:inline-flex">
            Health, Household & Personal Care
          </p>
        </div>
      </div>
    </header>
  );
}

export default Header;
