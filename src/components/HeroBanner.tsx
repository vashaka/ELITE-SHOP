import React from "react";
import Link from "next/link";

import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";

const HeroBanner = ({ heroBanner }: any) => {
  return (
    <div className="hero-banner-container">
      <div className="content">
        <p className="brand-name">{heroBanner.smallText}</p>
        <h1
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {heroBanner.largeText1}
        </h1>
        <h3
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {heroBanner.midText}
        </h3>

        {/* <img
          src={urlFor(heroBanner.image)}
          alt="headphones"
          className="hero-banner-image"
        /> */}

        <div>
          <Link href={`/all-clothes`}>
            <button type="button">{heroBanner.buttonText}</button>
            {/* <button type="button">შეიძინე აქ</button> */}
          </Link>
          <div className="desc">
            <div className="">
              <h5 className="" style={{ textAlign: "right" }}>
                ჩვენს შესახებ
              </h5>
            </div>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
        <p className="icons abs">
          <AiFillInstagram
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://instagram.com")}
          />
          <AiFillFacebook
            style={{ cursor: "pointer" }}
            onClick={() => window.open("https://facebook.com")}
          />
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
