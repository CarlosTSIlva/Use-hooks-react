import Head from "next/head";
import { FormEvent, useCallback, useState } from "react";
import { SearchResults } from "../components/SearchResults";

interface ProductProps {
  data: any[];
  totalPrice: number;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ProductProps>({
    totalPrice: 0,
    data: [],
  });

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3334/products?q=${search}`);
    const data = await response.json();

    const formatter = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

    const products = data.map((product) => {
      return {
        id: product.oid,
        title: product.title,
        price: product.price,
        priceFormatted: formatter.format(product.price),
      };
    });

    const totalPrice = data.results?.reduce((total, product) => {
      return total + product.price;
    }, 0);

    setResults({ totalPrice, data: products });
  };

  const haddToWishList = useCallback(async (id: number) => {
    console.log(id);
  }, []);

  return (
    <div>
      <Head>
        <title>stes</title>
      </Head>
      <div>
        <p>Search</p>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type="submit">Buscas</button>
        </form>

        <SearchResults
          onAddToWishList={haddToWishList}
          results={results.data}
          totalPrice={results.totalPrice}
        />
      </div>
    </div>
  );
}
