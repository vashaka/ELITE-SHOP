import React, { useState } from "react";

import Product from "../../components/Product";
import Head from "next/head";
import { urlFor, client } from "../../../lib/client";
import { useStateContext } from "@/context/stateContext";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";
import Link from "next/link";
import { TiRefreshOutline } from "react-icons/ti";

const ProductDetails = ({ products, product }: any) => {
  const { decQty, incQty, qty, onAdd, setShowCart }: any = useStateContext();
  const [index, setIndex] = useState(0);
  const { image, name, details, price, oldPrice, size } = product;
  return (
    <>
      <Head>
        <title>{"ELITE - " + name}</title>
      </Head>

      {/* <Head>
        <title>{name} - ELITE</title>
      </Head> */}
      <div>
        <div className="product-detail-container">
          <div>
            <div className="image-container">
              <img
                src={urlFor(image && image[index]).url()}
                className="product-detail-image"
              />
            </div>
            <div className="small-images-container">
              {image?.map((item: any, i: any) => (
                <img
                  key={i}
                  src={urlFor(item).url()}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                />
              ))}
            </div>
          </div>

          <div className="product-detail-desc">
            <h1>{name}</h1>
            <div className="reviews">
              <div>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
              </div>
              <p>(20)</p>
            </div>
            <h4>აღწერა: </h4>
            <p>{details}</p>
            <div>
              <p className="price">{price} ₾</p>
              {oldPrice && (
                <p
                  className="price"
                  style={{
                    textDecoration: "line-through",
                    color: "hsl(0, 0%, 63%)",
                    textAlign: "right",
                    marginTop: "-30px",
                  }}
                >
                  {oldPrice} ₾
                </p>
              )}
            </div>
            <div className="quantity">
              <h3>რაოდენობა:</h3>
              <p className="quantity-desc">
                <span className="minus" onClick={decQty}>
                  <AiOutlineMinus />
                </span>
                <span className="num">{qty}</span>
                <span className="plus" onClick={incQty}>
                  <AiOutlinePlus />
                </span>
              </p>
            </div>

            <div className="buttons">
              <button
                type="button"
                className="add-to-cart"
                onClick={() => onAdd(product, qty)}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                კალათაში დამატება
              </button>
              <button
                type="button"
                className="add-to-cart second"
                onClick={() => setShowCart(true)}
                style={{
                  whiteSpace: "nowrap",
                }}
              >
                კალათის ნახვა
              </button>
            </div>
          </div>
        </div>
        <div className="maylike-products-wrapper">
          <h2>ასევე მოგეწონებათ</h2>
          <div className="marquee">
            <div className="maylike-products-container track">
              {products.map((item: any) => (
                <Product key={item._id} product={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product: any) => ({
    params: {
      slug: product.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }: any) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]';

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);

  // console.log(product);

  return {
    props: { products, product },
  };
};
export default ProductDetails;
