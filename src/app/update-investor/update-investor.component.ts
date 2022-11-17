import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-investor',
  templateUrl: './update-investor.component.html',
  styleUrls: ['./update-investor.component.css']
})
export class UpdateInvestorComponent implements OnInit {
  investerID1;
  investerName1;
  investerCity1;
  investerPhone1;
  investerEmail1;
  investerPostal1;

  constructor(
    private investerService: ManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(data => {
      console.log(data.investerID);
      this.investerID1 = data.investerID;
    });

    activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.investerName1 = data.investerName;
      this.investerPhone1 = data.investerPhone;
      this.investerEmail1 = data.investerEmail;
      this.investerCity1 = data.investerCity;
      this.investerPostal1 = data.investerPostal;
    });
  }
  updateInvester(form: NgForm) {
    this.investerService.updateInvesterDetails(form.value).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        console.log('Invester Updated Successfuly');
        this.router.navigateByUrl('/invester-home');
      }
      form.reset();
    });
  }

  ngOnInit() {
  }

}
