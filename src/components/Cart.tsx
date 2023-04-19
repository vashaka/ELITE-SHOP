import React, { useRef } from "react";
import Link from "next/link";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineLeft,
  AiOutlineShopping,
} from "react-icons/ai";
import { TiDeleteOutline } from "react-icons/ti";
import toast from "react-hot-toast";

import { useStateContext } from "../context/stateContext";
import { urlFor } from "../../lib/client";
// import getStripe from "../lib/getStripe";

const Cart = () => {
  const cartRef: any = useRef();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
  }: any = useStateContext();

  // console.log(totalPrice);

  // const handleCheckout = async () => {
  //   const stripe = await getStripe();

  //   const response = await fetch('/api/stripe', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(cartItems),
  //   });

  //   if(response.statusCode === 500) return;

  //   const data = await response.json();

  //   toast.loading('Redirecting...');

  //   stripe.redirectToCheckout({ sessionId: data.id });
  // }

  return (
    <div className="cart-wrapper" ref={cartRef}>
      <div className="cart-container">
        <button
          type="button"
          className="cart-heading"
          onClick={() => setShowCart(null)}
        >
          <AiOutlineLeft />
          <span className="heading">შენი კალათა</span>
          <span className="cart-num-items">({totalQuantities} ნივთი)</span>
        </button>

        {cartItems?.length < 1 && (
          <div className="empty-cart">
            <div className="flex justify-center">
              <AiOutlineShopping size={150} />
            </div>
            <h3>კალათა ცარიელია</h3>
            <Link href="/">
              <button
                type="button"
                onClick={() => setShowCart(false)}
                className="btn"
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                გააგრძელე შოპინგი
              </button>
            </Link>
          </div>
        )}

        <div className="product-container">
          {cartItems?.length >= 1 &&
            cartItems.map((item: any) => (
              <div className="product" key={item._id}>
                <img
                  src={urlFor(item?.image[0]).url()}
                  alt={item.title}
                  className="cart-product-image"
                />
                <div className="item-desc">
                  <div className="flex top">
                    <h5>{item.name}</h5>
                    <h4>{item.price} ₾</h4>
                  </div>
                  <div className="flex bottom">
                    <div>
                      <p className="quantity-desc">
                        <span
                          className="minus"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "dec")
                          }
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className="num">{item.quantity}</span>
                        <span
                          className="plus"
                          onClick={() =>
                            toggleCartItemQuanitity(item._id, "inc")
                          }
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type="button"
                      className="remove-item"
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems?.length >= 1 && (
          <div className="cart-bottom">
            <div className="total">
              <h3>ჯამში:</h3>
              <h3>{totalPrice?.toString().substring(0, 6)} ₾</h3>
            </div>
            <div className="btn-container">
              {/* <button type="button" className="btn" onClick={handleCheckout}>
                Pay with Stripe
              </button> */}
            </div>
          </div>
        )}
        <h2
          style={{
            color: "#324d67",
            textAlign: "center",
            marginTop: cartItems?.length >= 1 ? "30px" : "-30px",
          }}
        >
          მოგვწერეთ სოციალურ ქსელში{" "}
        </h2>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <a
            href="#"
            className="fa fa-instagram"
            onClick={() => window.open("https://instagram.com")}
          ></a>
          <a
            href="#"
            className="fa fa-facebook"
            onClick={() => window.open("https://facebook.com")}
          ></a>
        </div>
      </div>
    </div>
  );
};

export default Cart;
