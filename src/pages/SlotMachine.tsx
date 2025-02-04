import { useState, useEffect } from "react";
import { fetchAllGames } from "../api/api";
import GameCard from "../components/GameCard";

const SlotMachine = () => {
  const [games, setGames] = useState<any[]>([]);
  const [slot1, setSlot1] = useState<any | null>(null);
  const [slot2, setSlot2] = useState<any | null>(null);
  const [slot3, setSlot3] = useState<any | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  useEffect(() => {
    const getGames = async () => {
      const fetchedGames = await fetchAllGames();
      setGames(fetchedGames);
    };
    getGames();
  }, []);

  const spinSlots = () => {
    if (games.length === 0 || isSpinning) return;

    setIsSpinning(true);

    const interval1 = setInterval(() => {
      setSlot1(games[Math.floor(Math.random() * games.length)]);
    }, 75);

    const interval2 = setInterval(() => {
      setSlot2(games[Math.floor(Math.random() * games.length)]);
    }, 100);

    const interval3 = setInterval(() => {
      setSlot3(games[Math.floor(Math.random() * games.length)]);
    }, 125);

    // Stop slots one by one for effect
    setTimeout(() => clearInterval(interval1), 2000);
    setTimeout(() => clearInterval(interval2), 2500);
    setTimeout(() => {
      clearInterval(interval3);
      setIsSpinning(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col items-center gap-5 p-15">
      <h1 className="mb-8 text-4xl font-bold">🎰 Free-to-Play Slot Machine</h1>

      {/* Slot Machine UI */}
      <div className="shadow-card relative flex items-center justify-center rounded-xl border-gray-700 bg-[rgba(0,0,0,0.1)] p-20 dark:bg-[rgba(0,0,0,0.3)]">
        <div className="grid grid-cols-3 gap-4">
          {[slot1, slot2, slot3].map((slot, index) => (
            <div
              key={index}
              className={`shadow-card h-96 w-64 overflow-hidden rounded-xl border-gray-500 transition-transform duration-700 ${
                isSpinning ? "animate-slotSpin" : ""
              }`}
            >
              {slot ? (
                <GameCard game={slot} />
              ) : (
                // Placeholder slot before spin
                <div className="flex h-full w-full items-center justify-center rounded-xl bg-gray-600 text-6xl font-bold text-white dark:bg-gray-950">
                  ?
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Spin Button */}
      <button
        onClick={spinSlots}
        disabled={isSpinning}
        className={`mt-8 rounded border-gray-700 px-8 py-4 text-2xl font-bold ${
          isSpinning
            ? "cursor-not-allowed bg-gray-300 dark:bg-gray-900"
            : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-950 hover:dark:bg-gray-700"
        }`}
      >
        {isSpinning ? "Spinning..." : "Spin it!"}
      </button>
    </div>
  );
};

export default SlotMachine;
