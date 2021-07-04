export interface AddProductToWishListProps {
  onAddToWishList: () => void;
  onResquestClose: () => void;
}

export function AddProductToWishList({
  onAddToWishList,
  onResquestClose,
}: AddProductToWishListProps) {
  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={onAddToWishList}>Sim</button>
      <button onClick={onResquestClose}>Não</button>
    </span>
  );
}
