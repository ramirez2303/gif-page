import { APY_KEY, APY_URL } from "./settings";

export default function getTrendGifs() {
  const apiURL = `${APY_URL}/trending?api_key=${APY_KEY}&limit=8&rating=r`;

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
