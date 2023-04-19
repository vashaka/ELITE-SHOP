import React, { useState, useEffect } from "react";
import { Product } from "@/components";

import { client } from "../../lib/client";
import Head from "next/head";

const AllClothes = ({ products }: any) => {
  const [inputValue, setInputValue] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  useEffect(() => {
    setFilteredProducts(products);
  }, []);

  const inputChangeHandler = (e: any) => {
    setInputValue(e.target.value);
    const filteredProds = products.filter(
      (product: any) =>
        product.name
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim()) ||
        product.slug.current
          .toLowerCase()
          .trim()
          .includes(e.target.value.toLowerCase().trim())
    );
    setFilteredProducts(filteredProds);
  };
  return (
    <div>
      <Head>
        <title>ELITE - ყველა ტანსაცმელი</title>
      </Head>
      <div className="products-heading">
        <h2>უმაღლესი ხარისხის ტანსაცმელი</h2>
        <p>სულ ({products.length}) სამოსი</p>
      </div>
      {/* <input type="text"  /> */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="search"
          onChange={inputChangeHandler}
          value={inputValue}
          id="default-search"
          className="input"
          // placeholder="გაფილტრე ტანსაცმლის ან ბრენდის სახელით"
          placeholder="მაისური, stone island..."
        />
      </div>

      <div className="products-container ">
        {filteredProducts?.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
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

export default AllClothes;
