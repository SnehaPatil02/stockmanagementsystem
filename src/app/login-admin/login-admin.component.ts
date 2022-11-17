import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { AdminService } from '../admin.service';


@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {
  userName: any;
  password: any;

  error;
  message;
  constructor(private admin: AdminService,
              private router: Router
    ) { }

    loginAdmin(form: NgForm) {
    this.admin.login(form.value).subscribe(res => {
      console.log(res);
      if (res.statusCode === 201) {
        localStorage.setItem('adminDetails', JSON.stringify(res));
        console.log('admin details stored in local storage');
        this.router.navigateByUrl('/admin-home');
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
