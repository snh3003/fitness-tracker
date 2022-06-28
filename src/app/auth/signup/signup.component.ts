import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/shared/ui.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit, OnDestroy {
  isLoading = false;
  maxDate: any;
  loadingSubs: Subscription;

  constructor(private authService: AuthService, private uiService: UiService) {}

  ngOnInit(): void {
    this.loadingSubs = this.uiService.isLoadingChanged.subscribe(
      (isLoading) => (this.isLoading = isLoading)
    );
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear() - 21);
  }

  onSubmit = (form: NgForm) => {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    });
  };

  ngOnDestroy(): void {
    this.loadingSubs.unsubscribe();
  }
}
