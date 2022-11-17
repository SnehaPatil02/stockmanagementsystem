import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ManagerService {
  selectedPasswordToUpdate: Admin;
  investerEmailDefualt;
  url = 'http://localhost:8080';

  constructor(private http: HttpClient) { }

  addCompany(companyBean: any): Observable<any> {
    return this.http.post<any>(`${this.url}/add-company`, companyBean);
  }
  updateCompany(companyBeanToUpdate): Observable<any> {
    return this.http.put<any>(
      `${this.url}/update-company`, companyBeanToUpdate);
  }
  viewCompany(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-allcompany`);
  }
  deleteCompany(company: Company): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete-company/${company.companyID}`);
  }
  updateManager(managerBeanToUpdate): Observable<any> {
    return this.http.put<any>(
      `${this.url}/update-manager`, managerBeanToUpdate);
  }

  viewManagers(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-allmanager`);
  }
  deleteManager(manager: Manager): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete-manager/${manager.managerID}`);
  }
  addManager(managers): Observable<any> {
    return this.http.post<any>(`${this.url}/add-user`, managers);
  }
  addStock(stocks): Observable<any> {
    return this.http.post<any>(`${this.url}/add-stock`, stocks);
  }
  updateStocks(managerBeanToUpdate): Observable<any> {
    return this.http.put<any>(
      `${this.url}/update-stocks`, managerBeanToUpdate);
  }

  viewStocks(): Observable<any> {
    return this.http.get<any>(`${this.url}/get-allstocks`);
  }
  deleteStocks(stock: Stock): Observable<any> {
    return this.http.delete<any>(`${this.url}/delete-stocks/${stock.stockID}`);
  }

  changePassword(admin): Observable<any> {
    return this.http.put<any>(
      `${this.url}/updatePassword`, admin);

  }

  searchInvester(investerEmail): Observable<any> {
    return this.http.get<any>(`${this.url}/search-invester-by-email?investerEmail=${investerEmail}`);
  }
  updateInvesterDetails(investerToUpdate): Observable<any> {
    return this.http.put<any>(`${this.url}/update-invester`, investerToUpdate);
  }
  loginUser(InvesterCredentials): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, InvesterCredentials);
  }
  registerInvester(investerBean): Observable<any> {
    return this.http.post<any>(`${this.url}/add-invester`, investerBean);
  }
  viewMyStockInfo(investerID): Observable<any> {
    console.log('HELLOOO IM IN INVESTER SERVICES......::::', investerID);
    return this.http.get<any>(`${this.url}/search-stock-Info-by-ivesterid?investerID=${investerID}`);
  }
  addInvesterStockPurchases(investerStockInfoBean): Observable<any> {
    return this.http.post<any>(`${this.url}/add-stock-info`, investerStockInfoBean);
  }
}
