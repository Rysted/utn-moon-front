export const getAllEpisodes = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/episode");

  const data = await response.json();
  return data;
};
