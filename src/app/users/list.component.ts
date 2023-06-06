
import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { first } from 'rxjs/operators';


import { AuthenticationService } from '../services/authentication.service';

@Component({
    templateUrl: 'list.component.html',
    standalone: true,
    imports: [RouterLink, NgFor, NgIf]
})
export class ListComponent implements OnInit {
    users?: any[];

    constructor(
        private router: Router,
        private accountService: AuthenticationService
    ) { }

    ngOnInit() {
        this.accountService.getAll()
            .pipe(first())
            .subscribe(users => this.users = users);
    }

    deleteUser(id: string) {
        console.log("id", id);
        const user = this.users!.find(x => x._id === id);
        user.isDeleting = true;
        this.accountService.delete(id)
            .pipe(first())
            .subscribe(() => this.users = this.users!.filter(x => x.id !== id));
    }
    addUser() {
        this.router.navigate(['/users/add'])
    }
}