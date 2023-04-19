import React from "react";

import { client } from "../../lib/client";
import { HeroBanner, FooterBanner, Product } from "../components";
import Head from "next/head";
import Link from "next/link";

const index = ({ products, bannerData }: any) => {
  const selectedProd1 = products.find((product: any) => {
    return product.slug.current === "maisuri-3";
  });
  const selectedProd2 = products.find(
    (product: any) => product.slug.current === "dzerski-shortebi"
  );
  const selectedProd3 = products.find(
    (product: any) => product.slug.current === "sharvali"
  );
  return (
    <>
      <Head>
        <title>ELITE</title>
      </Head>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className="products-heading">
        <h2>უმაღლესი ხარისხის ტანსაცმელი</h2>
        <p>სულ ({products.length}) სამოსი</p>
      </div>
      <div className="products-container">
        <Product key={selectedProd1._id} product={selectedProd1} />
        <Product key={selectedProd2._id} product={selectedProd2} />
        <Product key={selectedProd3._id} product={selectedProd3} />
      </div>

      <Link
        href="/all-clothes"
        className="buttons"
        style={{ display: "flex", justifyContent: "center" }}
      >
        <button
          type="button"
          className="add-to-cart second"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          ყველას ნახვა
        </button>
      </Link>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  return {
    props: { products, bannerData },
  };
};

export default index;
