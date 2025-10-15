import React from "react";
import { useEffect, useState } from "react";
import ItemsList from "../ItemsList/ItemsList";


const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/data/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Hubo un problema al buscar productos");
        }
        return res.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <section >
       <ItemsList lista={products}/>
    </section>
    
    </>
  )



};

export default ItemsListContainer;
