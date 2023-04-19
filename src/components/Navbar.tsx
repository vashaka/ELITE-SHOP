import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import Cart from "./Cart";
import { BsCart2 } from "react-icons/bs";

import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";

import { useStateContext } from "@/context/stateContext";

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities }: any = useStateContext();
  return (
    <div
      className="z-20"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        margin: "auto",
        width: "100%",
        borderBottom: "0.5px solid hsl(0, 0%, 88%)",
        zIndex: 20,
        backgroundColor: "white",
      }}
    >
      <div className="navbar-container">
        <p className="logo">
          <Link href="/">ELITE</Link>
        </p>

        <p className="icons" style={{ fontSize: "30px", color: "#324d67" }}>
          <AiFillInstagram
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://instagram.com")}
          />
          <AiFillFacebook
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://facebook.com")}
          />
        </p>
        <button
          type="button"
          className="cart-icon"
          onClick={() => setShowCart(true)}
        >
          {/* <AiOutlineShopping /> */}
          <BsCart2 />
          <span className="cart-item-qty">{totalQuantities}</span>
        </button>

        {/* <button
        // className="cart-btn ml-2 nav-cart-btn"
        className="cart-btn hover:scale-105 ease-in duration-200"
      >
        <span className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
          </svg>
        </span>
        <span>კალათა</span>
        <span className="badge">{totalQuantities}</span>
      </button> */}

        {showCart && <Cart />}
      </div>
    </div>
  );
};

export default Navbar;
