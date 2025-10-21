import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';

 
const ItemDetailContainer = () => {
  const [detail, setDetail] = useState( {})
   const {id} = useParams()
  useEffect(() => {
      fetch("/data/products.json")
        .then((res) => {
          if (!res.ok) {
            throw new Error("Hubo un problema al buscar productos");
          }
          return res.json();
        })
        .then((data) => {
           
          const found = data.find((p) => p.id === id)
           
      if (found) {
        setDetail(found)
      } else {
        throw new Error("Producto no encontrado")
      } 
         })
        .catch((err) => {
          console.log(err);
        });
    }, []);


  return (
    <>
    <ItemDetail {...detail }/> 
    
    
    </>
  )
}

export default ItemDetailContainer