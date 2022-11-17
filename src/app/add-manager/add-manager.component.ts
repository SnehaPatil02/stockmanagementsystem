import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
export class AddManagerComponent implements OnInit {
  error: string;
  message: string;
  constructor(
    private auth: AdminService,
    private router: Router) { }

  addManager(form: NgForm) {
    this.auth.addManager(form.value).subscribe(response => {
      console.log(response);
      console.log('IM OUTSIDE....');



      if (response.message === 'Company Added Succesfully') {
        this.message = response.message;
        console.log('IM INSIDE......');
        // this.router.navigateByUrl('/admin-home');
        setTimeout(() => {
          this.message = null;
        }, 3000);
      } else {
        this.error = response.message;
        setTimeout(() => {
          this.error = null;
        }, 2000);
      }
    });
    form.reset();
  }

  ngOnInit() {
  }

}
