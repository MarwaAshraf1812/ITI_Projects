import { Component, OnInit, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService, Movie } from '../../services/movie';
import { Subscription, Subject, throwError, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, switchMap, catchError, map } from 'rxjs/operators';

@Component({
  selector: 'app-movie-search',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-hub.html',
})
export class MovieHub implements OnInit, OnDestroy {
  private movieService = inject(MovieService);
  private cdr = inject(ChangeDetectorRef);

  moviesList: Movie[] = [];
  isLoading = false;
  errorMessage = '';

  private searchSubject$ = new Subject<string>();
  private subs: Subscription[] = [];

  ngOnInit(): void {
    const stateSub = this.movieService.latestResults$.subscribe(list => {
      this.moviesList = list;
      this.cdr.detectChanges();
    });
    this.subs.push(stateSub);

    const searchPipelineSub = this.searchSubject$.pipe(
      map(text=> text.trim()),
      filter(query => query.length >= 2),
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(query => {
        this.isLoading = true;
        this.errorMessage = '';
        this.cdr.detectChanges();

        return this.movieService.searchMoviesFromServer(query).pipe(
          catchError(error => {
            this.errorMessage = error;
            this.isLoading = false;
            this.cdr.detectChanges();
            return of([]);
          })
        );
      })
    ).subscribe(results => {
      this.moviesList = results;
      this.isLoading = false;
      this.cdr.detectChanges();
    });
    this.subs.push(searchPipelineSub);
  }

  onTypeSearch(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.searchSubject$.next(value);
  }

  ngOnDestroy(): void {
    this.subs.forEach(s => s.unsubscribe());
  }

}