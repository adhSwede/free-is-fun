const GameCard = ({ game }: { game: any }) => {
  return (
    <div className="shadow-card flex h-96 flex-col overflow-hidden rounded bg-white dark:bg-gray-950">
      {/* Image */}
      <img
        src={game.thumbnail}
        alt={game.title}
        className="object-fit h-48 w-full"
      />

      {/* Content */}
      <div className="flex flex-grow flex-col p-4">
        <h2 className="truncate text-lg font-bold">{game.title}</h2>
        <p className="line-clamp-4 text-sm text-gray-600">
          {game.short_description}
        </p>
        <p className="mt-2 text-xs text-gray-500">
          {game.genre} | {game.platform}
        </p>

        {/* Play Now Button */}
        <a
          href={game.game_url}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto font-semibold text-blue-500 hover:underline"
        >
          Play Now
        </a>
      </div>
    </div>
  );
};

export default GameCard;
