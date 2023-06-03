import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QrscannerService } from '../../services/qrscanner.service';

@Component({
  selector: 'app-qr-generate',
  templateUrl: './qr-generate.component.html',
  styleUrls: ['./qr-generate.component.css']
})
export class QrGenerateComponent implements OnInit {
  qrForm: FormGroup;
  generatedQRCode: string | null = null;
  qrOptions: { value: string, label: string }[] = [
    { value: 'url', label: 'URL' },
    { value: 'shorturl', label: 'short url' },
    { value: 'StoreUrl', label: 'App Store Url' },
    { value: 'deeplink', label: 'Deep link' }
    // Add more options as needed
  ];
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private qrScanner: QrscannerService
  ) {
    this.qrForm = this.formBuilder.group({
      selectedType: [''],// Initialize the selected value to an empty string
      url: [''] // Initialize the selected value to an empty string
    });
  }

  ngOnInit(): void {
  }

  generateQRCode() {
    const data = 'Your data based on the selected type'; // Modify this with your data
    console.log(this.qrForm.value);
    this.submitted = true;

    // stop here if form is invalid
    if (this.qrForm.invalid) {
      return;
    }

    this.qrScanner.addQr(this.qrForm.value).subscribe(data => {
      console.log(data, 455);
      this.generatedQRCode = data['qrCode'];
    })

  }
}
