import React from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useRouter } from "next/router";
import { useStateContext } from "@/context/stateContext";

const Layout = ({ children }: any) => {
  const router = useRouter();
  const {
    totalPrice,
    totalQuantities,
    cartItems,
    setShowCart,
    toggleCartItemQuanitity,
    onRemove,
    showCart,
  }: any = useStateContext();

  const url = router.pathname;

  return (
    <div
      className="layout"
      style={{ marginTop: url === "/" ? "70px" : "45px" }}
    >
      {/* <Head>
        <title>Best Headphones Store on Market</title>
      </Head> */}
      <div className="main-container">
        <Navbar />

        <main>{children}</main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
