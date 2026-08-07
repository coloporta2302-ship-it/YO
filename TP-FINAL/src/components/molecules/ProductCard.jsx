import { Heading, Paragraph } from "../atoms";
export default function ProductCard({
  title,
  description,
  imgSource,
  price,
  className = "",
}) {
  return (
    <article className={className}>
      <Heading size="h3" text={title} />
      <img src={imgSource} alt={title} />
      <Paragraph text={description} />
      <Heading size="h5" text={price} />
    </article>
  );
}
