import  { useState } from "react";
import { validateProduct } from "../../../utils/ValidateProducts";
import {uploadToImgbb} from "../../../Service/uploadImage";
import {createProduct} from "../../../Service/products";
import ProductFormUI from "../ProductFormUI/ProductFormUI";
import "../ProductFormContainer/ProductFormContainer.css"

const ProductFormContainer = () => {
  const [loading, setLoading] = useState();
  const [errors, setErrors] = useState("");
  const [file, setFile] = useState(null);
  const [product, setProduct] = useState({
    id: "1",
    name: "",
    author: "",
    price: "",
    category: "",
    description: "",
    longDescription: "",
    // imageUrl: "",
    stock: "",
    onSale: "",
    originalPrice: "",
    pages: "",
    publisher: "",
    year: "",
    language: "",
    isbn: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    const newErrors = validateProduct({ ...product, file });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setLoading(false);
      return;
    }

    try {
      const imageUrl = await uploadToImgbb (file);
      const productData = {
        ...product,
        price: Number(product.price),
        imageUrl,
      };

      await createProduct(productData);
      alert("Producto cargado con exito");

      setProduct({
        id: "1",
        name: "",
        author: "",
        price: "",
        category: "",
        description: "",
        longDescription: "",
        // imageUrl: "",
        stock: "",
        onSale: "",
        originalPrice: "",
        pages: "",
        publisher: "",
        year: "",
        language: "",
        isbn: "",
      });
      setFile(null);
    } catch (error) {
      setErrors({ general: error.message });
    } finally {
      setLoading(false);
    }
  };






  return <ProductFormUI 
  product={product} 
  errors={errors} 
  onChange={handleChange} 
  onFileChange={setFile} 
  loading={loading} 
  onSubmit={handleSubmit}/>
};

export default ProductFormContainer;
