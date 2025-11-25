import { useEffect, useState } from "react";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { getProductsById } from "../../Service/products"


 
const ItemDetailContainer = () => {
  const [detail, setDetail] = useState( {})
   const {id} = useParams()
  useEffect(() => {
      fetch("/data/products.json")
      getProductsById(id)
        .then((data) => setDetail(data))
    .catch((err) => {
      console.log(err)
    });
    }, []);


  return (
    <>
    <ItemDetail {...detail }/> 
    
    
    </>
  )
}

export default ItemDetailContainer