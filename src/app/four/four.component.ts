import { Component, OnInit } from '@angular/core';
import { CommonService } from '../services/common.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-four',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.css']
})
export class FourComponent implements OnInit {
  testData: any;
  loginForm: FormGroup;
  showForgotPassword: boolean = false;

  constructor(public cs: CommonService, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.testData = this.cs.getData();
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      forgotEmail: ['', [Validators.required, Validators.email]]
    });
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  get forgotEmail() {
    return this.loginForm.get('forgotEmail');
  }

  onSubmit() {
    console.log(this.loginForm.valid)
    // if (this.showForgotPassword) {
    //   // Handle forgot password logic
    //   if (this.loginForm.get('forgotEmail').invalid) {
    //     return;
    //   }
    //   console.log('Forgot Password:', this.forgotEmail.value);
    // } else {
    //   // Handle login logic
    //   if (this.loginForm.invalid) {
    //     return;
    //   }
    //   console.log('Login:', this.email.value, this.password.value);
    // }
    // // Redirect to the home page
    // this.router.navigate(['/home']);
  }

  toggleForgotPassword() {
    this.showForgotPassword = !this.showForgotPassword;
    // Reset form when toggling forgot password
    this.loginForm.reset();
  }
}
