import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/shared/ui.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit, OnDestroy {
  loginForm: FormGroup;
  isLoading = false;
  loadingSubs: Subscription;

  constructor(private authService: AuthService, private uiService: UiService) {}

  ngOnInit(): void {
    this.loadingSubs = this.uiService.isLoadingChanged.subscribe(
      (isLoading) => {
        this.isLoading = isLoading;
      }
    );
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email],
      }),
      password: new FormControl('', { validators: [Validators.required] }),
    });
  }

  onSubmit = (form: NgForm) => {
    this.authService.login({
      email: form.value.email,
      password: form.value.password,
    });
  };

  ngOnDestroy(): void {
    this.loadingSubs.unsubscribe();
  }
}
