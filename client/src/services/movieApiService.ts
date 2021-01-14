export default class MovieApiService {
  private apiKey: string = 'd59637b83d0355b53f5e01b07ba35228';
  private baseUrl: string = 'https://api.themoviedb.org/3/';
  private baseParams: string = `api_key=${this.apiKey}&page=1&language=en-US`;

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
    const path: string = `genre/${type}/list?${this.baseParams}`;
    const json = await this.getResource(path);
    return json.genres;
  }

  public async getTopRatedMovies() {
    const path: string = `movie/top_rated?${this.baseParams}&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  }

  public async getByGenres() {
    return this.discoverMovies('&with_genres=28');
  }

  private async discoverMovies(params: string) {
    const path = `discover/movie?${this.baseParams}&sort_by=popularity.desc&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  }

  private transformMovie(movie: any) {
    const imagesBaseUrl: string = 'https://image.tmdb.org/t/p/original';

    return {
      adult: movie.adult,
      backdropPath: `${imagesBaseUrl}${movie.backdrop_path}`,
      genreIds: movie.genre_ids,
      id: movie.id,
      originalLanguage: movie.original_language,
      originalTitle: movie.original_title,
      overview: movie.overview,
      popularity: movie.popularity,
      posterPath: `${imagesBaseUrl}${movie.poster_path}`,
      releaseDate: movie.release_date,
      title: movie.title,
      voteAverage: movie.vote_average,
      voteCount: movie.vote_count
    }

  }
}