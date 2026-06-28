import { Injectable } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LearningService {

  private activitySubject = new Subject<string>();
  activities$ = this.activitySubject.asObservable();

  private authStatus = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.authStatus.asObservable();

  logAction(action: string) {
    const time = new Date().toLocaleTimeString();
    this.activitySubject.next(`[${time}] ${action}`);
  }

  login() {
    this.authStatus.next(true);
    this.logAction('User Logged In');
  }

  logout() {
    this.authStatus.next(false);
    this.logAction('User Logged Out');
  }

  getOnboardingWorkflow(): Observable<string> {
    return new Observable(sub => {
      this.logAction('Starting Onboarding...');
      
      let t1 = setTimeout(() => sub.next('Step 1: Setting up your profile...'), 1000);
      let t2 = setTimeout(() => sub.next('Step 2: Exploring available courses...'), 2500);
      let t3 = setTimeout(() => sub.next('Step 3: Finalizing your dashboard...'), 4000);
      let t4 = setTimeout(() => {
        sub.next('Onboarding Complete! 🎉');
        sub.complete();
      }, 5000);

      return () => {
        clearTimeout(t1);
        clearTimeout(t2);
        clearTimeout(t3);
        clearTimeout(t4);
      };
    });
  }

  getColdExample(): Observable<number> {
    return new Observable(sub => {
      const randomNum = Math.floor(Math.random() * 1000);
      sub.next(randomNum);
      sub.complete();
    });
  }

  private hotSubject = new Subject<number>();
  getHotExample(): Observable<number> {
    return this.hotSubject.asObservable();
  }

  emitHotValue() {
    const randomNum = Math.floor(Math.random() * 1000);
    this.hotSubject.next(randomNum);
  }
}