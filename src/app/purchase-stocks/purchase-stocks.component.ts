import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ManagerService } from '../manager.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-purchase-stocks',
  templateUrl: './purchase-stocks.component.html',
  styleUrls: ['./purchase-stocks.component.css']
})
export class PurchaseStocksComponent implements OnInit {
  stockID1: number;
  investerID1: number;
  companyName1: string;
  companyID1: number;
  purchasedPrice1: number;
  currentPrice1: number;

  investerStockInfo: InvesterStockInfo[];

  constructor(
    private investerService: ManagerService ,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    activatedRoute.params.subscribe(data => {
      console.log(data.stockID);
      this.stockID1 = data.stockID;
    });
    activatedRoute.queryParams.subscribe(data => {
      console.log(data);
      this.investerID1 = data.investerID;
      this.companyName1 = data.companyName;
      this.companyID1 = data.companyID;
      this.purchasedPrice1 = data.purchasedPrice;
      this.currentPrice1 = data.currentPrice;
    });
  }
  addInvesterStockInfo(form: NgForm) {
    this.investerService.addInvesterStockPurchases(form.value).subscribe(res => {
      console.log(res);
      if (res.message === 'Success') {
        console.log('Purchased data added Successfuly');
        this.router.navigateByUrl('/view-all-invester-stock-info');
      }
      form.reset();
    });
  }

  ngOnInit() {
  }

}
