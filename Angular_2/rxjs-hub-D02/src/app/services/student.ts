import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject, Subject, combineLatest, of } from 'rxjs';
import { debounceTime, switchMap, map, startWith, delay } from 'rxjs/operators';
export interface Student {
  id: number;
  name: string;
  department: string;
}

@Injectable({
  providedIn: 'root',
})
export class StudentService {
    private studentsState$ = new BehaviorSubject<Student[]>([]);
  currentStudents$ = this.studentsState$.asObservable();

  searchAction$ = new Subject<string>();
  filterAction$ = new Subject<string>();
  refreshAction$ = new Subject<void>();

  private mockApiFetch(): Observable<Student[]> {
    return of([
      { id: 1, name: 'Ahmed', department: 'CS' },
      { id: 2, name: 'Ali', department: 'IS' },
      { id: 3, name: 'Omar', department: 'IT' },
      { id: 4, name: 'Maged', department: 'CS' },
    ]).pipe(delay(1000));
  }

  getFilteredStudents(): Observable<Student[]> {
    return combineLatest([
      this.searchAction$.pipe(startWith(''), debounceTime(300)),
      this.filterAction$.pipe(startWith('All')),
      this.refreshAction$.pipe(startWith(undefined))
    ]).pipe(
      switchMap(([search, filter]) => {
        console.log(search, filter);
        return this.mockApiFetch().pipe(
          map(students => 
            students.filter(student => {
              if (filter === 'All') {
                return student.name.toLowerCase().includes(search.toLowerCase());
              }
              return student.department === filter &&
                student.name.toLowerCase().includes(search.toLowerCase());
            })
          )
        );
      })
    )
  }
  
}
