export const getAllProducts = async () => {
  const response = await fetch("https://api.npoint.io/3d9bd33a4a70359de8a5");

  if (!response?.ok) {
    const statusCode = response.status;

    switch (statusCode) {
      case 404:
        throw new Error(`Product not found for resource ${response.url}`);
      case 500:
        throw new Error("Internal server error");
      case 503:
        throw new Error("API is temporarily unavailable");
      default:
        throw new Error("Unknown error");
    }
  }

  const data = await response.json();
  return data;
};
