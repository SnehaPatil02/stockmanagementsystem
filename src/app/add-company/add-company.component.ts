import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {
  error: string;
  message: string;
  constructor(
    private auth: ManagerService,
    private router: Router) { }

  addCompany(form: NgForm) {
    this.auth.addCompany(form.value).subscribe(response => {
      console.log(response);
      if (response.message === 'Company Added Succesfully') {
        this.message = response.message;
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
