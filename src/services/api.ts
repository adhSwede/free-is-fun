const baseURL = "/api/freetogame"; // Uses Vercel rewrite

export const fetchAllGames = async () => {
  const response = await fetch(`${baseURL}/games`);
  return response.json();
};

export const fetchGamesByPlatform = async (platform: string) => {
  const response = await fetch(`${baseURL}/games?platform=${platform}`);
  return response.json();
};

export const fetchGamesByCategory = async (category: string) => {
  const response = await fetch(`${baseURL}/games?category=${category}`);
  return response.json();
};

export const fetchSortedGames = async (sortBy: string) => {
  const response = await fetch(`${baseURL}/games?sort-by=${sortBy}`);
  return response.json();
};

export const fetchGamesByPlatformCategorySorted = async (
  platform: string,
  category: string,
  sortBy: string
) => {
  const response = await fetch(
    `${baseURL}/games?platform=${platform}&category=${category}&sort-by=${sortBy}`
  );
  return response.json();
};

export const fetchFilteredGames = async (
  tags: string[],
  platform?: string,
  sortBy?: string
) => {
  let url = `${baseURL}/filter?tag=${tags.join(".")}`;
  if (platform) url += `&platform=${platform}`;
  if (sortBy) url += `&sort=${sortBy}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchGameDetails = async (gameId: number) => {
  const response = await fetch(`${baseURL}/game?id=${gameId}`);
  return response.json();
};
