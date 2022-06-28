import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { AuthData } from './auth-data.model';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { TrainingService } from '../training/training/training.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UiService } from '../shared/ui.service';

@Injectable()
export class AuthService {
  authChange = new Subject<boolean>();
  private isAuthenticated: Boolean = false;

  constructor(
    private router: Router,
    private fireAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private snackBar: MatSnackBar,
    private uiService: UiService
  ) {}

  registerUser(authData: AuthData) {
    this.uiService.isLoadingChanged.next(true);
    this.fireAuth
      .createUserWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.uiService.isLoadingChanged.next(false);
        console.log(result);
      })
      .catch((error) => {
        this.uiService.isLoadingChanged.next(false);
        this.snackBar.open(error.message, null, {
          duration: 3000,
        });
      });
  }

  login(authData: AuthData) {
    this.uiService.isLoadingChanged.next(true);
    this.fireAuth
      .signInWithEmailAndPassword(authData.email, authData.password)
      .then((result) => {
        this.uiService.isLoadingChanged.next(false);
        this.snackBar.open('Login successful', null, {
          duration: 3000,
        });
      })
      .catch((error) => {
        this.uiService.isLoadingChanged.next(false);
        this.snackBar.open(error.message, null, {
          duration: 3000,
        });
      });
  }

  logout() {
    this.trainingService.cancelSubcriptions();
    this.fireAuth.signOut();
  }

  isAuth() {
    return this.isAuthenticated;
  }

  initAuthListener() {
    this.fireAuth.authState.subscribe((user) => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/training']);
      } else {
        this.isAuthenticated = false;
        this.authChange.next(false);
        this.router.navigate(['/signin']);
      }
    });
  }
}
