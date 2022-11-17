import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {
  constructor(private userService: ManagerService) { }
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

}
