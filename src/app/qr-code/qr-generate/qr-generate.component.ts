import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { QrscannerService } from '../../services/qrscanner.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css']
})
export class QrGenerateComponent implements OnInit {
  qrForm: FormGroup;
  generatedQRCode: string | null = null;
  dynamicInputTrigger: Boolean = false;
  qrCodeSelected = '';
  qrOptions: { value: string, label: string }[] = [
    { value: 'url', label: 'URL' },
    { value: 'shorturl', label: 'short url' },
    { value: 'StoreUrl', label: 'App Store Url' },
    { value: 'deeplink', label: 'Deep link' }
    // Add more options as needed
  ];
  qrTypeFields: { [key: string]: { fieldName: string, validators: any[] } } = {
    "url": { fieldName: 'URL', validators: [Validators.required, Validators.pattern('^(http|https)://')] },
    "shorturl": { fieldName: 'short url', validators: [Validators.required] },
    "StoreUrl": { fieldName: 'App Store Url', validators: [Validators.required] },
    "deeplink": { fieldName: 'Deep link', validators: [Validators.required] }
    // Add more fields and validators as needed
  };
  loading = false;
  submitted = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private qrScanner: QrscannerService,
  ) {
    this.qrForm = this.formBuilder.group({
      selectedType: ['', Validators.required],
      name: ['', Validators.required],
      location: ['', Validators.required],
      url: ['', Validators.required],
      appstoreUrl: ['', Validators.required],
      playstoreUrl: ['', Validators.required],
      playstoreShortUrl: ['', Validators.required],
      appstoreShortUrl: ['', Validators.required]
    });

  }

  ngOnInit(): void {
    this.dynamicInputTrigger = false;
  }

  generateQRCode() {
    const data = 'Your data based on the selected type'; // Modify this with your data
    console.log("value is", this.qrForm.value);
    console.log("form is", this.qrForm);
    console.log(this.qrForm.invalid);
    this.submitted = true;

    // stop here if form is invalid
    if (this.qrForm.invalid) {
      return;
    }

    this.qrScanner.addQr(this.qrForm.value).subscribe(data => {
      console.log(data, 455);
      this.generatedQRCode = data['qrCode'];
      this.router.navigate(['/qrCode/list']);
    })
  }

  onQRTypeChange(qrType: any): void {
    console.log('qrtype', qrType.target.value,);
    qrType = qrType.target.value;
    this.qrCodeSelected = qrType;
    this.dynamicInputTrigger = true;


    // this.qrForm.reset();
    // this.qrForm.patchValue({
    //   selectedType: qrType
    // });
    this.resetInput(qrType);
  }

  resetInput(inputField: string) {
    ['location', 'url', 'appstoreUrl', 'playstoreUrl', 'playstoreShortUrl', 'appstoreShortUrl'].forEach((item) => {
      if (item == inputField) {
        this.qrForm.get(item)?.setValidators(Validators.required);
        this.qrForm.get(item)?.updateValueAndValidity();
      } else {
        this.qrForm.get(item)?.setValidators(null);
        this.qrForm.get(item)?.updateValueAndValidity();
      }
    });
  }
}
