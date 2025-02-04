import { useState } from "react";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import { fetchAllGames, fetchGamesByCategory } from "../services/api";

const SearchPage = () => {
  const [games, setGames] = useState<any[]>([]);

  const handleSearch = async (query: string, type: "name" | "genre") => {
    try {
      console.log("Searching for:", query, "Type:", type);

      let results = [];

      if (type === "genre") {
        results = await fetchGamesByCategory(query); // Direct API call for genre
      } else {
        const allGames = await fetchAllGames(); // Get all games

        // Fuzzy search for game name (case-insensitive, includes partial matches)
        const searchTerm = query.toLowerCase();
        results = allGames.filter((game: any) =>
          game.title.toLowerCase().includes(searchTerm)
        );
      }

      console.log("Filtered Results:", results);

      if (!Array.isArray(results)) {
        console.error("API response is not an array:", results);
        results = [];
      }

      setGames(results);
    } catch (error) {
      console.error("Error fetching games:", error);
      setGames([]);
    }
  };

  return (
    <div className="flex flex-col items-center gap-5 p-15">
      <h1 className="text-2xl font-bold">Find Games</h1>
      <SearchForm onSearch={handleSearch} />
      <SearchResults games={games} />
    </div>
  );
};

export default SearchPage;
