import { memo, useState } from "react";
import dynamic from "next/dynamic";
import { isEqual } from "lodash";
import { AddProductToWishListProps } from "./AddProductToWishList";

const AddProductToWishList = dynamic<AddProductToWishListProps>(
  () => {
    return import("./AddProductToWishList").then(
      (mod) => mod.AddProductToWishList
    );
  },
  {
    loading: () => <span>Carregando</span>,
  }
);
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
  const [isAddingToWishList, setIsAddingToWishList] = useState(false);
  return (
    <div key={product.id}>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button onClick={() => setIsAddingToWishList(true)}>
        Adicioanr aos favoristos
      </button>
      {isAddingToWishList && (
        <AddProductToWishList
          onAddToWishList={() => onAddToWishList(product.id)}
          onResquestClose={() => setIsAddingToWishList(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return isEqual(prevProps.product, nextProps.product);
  }
);
