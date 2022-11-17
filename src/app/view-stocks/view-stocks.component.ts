import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-stocks',
  templateUrl: './view-stocks.component.html',
  styleUrls: ['./view-stocks.component.css']
})
export class ViewStocksComponent implements OnInit {
  message: string;
  stocks: Stock[];
  constructor(private managerService: ManagerService,
              private router: Router) {
      this.viewAllStocks();  }

      updateStocks(stock) {
        this.router.navigate([`edit-stock/${stock.stockID}`],
        {
           queryParams: {
          companyName: stock.companyName,
          companyID: stock.companyID,
          currentPrice: stock.currentPrice,
          lastPrice: stock.lastPrice,
          changePercentage: stock.changePercentage,
          availableStocks: stock.availableStocks,
          totalStocks: stock.totalStocks,
        }});
      }

        viewAllStocks() {
          this.managerService.viewStocks().subscribe(response => {
            console.log(response);
            this.stocks = response.stocks;
          }, err => {
            console.log(err);
          });
        }
        deleteStocks(stock: Stock) {
          this.managerService.deleteStocks(stock).subscribe(res => {
            console.log(res);
            if (res.message === 'Success') {
              this.stocks.splice(this.stocks.indexOf(stock), 1);
              this.message = res.message;
            }
          });
        }

  ngOnInit() {
  }

}
