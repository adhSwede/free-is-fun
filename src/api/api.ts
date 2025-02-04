const baseURL = "/api/proxy"; // Corrected base URL

export const fetchAllGames = async () => {
  const response = await fetch(`${baseURL}?path=games`);
  return response.json();
};

export const fetchGamesByPlatform = async (platform: string) => {
  const response = await fetch(`${baseURL}?path=games&platform=${platform}`);
  return response.json();
};

export const fetchGamesByCategory = async (category: string) => {
  const response = await fetch(`${baseURL}?path=games&category=${category}`);
  return response.json();
};

export const fetchSortedGames = async (sortBy: string) => {
  const response = await fetch(`${baseURL}?path=games&sort-by=${sortBy}`);
  return response.json();
};

export const fetchGamesByPlatformCategorySorted = async (
  platform: string,
  category: string,
  sortBy: string
) => {
  const response = await fetch(
    `${baseURL}?path=games&platform=${platform}&category=${category}&sort-by=${sortBy}`
  );
  return response.json();
};

export const fetchFilteredGames = async (
  tags: string[],
  platform?: string,
  sortBy?: string
) => {
  let url = `${baseURL}?path=filter&tag=${tags.join(".")}`;
  if (platform) url += `&platform=${platform}`;
  if (sortBy) url += `&sort=${sortBy}`;
  const response = await fetch(url);
  return response.json();
};

export const fetchGameDetails = async (gameId: number) => {
  const response = await fetch(`${baseURL}?path=game&id=${gameId}`);
  return response.json();
};
