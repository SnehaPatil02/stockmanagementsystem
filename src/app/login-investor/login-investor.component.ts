import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-investor',
  templateUrl: './login-investor.component.html',
  styleUrls: ['./login-investor.component.css']
})
export class LoginInvestorComponent implements OnInit {
  userName: any;
  password: any;

  error;
  message;
  constructor(private admin: AdminService,
              private router: Router
    ) { }

  loginInvestor(form: NgForm) {
    this.admin.login(form.value).subscribe(res => {
      console.log(res);
      if (res.statusCode === 201) {
        localStorage.setItem('adminDetails', JSON.stringify(res));
        console.log('admin details stored in local storage');
        this.router.navigateByUrl('/investor-home');
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
