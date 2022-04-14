const apiKey = "KNvPf1AGnMAdEt6XqQK1uTgLlKqlt1ia";

export default function getGif({ keyword = "" } = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=r&lang=en`;

  return fetch(apiURL)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map((image) => {
        const { images, title, id } = image;
        const url = images.downsized_medium.url;
        return { title, id, url };
      });
      return gifs;
    });
}
