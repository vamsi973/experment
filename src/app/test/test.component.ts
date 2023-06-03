import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  form: FormGroup;
  errorText: string = '';
  imageData: string = '';
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private auth: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      password: ['', Validators.required],
      qrtext: ['']
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      // Call the API service method to create the menu
      this.auth.register(formData).subscribe(
        response => {
          // Handle successful response
          console.log(response);
          this.imageData = response.qrCode;
          // Reset the form or perform any other actions
        },
        (error) => {
          // Handle error response
          console.error(error);
          // Show an error message or perform any other error handling
        }
      );

    } else {
      // Mark form controls as touched to display validation errors
      this.form.markAllAsTouched();
    }
  }
}
