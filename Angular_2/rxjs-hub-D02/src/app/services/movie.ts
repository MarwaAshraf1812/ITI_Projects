import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';

export interface ApiMovieResponse {
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Genre: string;
  Poster: string;
  imdbRating: string;
}


export interface Movie {
  id: number;
  title: string;
  year: string;
  poster: string;
  rating: string;
}

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private moviesState$ = new BehaviorSubject<Movie[]>([]);
  latestResults$ = this.moviesState$.asObservable();

  private mockMovieApi(query: string): Observable<ApiMovieResponse[]> {
    const allMovies: ApiMovieResponse[] = [
      { Title: 'Inception', Year: '2010', Rated: 'PG-13', Released: '16 Jul 2010', Genre: 'Sci-Fi', Poster: 'assets/inception.jpg', imdbRating: '8.8' },
      { Title: 'Interstellar', Year: '2014', Rated: 'PG-13', Released: '07 Nov 2014', Genre: 'Adventure', Poster: 'assets/interstellar.jpg', imdbRating: '8.6' },
      { Title: 'The Dark Knight', Year: '2008', Rated: 'PG-13', Released: '18 Jul 2008', Genre: 'Action', Poster: 'assets/dark_knight.jpg', imdbRating: '9.0' },
      { Title: 'Avatar: The Way of Water', Year: '2022', Rated: 'PG-13', Released: '16 Dec 2022', Genre: 'Fantasy', Poster: 'assets/avatar.jpg', imdbRating: '7.6' }
    ];

    const filtered = allMovies.filter(movie =>
      movie.Title.toLowerCase().includes(query.toLowerCase())
    );

    return of(filtered).pipe(delay(500));
  }

  searchMoviesFromServer(query:string): Observable<Movie[]> {
    return this.mockMovieApi(query).pipe(
     map(apiMovies => {
        return apiMovies.map((m, index) => ({
          id: index + 1,
          title: m.Title,
          year: m.Year,
          poster: m.Poster,
          rating: m.imdbRating
        }));
      }),
      map(simplifiedMovies => {
        this.moviesState$.next(simplifiedMovies);
        return simplifiedMovies;
      })
    )

  }

}