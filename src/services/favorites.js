export async function getFavorites() {
  let favorites = await localStorage.getItem("favorites");
  if (favorites == null) {
    await initFavorites();
    favorites = localStorage.getItem("favorites");
  }
  return JSON.parse(favorites);
}

export async function addFavorite(book) {
  let actualFavorites = await getFavorites();

  const bookAlreadyIsFavorite = actualFavorites.find(
    (element) => element.title == book.title
  );

  if (!bookAlreadyIsFavorite) {
    actualFavorites.push(book);
  }
  localStorage.setItem("favorites", JSON.stringify(actualFavorites));
}

export async function removeFavorite(book) {
  let favorites = await getFavorites();
  const index = favorites.indexOf(book);
  favorites.splice(index, 1);
  localStorage.setItem("favorites", JSON.stringify(favorites));
}

async function initFavorites() {
  localStorage.setItem("favorites", JSON.stringify([]));
}
