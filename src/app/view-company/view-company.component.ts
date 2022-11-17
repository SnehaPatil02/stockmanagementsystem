import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-company',
  templateUrl: './view-company.component.html',
  styleUrls: ['./view-company.component.css']
})
export class ViewCompanyComponent implements OnInit {
  message: string;
  companies: Company[];
  constructor(private managerService: ManagerService,
    private router: Router) {
    this.viewAllCompanies();
  }

  updateCompany(company) {
    this.router.navigate([`edit-company/${company.companyID}`],
      {
        queryParams: {
          companyName: company.companyName,
          companyDirector: company.companyDirector,
          companyChairman: company.companyChairman,
          companyEmail: company.companyEmail,
          companyPhone: company.companyPhone,
          companyCity: company.companyCity,
          maxInvest: company.maxInvest,
          maxStocksPurchase: company.maxStocksPurchase
        }
      });
  }

  viewAllCompanies() {
    this.managerService.viewCompany().subscribe(response => {
      console.log(response);
      this.companies = response.companies;
    }, err => {
      console.log(err);
    });
  }
  deleteCompany(company: Company) {
    this.managerService.deleteCompany(company).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        this.companies.splice(this.companies.indexOf(company), 1);
        this.message = res.message;
      }
    });
  }


  ngOnInit() {
  }

}
