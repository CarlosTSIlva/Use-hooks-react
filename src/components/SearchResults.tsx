import { useMemo } from "react";
import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    title: string;
    priceFormatted: number;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  return (
    <div>
      <h2>{totalPrice}</h2>
      {results?.map((produtc) => {
        return (
          <ProductItem
            onAddToWishList={onAddToWishList}
            key={produtc.id}
            product={produtc}
          />
        );
      })}
    </div>
  );
}
