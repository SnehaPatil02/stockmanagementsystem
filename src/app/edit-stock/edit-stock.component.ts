import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-stock',
  templateUrl: './edit-stock.component.html',
  styleUrls: ['./edit-stock.component.css']
})
export class EditStockComponent implements OnInit {
  stockID1;
  companyName1;
  companyID1;
  currentPrice1;
  lastPrice1;
  changePercentage1;
  availableStocks1;
  totalStocks1;

  constructor(
    private managerService: ManagerService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(data => {
      console.log(data.stockID);
      this.stockID1 = data.stockID;
      console.log('IM STTOCK ID :............:', this.stockID1);
    });

    activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.companyName1 = data.companyName;
      this.companyID1 = data.companyID;
      this.currentPrice1 = data.currentPrice;
      this.lastPrice1 = data.lastPrice;
      this.changePercentage1 = data.changePercentage;
      this.availableStocks1 = data.availableStocks;
      this.totalStocks1 = data.totalStocks;
    });
  }
  updateStocks(form: NgForm) {
    console.log(form.value);

    this.managerService.updateStocks(form.value).subscribe(res => {
      console.log(res);

      if (res.message === 'Success') {
        console.log('stock details Updated Successfuly');
        this.router.navigateByUrl('/view-stocks');
      }

      form.reset();
    });
  }


  ngOnInit() {
  }

}
