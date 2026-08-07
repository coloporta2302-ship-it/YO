import { useState } from "react";
import { Heading } from "../atoms";
import { ProductCard } from "../molecules";
import { products } from "../../data/products";

export default function Catalog() {
  const [Catproducts] = useState(products);

  return (
    <section>
      {Catproducts.length ? (
        Catproducts.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            imgSource={product.imgSource}
            description={product.description}
            price={product.price}
          />
        ))
      ) : (
        <Heading text="Loading" size="h3" />
      )}
    </section>
  );
}
