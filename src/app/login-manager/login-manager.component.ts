import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-manager',
  templateUrl: './login-manager.component.html',
  styleUrls: ['./login-manager.component.css']
})
export class LoginManagerComponent implements OnInit {
  userName: any;
  password: any;

  error;
  message;
  constructor(private admin: AdminService,
              private router: Router
    ) { }

    loginManager(form: NgForm) {
    this.admin.login(form.value).subscribe(res => {
      console.log(res);
      if (res.statusCode === 201) {
        localStorage.setItem('adminDetails', JSON.stringify(res));
        console.log('manager details stored in local storage');
        this.router.navigateByUrl('/manager-home');
        setTimeout(() => {
          this.message = null;
        }, 5000);
      } else {
        this.error = res.description;
        console.log(this.error);
      }

    });

  }

  ngOnInit() {
  }

}
