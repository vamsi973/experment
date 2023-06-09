import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { NgClass, NgIf } from '@angular/common';
import { Router, ActivatedRoute, RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoaderService } from 'src/app/services/loader.service';
import { AlertService } from 'src/app/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  // standalone: true,
  // imports: [ReactiveFormsModule, NgClass, NgIf, RouterLink]
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  loading = false;
  submitted = false;
  loading$ = this.loader.isLoading$;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthenticationService,
    private alertService: AlertService,
    private loader: LoaderService,
    private titleService: Title

  ) {
    // redirect to home if already logged in
    if (this.auth.userValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.titleService.setTitle('login-Qrscan');

    this.form = this.formBuilder.group({
      userId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {
    this.submitted = true;
    // reset alerts on submit
    this.alertService.clear();
    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }
    console.log(this.form.value, 52)
    this.loading = true;
    this.auth.login(this.form.value)
      .pipe(first())
      .subscribe({
        next: () => {
          // get return url from query parameters or default to home page
          const returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
          this.router.navigateByUrl(returnUrl);
        },
        error: error => {
          console.log(error, 65)
          this.alertService.error(error);
          this.loading = false;
        }
      });
  }
}
