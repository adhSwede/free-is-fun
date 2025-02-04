import { useState } from "react";

const gameTags = [
  { category: "MMO", tags: ["mmo", "mmorpg", "mmofps", "mmotps", "mmorts"] },
  {
    category: "Shooter",
    tags: ["shooter", "first-person", "third-person", "tank"]
  },
  { category: "Strategy", tags: ["strategy", "turn-based", "tower-defense"] },
  {
    category: "Action",
    tags: [
      "action",
      "action-rpg",
      "fighting",
      "martial-arts",
      "battle-royale",
      "military"
    ]
  },
  {
    category: "Casual & Social",
    tags: [
      "social",
      "sandbox",
      "open-world",
      "sailing",
      "sports",
      "racing",
      "card"
    ]
  },
  {
    category: "Survival & Horror",
    tags: ["survival", "zombie", "horror", "permadeath"]
  },
  {
    category: "Graphics & Style",
    tags: [
      "2d",
      "3d",
      "pixel",
      "voxel",
      "anime",
      "fantasy",
      "sci-fi",
      "low-spec"
    ]
  },
  {
    category: "Game Perspective",
    tags: [
      "top-down",
      "side-scroller",
      "first-person",
      "third-person",
      "space",
      "flight"
    ]
  }
];

const SearchForm = ({
  onSearch
}: {
  onSearch: (query: string, type: "name" | "genre") => void;
}) => {
  const [searchType, setSearchType] = useState<"name" | "genre">("name");
  const [query, setQuery] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query) return;
    onSearch(query, searchType);
  };

  return (
    <form className="flex flex-col items-center" onSubmit={handleSubmit}>
      {/* Toggle Buttons */}
      <div className="mb-4 flex gap-2">
        <button
          type="button"
          className={`px-4 py-2 ${searchType === "name" ? "bg-gray-600 font-medium text-white hover:cursor-default" : "bg-gray-200 hover:cursor-pointer dark:bg-gray-800"}`}
          onClick={() => setSearchType("name")}
        >
          Search by Name
        </button>
        <button
          type="button"
          className={`px-4 py-2 ${searchType === "genre" ? "bg-gray-600 text-white hover:cursor-default" : "bg-gray-200 hover:cursor-pointer dark:bg-gray-800"}`}
          onClick={() => setSearchType("genre")}
        >
          Search by Genre
        </button>
      </div>

      {/* Input Field for Name / Dropdown for Genre */}
      {searchType === "name" ? (
        <input
          type="text"
          className="box-border h-8 w-76 border-2 px-2"
          placeholder="Enter game name..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      ) : (
        <select
          className="h-8 w-76 border-2 px-2 py-1 dark:bg-gray-900"
          value={query}
          onChange={e => setQuery(e.target.value)}
        >
          <option value="">Select Genre</option>
          {gameTags.map(({ category, tags }) => (
            <optgroup
              key={category}
              label={category}
              className="dark:bg-gray-900"
            >
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </optgroup>
          ))}
        </select>
      )}

      {/* Submit Button */}
      <button type="submit" className="mt-2 flex items-center gap-1 p-2">
        <i className="material-icons cursor-pointer">search</i>
        Search
      </button>
    </form>
  );
};

export default SearchForm;
