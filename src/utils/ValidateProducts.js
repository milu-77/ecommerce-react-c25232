    //  "name": "STRING" OK,
    // "author": "STRING" OK,
    // "price": "NUMERO" OK,
    // "category": "STRING" OK,
    // "description": "STRING" OK,
    // "longDescription": "STRING" OK,
    // "imageUrl": "/img/fundacion.jpg" NO,
    // "stock": "NUMERO" OK,
    // "onSale": "Boolean",
    // "originalPrice": "null/NUMERO",
    // "pages": "NUMERO",
    // "publisher": "STRING",
    // "year": "NUMERO",
    // "language": "STRING",
    // "isbn": "STRING"

export const validateProduct = (product, fileRequired = true)=> {
  const errors = {}

  if (!product.name.trim()){
    errors.name = "El nombre es obligatorio"
  }

   if (!product.author.trim()){
    errors.name = "El autor es obligatorio"
  }

  if(!product.price || product.price <= 0){
    errors.price = "El precio debe ser mayor a cero"
  }

  if (!product.category.trim()){
    errors.category = "La categoria es obligatoria"
  }

  if (!product.description.trim()){
    errors.description = "La descripcion es obligatoria"
  }
  if (!product.longDescription.trim()){
    errors.description = "La descripcion larga es obligatoria"
  }

  if(!product.stock || product.stock <= 0){
    errors.stock = "El stock debe ser mayor a cero"
  }

   
  if(fileRequired && !product.file){
    errors.file = "Debes seleccionar una imagen"
  }
  return errors
}