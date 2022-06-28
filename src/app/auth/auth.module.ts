import { NgModule } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [SignupComponent, SigninComponent],
  imports: [ReactiveFormsModule, AngularFireAuthModule, SharedModule],
})
export class AuthModule {}
