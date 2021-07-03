import { memo } from "react";

interface ProductItemProps {
  product: {
    id: number;
    price: number;
    title: string;
    priceFormatted: number;
  };
  onAddToWishList: (id: number) => void;
}

function ProductItemComponent({ product, onAddToWishList }: ProductItemProps) {
  return (
    <div key={product.id}>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => onAddToWishList(product.id)}>
        Add to wishList
      </button>
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return Object.is(prevProps.product, nextProps.product);
  }
);
