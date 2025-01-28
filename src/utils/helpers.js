export const createUniqueId = () => {
  const timestamp = Date.now();

  return btoa(timestamp.toString()).replace(/=+$/, '');
};
