import { useState } from "react";
import GameCard from "./GameCard";

const gamesPerPage = 6; // Pagination limit

const SearchResults = ({ games }: { games: any[] }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Total number of pages
  const totalPages = Math.ceil(games.length / gamesPerPage);

  // Slice games array for pagination
  const startIndex = (currentPage - 1) * gamesPerPage;
  const selectedGames = games.slice(startIndex, startIndex + gamesPerPage);

  return (
    <div className="mt-4 w-full max-w-4xl">
      {games.length === 0 ? (
        <p className="text-center text-gray-500">No results found.</p>
      ) : (
        <>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {selectedGames.map(game => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          {/* Pagination Controls */}
          <div className="mt-6 flex justify-center space-x-4">
            <button
              className={`flex rounded bg-gray-300 px-4 py-2 dark:bg-gray-800 ${currentPage === 1 ? "cursor-not-allowed opacity-50" : "hover:bg-gray-400"}`}
              disabled={currentPage === 1}
              onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            >
              <i className="material-icons">arrow_back</i>
            </button>

            <span className="rounded bg-gray-100 px-4 py-2 dark:bg-gray-800">
              Page {currentPage} of {totalPages}
            </span>

            <button
              className={`flex rounded bg-gray-300 px-4 py-2 dark:bg-gray-800 ${currentPage === totalPages ? "cursor-not-allowed opacity-50" : "hover:bg-gray-400"}`}
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage(prev => Math.min(prev + 1, totalPages))
              }
            >
              <i className="material-icons">arrow_forward</i>
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default SearchResults;
