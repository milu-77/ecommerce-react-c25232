import React from "react";
import { useEffect, useState } from "react";
import ItemsList from "../ItemsList/ItemsList";
import { useParams } from "react-router-dom"
import { getProducts } from "../../Service/products"

const ItemsListContainer = () => {
  const [products, setProducts] = useState([]);
const {category} = useParams()
 

   

  useEffect(() => { 
    getProducts(category)
    .then((data) => setProducts(data))
    .catch((err) => {
      console.log(err)
    });
       
  }, [category]);

  return (
    <>
      <section >
       <ItemsList lista={products}/>
    </section>
    
    </>
  )



};

export default ItemsListContainer;
