const baseUrl = 'http://api.giphy.com/v1/gifs/random';

module.exports = function createGiphyService(apiKey) {
  return {
    getRandomGif(tag) {
      return fetch(`${baseUrl}?api_key=${apiKey}&tag=${tag}`)
        .then(response => response.json())
        .then(json => {
          return json.data;
        });
    },
  };
}
