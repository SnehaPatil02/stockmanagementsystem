import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-investor',
  templateUrl: './investor.component.html',
  styleUrls: ['./investor.component.css']
})
export class InvestorComponent implements OnInit {

  constructor(private userService: ManagerService,
    private router: Router) { }
  message;
  error;

  ngOnInit() {
  }
  addManager(form: NgForm) {
    this.userService.addManager(form.value).subscribe(data => {
      if (data.statusCode === 201) {
        console.log(data);
        this.message = data.description;
      } else {
        console.log(data);
        this.error = data.description;
      }
      setTimeout(() => {
        this.message = null;
      }, 2000);
      form.reset();
    }
    );

  }

  selectedInvestor() {
    this.router.navigateByUrl('/investor-login');
  }

}
