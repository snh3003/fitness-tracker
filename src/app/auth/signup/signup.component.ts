import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  maxDate: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.maxDate = new Date();
    this.maxDate.setDate(this.maxDate.getFullYear() - 21);
  }

  onSubmit = (form: NgForm) => {
    this.authService.registerUser({
      email: form.value.email,
      password: form.value.password,
    })
  };
}
