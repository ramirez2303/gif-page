export default function getTrendGifs() {
  const apiURL = `https://api.giphy.com/v1/gifs/trending?api_key=KNvPf1AGnMAdEt6XqQK1uTgLlKqlt1ia&limit=8&rating=r`;

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
