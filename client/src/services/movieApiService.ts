export default class MovieApiService {
  private apiKey = 'd59637b83d0355b53f5e01b07ba35228';

  private baseUrl = 'https://api.themoviedb.org/3/';

  private baseParams = `api_key=${this.apiKey}&language=en-US`;

  private getResource = async (path: string) => {
    const url = `${this.baseUrl}${path}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Could not fetch ${url}, response code is ${response.status}`
      );
    }

    const json = await response.json();
    return json;
  };

  public getGenres = async (type = 'movie'): Promise<object[]> => {
    const path = `genre/${type}/list?${this.baseParams}`;
    const json = await this.getResource(path);
    return json.genres;
  };

  public getTopRatedMovies = async (): Promise<object[]> => {
    const path = `movie/top_rated?${this.baseParams}&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  };

  public getPopularMovies = async (): Promise<object[]> => {
    const path = `movie/popular?${this.baseParams}&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  };

  public getLatestMovies = async (): Promise<object[]> => {
    const path = `movie/latest?${this.baseParams}`;
    const json = await this.getResource(path);
    return [json].map(this.transformMovie);
  };

  public getUpcomingMovies = async (): Promise<object[]> => {
    const path = `movie/upcoming?${this.baseParams}&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  };

  public getByGenres = async (): Promise<string> => {
    return this.discoverMovies(); // ('&with_genres=28')
  };

  public getMovieById = async (id: number): Promise<object> => {
    const path = `movie/${id}?${this.baseParams}&external_source=imdb_id`;
    const json = await this.getResource(path);
    return this.transformMovie(json);
  };


  private discoverMovies = async () => {
    const path = `discover/movie?${this.baseParams}&sort_by=popularity.desc&page=1`;
    const json = await this.getResource(path);
    return json.results.map(this.transformMovie);
  };

  private transformMovie = (movie: any) => {
    const imagesBaseUrl = 'https://image.tmdb.org/t/p/original';

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
      voteCount: movie.vote_count,
    };
  };
}
