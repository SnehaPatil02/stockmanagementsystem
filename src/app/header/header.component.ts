import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  [x: string]: any;
  constructor(private router: Router) { }

  isAdmin() {
    console.log('im in IsAdmin function');

    const adminDetails = JSON.parse(localStorage.getItem('adminDetails'));
    if (adminDetails && adminDetails.users[0].userType === 'admin') {
      return true;
    } else {
      return false;
    }
  }
  isManager() {
    console.log('im in IsManager function');

    const adminDetails = JSON.parse(localStorage.getItem('adminDetails'));
    if (adminDetails && adminDetails.users[0].userType === 'manager') {
      return true;
    } else {
      return false;
    }
  }

  isInvestor() {
    console.log('im in IsManager function');

    const adminDetails = JSON.parse(localStorage.getItem('adminDetails'));
    if (adminDetails && adminDetails.users[0].userType === 'investor') {
      return true;
    } else {
      return false;
    }
  }

  ngOnInit() {
  }

  selectedAbout() {
    this.router.navigateByUrl('/about-us');
  }
  logout() {
    localStorage.removeItem('adminDetails');
    this.router.navigateByUrl('/home');
  }


}
