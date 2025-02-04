import { useState } from "react";
import SearchForm from "./SearchForm";
import SearchResults from "./SearchResults";
import { fetchAllGames, fetchGamesByCategory } from "../services/api";

const GameSearch = () => {
  const [games, setGames] = useState<any[]>([]);

  const handleSearch = async (query: string) => {
    let results = [];
    if (query) {
      results = await fetchGamesByCategory(query);
    } else {
      results = await fetchAllGames();
    }
    setGames(results);
  };

  return (
    <div className="p-4">
      <SearchForm onSearch={handleSearch} />
      <SearchResults games={games} />
    </div>
  );
};

export default GameSearch;
