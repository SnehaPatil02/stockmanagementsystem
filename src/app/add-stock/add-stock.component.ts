import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ManagerService } from '../manager.service';

@Component({
  selector: 'app-add-stock',
  templateUrl: './add-stock.component.html',
  styleUrls: ['./add-stock.component.css']
})
export class AddStockComponent implements OnInit {


  constructor(private stocksService: ManagerService) { }
  message;
  error;
  addStock(form: NgForm) {
    this.stocksService.addStock(form.value).subscribe(data => {
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
  ngOnInit() {
  }

}
