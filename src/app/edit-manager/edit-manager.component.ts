import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-manager',
  templateUrl: './edit-manager.component.html',
  styleUrls: ['./edit-manager.component.css']
})
export class EditManagerComponent implements OnInit {
  managerID1;
  managerName1;
  managerCompany1;
  managerPhone1;
  managerEmail1;
  managerCity1;
  managerPostal1;

  constructor(
    private managerService: ManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(data => {
      console.log(data.managerID);
      this.managerID1 = data.managerID;
    });

    activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.managerName1 = data.managerName;
      this.managerCompany1 = data.managerCompany;
      this.managerPhone1 = data.managerPhone;
      this.managerEmail1 = data.managerEmail;
      this.managerCity1 = data.managerCity;
      this.managerPostal1 = data.managerPostal;
    });
  }
  updateManager(form: NgForm) {
    console.log(form.value);
    this.managerService.updateManager(form.value).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        console.log('Manager Updated Successfuly');
        this.router.navigateByUrl('/view-manager');
      }
      form.reset();
    });
  }
  ngOnInit() {
  }

}
