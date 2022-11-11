import axios from "axios";

const apiKey = "AIzaSyA6SaT23KNiiA6DnUfUQTvFeyAcQEkwnSU";
const defaultMaxResults = "20";

export async function getBooks(query, index) {
  try {
    const url = `https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}&maxResults=${defaultMaxResults}&startIndex=${index}`;
    const response = await axios.get(url);
    return response.data.items;
  } catch (error) {
    console.log(error);
  }
}
