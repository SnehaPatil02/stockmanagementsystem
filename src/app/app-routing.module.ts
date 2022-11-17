import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HeaderComponent } from './header/header.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginInvestorComponent } from './login-investor/login-investor.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HomeComponent } from './home/home.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { ViewInvestorComponent } from './view-investor/view-investor.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { ViewStocksComponent } from './view-stocks/view-stocks.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvestorComponent } from './investor/investor.component';
import { InvestorHomeComponent } from './investor-home/investor-home.component';
import { UpdateInvestorComponent } from './update-investor/update-investor.component';
import { ViewAllCompanyComponent } from './view-all-company/view-all-company.component';
import { ViewAllStockinfoComponent } from './view-all-stockinfo/view-all-stockinfo.component';
import { PurchaseStocksComponent } from './purchase-stocks/purchase-stocks.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'admin-login', component: LoginAdminComponent },
  { path: 'manager-login', component: LoginManagerComponent },
  { path: 'investor-login', component: LoginInvestorComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'admin-home', component: AdminHomeComponent },
  { path: 'manager-home', component: ManagerHomeComponent },
  { path: 'investor-home', component: InvestorHomeComponent },
  { path: 'add-manager', component: AddManagerComponent },
  { path: 'add-company', component: AddCompanyComponent },
  { path: 'add-stock', component: AddStockComponent },
  { path: 'view-company', component: ViewCompanyComponent },
  { path: 'view-manager', component: ViewManagerComponent },
  { path: 'view-stocks', component: ViewStocksComponent },
  { path: 'user-register', component: UserRegisterComponent },
  { path: 'investor', component: InvestorComponent },
  { path: 'edit-manager/:managerID', component: EditManagerComponent },
  { path: 'edit-company/:companyID', component: EditCompanyComponent },
  { path: 'edit-stock/:stockID', component: EditStockComponent },
  { path: 'update-invester/:investerID', component: UpdateInvestorComponent },
  { path: 'view-all-company', component: ViewAllCompanyComponent },
  { path: 'view-all-invester-stock-info', component: ViewAllStockinfoComponent },
  { path: 'view-all-stocks', component: ViewStocksComponent },
  { path: 'purchase-stocks/:stockID', component: PurchaseStocksComponent },
  { path: 'change-password', component: ChangePasswordComponent },
  { path: 'view-investor', component: ViewInvestorComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
    FormsModule,
    HttpClientModule]
})
export class AppRoutingModule { }
