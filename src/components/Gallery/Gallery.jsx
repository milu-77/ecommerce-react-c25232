import React from 'react'
import './Gallery.css'

 
const Gallery = () => {
const images = [
"https://placehold.co/600x400/000000/FFF",
"https://placehold.co/600x400/000000/FFF",
"https://placehold.co/600x400/000000/FFF"
];
return (
    <> 
<section style={{ display: "flex", gap: "10px", justifyContent:
"center", marginTop: "20px" }}>
{images.map((src, index) => (
<img key={index} src={src} alt={`Imagen ${index + 1}`}
style={{ width: "150px", height: "150px" }} />
))}
</section>
</>
);
}
export default Gallery