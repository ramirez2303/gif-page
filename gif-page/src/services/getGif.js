import { APY_KEY, APY_URL } from "./settings";

export default function getGif(
  { keyword = "", limit = 10, page = 0 } = {}
) {
  const apiURL = `${APY_URL}/search?api_key=${APY_KEY}&q=${keyword}&limit=${limit}&offset=${page * limit}&rating=r&lang=en`;

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
