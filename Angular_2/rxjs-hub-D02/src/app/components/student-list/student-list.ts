import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { StudentService } from '../../services/student';
import { Subscription } from 'rxjs';

export interface Student {
  id: number;
  name: string;
  department: string;
}


@Component({
  selector: 'app-student-list',
  imports: [],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
})
export class StudentList implements OnInit, OnDestroy {
  private studentService = inject(StudentService);
  private cdr = inject(ChangeDetectorRef);

  students: Student[] = [];
  totalStudents = 0;
  isLoading = false;
  errorMessage = '';
  private studentSubscription: Subscription | null = null;

  ngOnInit(): void {
    this.listenToFilteredStudents();
  }

  listenToFilteredStudents() {
    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.detectChanges();

    this.studentSubscription = this.studentService.getFilteredStudents().subscribe({
      next: (list) => {
        this.students = list;
        this.totalStudents = list.length;
        this.isLoading = false;
        this.errorMessage = '';
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.isLoading = false;
        this.errorMessage = 'Failed to load students. Please try again.';
        this.cdr.detectChanges();
      },
      complete: () => {
        this.isLoading = false;
        this.cdr.detectChanges();
      }
    })
  }

  onSearch(event:Event) {
    const searchText = (event.target as HTMLInputElement).value;
    this.studentService.searchAction$.next(searchText);
  }

  onFilter(event:Event) {
    const filterValue = (event.target as HTMLSelectElement).value;
    this.studentService.filterAction$.next(filterValue);
  }

  onRefresh() {
    this.studentService.refreshAction$.next();
  }

  ngOnDestroy(): void {
    if (this.studentSubscription) this.studentSubscription.unsubscribe();
  }

}

