import { Heading, Paragraph } from "../atoms";
import { useCart } from "../context/CartContext";

export default function ProductCard({
  id,
  title,
  description,
  imgSource,
  price,
  className = "",
}) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({
      id,
      nombre: title,
      precio: Number(String(price).replace(/\./g, "").replace(/,/g, ".")),
      imagen: imgSource,
    });
  };

  return (
    <article className={className}>
      <Heading size="h3" text={title} />
      <img src={imgSource} alt={title} />
      <Paragraph text={description} />
      <Heading size="h5" text={price} />

      <button type="button" onClick={handleAddToCart}>
        🛒 Agregar al carrito
      </button>
    </article>
  );
}
