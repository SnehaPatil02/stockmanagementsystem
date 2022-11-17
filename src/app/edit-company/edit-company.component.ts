import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.css']
})
export class EditCompanyComponent implements OnInit {
  companyID1;
  companyName1;
  companyDirector1;
  companyChairman1;
  companyEmail1;
  companyPhone1;
  companyCity1;
  maxInvest1;
  maxStocksPurchase1;

  constructor(
    private managerService: ManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(data => {
      console.log(data.companyID);
      this.companyID1 = data.companyID;
    });

    activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.companyName1 = data.companyName;
      this.companyDirector1 = data.companyDirector;
      this.companyChairman1 = data.companyChairman;
      this.companyEmail1 = data.companyEmail;
      this.companyPhone1 = data.companyPhone;
      this.companyCity1 = data.companyCity;
      this.maxInvest1 = data.maxInvest;
      this.maxStocksPurchase1 = data.maxStocksPurchase;
    });
  }
  updateCompany(form: NgForm) {
    console.log(form.value);
    console.log('IM IN UPDATE COMP..............');

    this.managerService.updateCompany(form.value).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        console.log('Comapny details Updated Successfuly');
        this.router.navigateByUrl('/view-company');
      }
      form.reset();
    });
  }


  ngOnInit() {
  }

}
