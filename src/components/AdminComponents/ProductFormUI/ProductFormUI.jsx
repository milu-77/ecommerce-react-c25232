import React from "react";
import { Link } from "react-router-dom";
import "../ProductFormUI/ProductFormUI.css"

const ProductFormUI = ({
  product,
  errors,
  loading,
  onChange,
  onFileChange,
  onSubmit,
}) => {
  return (
    <section>
      <form className="product-form" onSubmit={onSubmit}>
      <h2>Agregar Libro</h2>
  
  <div className="form-group">
    <label htmlFor="name">Título:</label>
    <input
      type="text"
      id="name"
      name="name"
      value={product.name}
      onChange={onChange}
      placeholder="El nombre del libro"
      required
    />
    {errors.name && <p className="error">{errors.name}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="author">Autor:</label>
    <input
      type="text"
      id="author"
      name="author"
      value={product.author}
      onChange={onChange}
      placeholder="Nombre del autor"
      required
    />
    {errors.author && <p className="error">{errors.author}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="price">Precio:</label>
    <input
      type="number"
      id="price"
      name="price"
      value={product.price}
      onChange={onChange}
      min="0"
      step="0.01"
      required
    />
    {errors.price && <p className="error">{errors.price}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="category">Categoría:</label>
    <input
      type="text"
      id="category"
      name="category"
      value={product.category}
      onChange={onChange}
      placeholder="Ficción, No ficción, Infantil, etc."
      required
    />
    {errors.category && <p className="error">{errors.category}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="description">Descripción corta:</label>
    <input
      type="text"
      id="description"
      name="description"
      value={product.description}
      onChange={onChange}
      placeholder="Breve descripción del libro"
      required
    />
    {errors.description && <p className="error">{errors.description}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="longDescription">Descripción larga:</label>
    <textarea
      name="longDescription"
      id="longDescription"
      value={product.longDescription}
      onChange={onChange}
      placeholder="Descripción detallada del libro"
      rows="5"
      required
    ></textarea>
    {errors.longDescription && <p className="error">{errors.longDescription}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="stock">Stock:</label>
    <input
      type="number"
      id="stock"
      name="stock"
      value={product.stock}
      onChange={onChange}
      min="0"
      required
    />
    {errors.stock && <p className="error">{errors.stock}</p>}
  </div>

  <div className="checkbox-group">
    <label htmlFor="onSale">
      <input
        type="checkbox"
        id="onSale"
        name="onSale"
        checked={product.onSale}
        onChange={(e) => onChange({
          target: { name: 'onSale', value: e.target.checked }
        })}
      />
      En oferta
    </label>
  </div>

  {product.onSale && (
    <div className="form-group">
      <label htmlFor="originalPrice">Precio original:</label>
      <input
        type="number"
        id="originalPrice"
        name="originalPrice"
        value={product.originalPrice}
        onChange={onChange}
        min="0"
        step="0.01"
      />
      {errors.originalPrice && <p className="error">{errors.originalPrice}</p>}
    </div>
  )}

  <div className="form-group">
    <label htmlFor="pages">Páginas:</label>
    <input
      type="number"
      id="pages"
      name="pages"
      value={product.pages}
      onChange={onChange}
      min="1"
      required
    />
    {errors.pages && <p className="error">{errors.pages}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="publisher">Editorial:</label>
    <input
      type="text"
      id="publisher"
      name="publisher"
      value={product.publisher}
      onChange={onChange}
      placeholder="Nombre de la editorial"
      required
    />
    {errors.publisher && <p className="error">{errors.publisher}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="year">Año de publicación:</label>
    <input
      type="number"
      id="year"
      name="year"
      value={product.year}
      onChange={onChange}
      min="1000"
      max={new Date().getFullYear()}
      placeholder="2024"
      required
    />
    {errors.year && <p className="error">{errors.year}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="language">Idioma:</label>
    <select
      id="language"
      name="language"
      value={product.language}
      onChange={onChange}
      required
    >
      <option value="">Seleccionar idioma</option>
      <option value="Español">Español</option>
      <option value="Inglés">Inglés</option>
      <option value="Portugués">Portugués</option>
      <option value="Francés">Francés</option>
      <option value="Alemán">Alemán</option>
      <option value="Italiano">Italiano</option>
      <option value="Otro">Otro</option>
    </select>
    {errors.language && <p className="error">{errors.language}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="isbn">ISBN:</label>
    <input
      type="text"
      id="isbn"
      name="isbn"
      value={product.isbn}
      onChange={onChange}
      placeholder="978-3-16-148410-0"
      required
    />
    {errors.isbn && <p className="error">{errors.isbn}</p>}
  </div>

  <div className="form-group">
    <label htmlFor="image">Imagen de portada:</label>
    <input
      type="file"
      id="image"
      accept="image/*"
      onChange={(e) => onFileChange(e.target.files?.[0] ?? null)}
    />
    {errors.file && <p className="error">{errors.file}</p>}
  </div>

  <button className="btn" type="submit" disabled={loading}>
    {loading ? "Guardando..." : "Guardar libro"}
  </button>
</form>
      <Link to={"/"}>
        <div className="form-inicio">👉Volver Home</div>
      </Link>
    </section>
  );
};

export default ProductFormUI;
