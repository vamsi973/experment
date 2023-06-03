import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { AlertService } from 'src/app/services/alert.service';

@Component({
    selector: 'alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

    private subscription!: Subscription;
    alert: any;

    constructor(private alertService: AlertService) { }

    ngOnInit() {
        this.subscription = this.alertService.onAlert()
            .subscribe(alert => {
                switch (alert?.type) {
                    case 'success':
                        alert.cssClass = 'alert alert-success';
                        break;
                    case 'error':
                        alert.cssClass = 'alert alert-danger';
                        break;
                }

                // if(typeof this.alert.message == 'object' ){
                //     this.alert = alert.message.error;
                // }
                this.alert = alert;
                if (typeof this.alert?.message == 'object') {
                    this.alert = { ...this.alert.message.error, ...{ cssClass: this.alert.cssClass } }
                }
                setTimeout(() => {
                    this.alertService.clear();
                }, 4000);
            });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }



}
