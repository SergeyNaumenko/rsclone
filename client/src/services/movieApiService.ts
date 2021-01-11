export default class MovieApiService {
  private apiKey: string = 'd59637b83d0355b53f5e01b07ba35228';
  private baseUrl: string = 'https://api.themoviedb.org/3/';

  private async getResource(path: string) {
    const url: string = `${this.baseUrl}${path}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, response code is ${response.status}`);
    }

    const json = await response.json();
    return json;
  }

  public async getGenres(type: string = 'movie') {
    const path: string = `genre/${type}/list?api_key=${this.apiKey}`;
    const json = await this.getResource(path);
    return json.genres;
  }

  public async getTopRatedMovies() {
    const path: string = `movie/top_rated?api_key=${this.apiKey}&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  }

  private transformMovie(movie: any) {
    const imagesBaseUrl: string = 'https://image.tmdb.org/t/p/original';

    return {
      adult: movie.adult,
      backdrop_path: `${imagesBaseUrl}${movie.backdrop_path}`,
      genre_ids: movie.genre_ids,
      id: movie.id,
      original_language: movie.original_language,
      original_title: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      poster_path: `${imagesBaseUrl}${movie.poster_path}`,
      release_date: movie.release_date,
      title: movie.title,
      vote_average: movie.vote_average,
      vote_count: movie.vote_count
    }

  }
}