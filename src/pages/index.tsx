import Head from "next/head";
import { FormEvent, useState } from "react";
import { SearchResults } from "../components/SearchResults";

interface ProductProps {
  id: number;
  price: number;
  title: string;
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<ProductProps[]>();

  const handleSearch = async (event: FormEvent) => {
    event.preventDefault();

    if (!search.trim()) {
      return;
    }

    const response = await fetch(`http://localhost:3334/products?q=${search}`);
    console.log(response);
    const data = await response.json();
    setResults(data);
  };

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

        <SearchResults results={results} />
      </div>
    </div>
  );
}
