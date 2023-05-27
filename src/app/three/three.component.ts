import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { QrscannerService } from '../services/qrscanner.service';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.css']
})
export class ThreeComponent implements OnInit {
  form: FormGroup;
  errorText: string = '';
  imageData: string = '';
  constructor(private fb: FormBuilder,
    private http: HttpClient,
    private qrService: QrscannerService
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.required],
      purpose: ['', Validators.required],
      qrtext: ['']
    });
  }

  submitForm() {
    if (this.form.valid) {
      const formData = this.form.value;
      // Call the API service method to create the menu
      this.qrService.addQr(formData).subscribe(
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
