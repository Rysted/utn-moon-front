export const getAllProducts = async () => {
  const res = await fetch("https://api.npoint.io/c5896f30ed32b1b4cc8e");
  const data = await res.json();
  return data;
};
