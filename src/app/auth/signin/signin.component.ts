import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { UiService } from 'src/app/shared/ui.service';
import { AuthService } from '../auth.service';
import * as fromApp from '../../app.reducer';
import { map } from 'rxjs';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit{
  loginForm: FormGroup;
  isLoading$: Observable<boolean>;
  loadingSubs: Subscription;

  constructor(
    private authService: AuthService,
    private uiService: UiService,
    private store: Store<{ ui: fromApp.State }>
  ) {}

  ngOnInit(): void {
    this.isLoading$ = this.store.select(fromApp.getIsLoading);
    // this.loadingSubs = this.uiService.isLoadingChanged.subscribe(
    //   (isLoading) => {
    //     this.isLoading = isLoading;
    //   }
    // );
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
}
