import { useState, useEffect } from "react";
import { fetchAllGames } from "../../api/api";

const HeroSection = () => {
  const [randomGame, setRandomGame] = useState<any | null>(null);

  useEffect(() => {
    const getRandomGame = async () => {
      const games = await fetchAllGames();
      if (games.length > 0) {
        const randomIndex = Math.floor(Math.random() * games.length);
        setRandomGame(games[randomIndex]);
      }
    };

    getRandomGame();
  }, []);

  return (
    <div className="flex flex-col">
      <section className="flex flex-col gap-6">
        <h1 className="text-center text-5xl font-medium">
          About This Project 🎮
        </h1>
        <p className="max-w-300 text-lg">
          This web app was created as a personal practice project, inspired by a
          close friend who would always drag me along to try out every hyped
          free-to-play game he could find.
        </p>

        <p className="max-w-300 text-lg">
          Whether they were hidden gems or complete flops, the thrill of
          discovering new games together was always fun. This site is a tribute
          to that experience—a way to explore and find free games worth playing.
        </p>

        <p className="max-w-300 text-lg">
          Powered by the FreeToGame API, this site dynamically fetches and
          displays an ever-growing collection of free-to-play PC and browser
          games.
        </p>

        <p className="max-w-300 text-lg">
          Built with Vite, React, React Router, Tailwind CSS, and Material
          Icons, it aims to provide a clean, fast, and intuitive way to search
          for games by name or genre.
        </p>

        <p className="max-w-300 text-lg">
          Whether you're looking for a new MMO, an action-packed shooter, or a
          casual game to kill time, feel free to spin the slot machine or browse
          the search page—who knows what you'll find? 🚀 Enjoy the hunt for the
          next great free-to-play game! 🎮🔥
        </p>

        {/* Image Wrapper - Now Fills with API Image */}
        <div className="overflow-hidden rounded-xl">
          {randomGame && (
            <img
              src={randomGame.thumbnail}
              alt={randomGame.title}
              className="h-auto w-full object-cover"
            />
          )}
        </div>
        <span className="flex gap-2">
          Game in image:
          <strong>{randomGame?.title}</strong>
          by
          <strong>{randomGame?.publisher}</strong>
        </span>
      </section>

      <section className="flex flex-col">
        <div className="flex flex-col">
          <h3 className="mt-6 text-2xl font-semibold">Tech Stack:</h3>
          <ul className="mt-2 items-center">
            <li>Vite</li>
            <li>React</li>
            <li>React Router</li>
            <li>Tailwind CSS</li>
            <li>Material Icons</li>
          </ul>
          <span className="mt-2 italic opacity-70">
            Powered By FreeToGame API
          </span>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
