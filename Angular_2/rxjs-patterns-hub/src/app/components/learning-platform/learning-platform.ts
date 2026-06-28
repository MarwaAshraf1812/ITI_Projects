import { Component, OnDestroy, ChangeDetectorRef, inject } from '@angular/core';
import { LearningService } from '../../services/learning.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-learning-platform',
  imports: [],
  templateUrl: './learning-platform.html',
  styleUrl: '../../app.css'
})
export class LearningPlatformComponent implements OnDestroy {
  learningService = inject(LearningService);
  cdr = inject(ChangeDetectorRef);

  logs: string[] = [];
  demoResults: string[] = [];
  private subs: Subscription[] = [];

  isLoggedIn = false;
  currentStep = 'Not Started';
  completedSteps: string[] = [];
  isOnboarding = false;

  constructor() {
    const logSub = this.learningService.activities$.subscribe(msg => {
      this.logs.unshift(msg);
      this.cdr.detectChanges();
    });

    const authSub = this.learningService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
      this.cdr.detectChanges();
    });

    this.subs.push(logSub, authSub);
  }

  onLogin() {
    if (this.isLoggedIn) return;
    this.learningService.login();

    this.isOnboarding = true;
    this.currentStep = 'Initializing onboarding...';
    this.completedSteps = [];
    this.cdr.detectChanges();

    const onboardingSub = this.learningService.getOnboardingWorkflow().subscribe({
      next: (step) => {
        this.currentStep = step;
        if (step.includes('Step 1')) this.completedSteps.push('Step 1');
        if (step.includes('Step 2')) this.completedSteps.push('Step 2');
        if (step.includes('Step 3')) this.completedSteps.push('Step 3');
        this.learningService.logAction(step);
        this.cdr.detectChanges();
      },
      error: (err) => {
        this.currentStep = 'Error occurred during onboarding.';
        this.isOnboarding = false;
        this.cdr.detectChanges();
      },
      complete: () => {
        this.isOnboarding = false;
        this.cdr.detectChanges();
      }
    });

    this.subs.push(onboardingSub);
  }

  onLogout() {
    this.learningService.logout();
    this.currentStep = 'Not Started';
    this.completedSteps = [];
    this.isOnboarding = false;
    this.cdr.detectChanges();
  }

  onEnroll() {
    if (!this.isLoggedIn) {
      alert('Please Login first!');
      return;
    }
    this.learningService.logAction('User Enrolled in Course #101');
  }

  testCold() {
    this.demoResults = ['--- Cold Test Results ---'];
    this.learningService.getColdExample().subscribe(val => {
      this.demoResults.push(`Subscriber 1 got: ${val}`);
      this.cdr.detectChanges();
    });
    this.learningService.getColdExample().subscribe(val => {
      this.demoResults.push(`Subscriber 2 got: ${val}`);
      this.cdr.detectChanges();
    });
  }

  testHot() {
    this.demoResults = ['--- Hot Test Results ---'];
    this.learningService.getHotExample().subscribe(val => {
      this.demoResults.push(`Subscriber 1 got: ${val}`);
      this.cdr.detectChanges();
    });
    this.learningService.getHotExample().subscribe(val => {
      this.demoResults.push(`Subscriber 2 got: ${val}`);
      this.cdr.detectChanges();
    });
    
    this.learningService.emitHotValue();
  }

  ngOnDestroy() {
    this.subs.forEach(s => s.unsubscribe());
  }
}