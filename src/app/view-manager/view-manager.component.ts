import { Component, OnInit } from '@angular/core';
import { ManagerService } from '../manager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-manager',
  templateUrl: './view-manager.component.html',
  styleUrls: ['./view-manager.component.css']
})
export class ViewManagerComponent implements OnInit {
  message: string;
  managers: Manager[];
  constructor(private managerService: ManagerService,
              private router: Router) {
                this.viewAllManagers();  }

                updateManager(manager) {
                  this.router.navigate([`edit-manager/${manager.managerID}`],
                  { queryParams: {
                    managerName: manager.managerName,
                    managerCompany: manager.managerCompany,
                    managerPhone: manager.managerPhone,
                    managerEmail: manager.managerEmail,
                    managerCity: manager.managerCity,
                    managerPostal: manager.managerPostal
                  }});
                }

                  viewAllManagers() {
                    this.managerService.viewManagers().subscribe(response => {
                      console.log(response);
                      this.managers = response.managers;
                    }, err => {
                      console.log(err);
                    });
                  }
                  deleteManager(manager: Manager) {
                    this.managerService.deleteManager(manager).subscribe(res => {
                      console.log(res);
                      if (res.message === 'Success') {
                        this.managers.splice(this.managers.indexOf(manager), 1);
                        this.message = res.message;
                      }
                    });
                  }

  ngOnInit() {
  }

}
