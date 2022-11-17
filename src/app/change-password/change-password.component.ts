import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent implements OnInit {
  constructor(public managerService: ManagerService,
    private router: Router) { }

changePassword(form: NgForm) {
this.managerService.changePassword(form.value).subscribe(response => {
console.log(response);
if (response.statusCode === 201) {
this.router.navigateByUrl('manager-home');
}
form.reset();
});
}
  ngOnInit() {
  }

}
