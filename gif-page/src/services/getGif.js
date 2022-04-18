const apiKey = "KNvPf1AGnMAdEt6XqQK1uTgLlKqlt1ia";

export default function getGif({ keyword = "" } = {}, { limit = 10 } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=r&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id, source } = image;
        const url = images.downsized_medium.url;
        return { title, id, source, url };
      });
      return gifs;
    });
}
