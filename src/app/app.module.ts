import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { ManagerHomeComponent } from './manager-home/manager-home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginAdminComponent } from './login-admin/login-admin.component';
import { LoginManagerComponent } from './login-manager/login-manager.component';
import { LoginInvestorComponent } from './login-investor/login-investor.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ViewCompanyComponent } from './view-company/view-company.component';
import { ViewManagerComponent } from './view-manager/view-manager.component';
import { ViewInvestorComponent } from './view-investor/view-investor.component';
import { AddStockComponent } from './add-stock/add-stock.component';
import { EditManagerComponent } from './edit-manager/edit-manager.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { ViewStocksComponent } from './view-stocks/view-stocks.component';
import { AddInvestorComponent } from './add-investor/add-investor.component';
import { EditStockComponent } from './edit-stock/edit-stock.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { InvestorComponent } from './investor/investor.component';
import { InvestorHomeComponent } from './investor-home/investor-home.component';
import { PurchaseStocksComponent } from './purchase-stocks/purchase-stocks.component';
import { UpdateInvestorComponent } from './update-investor/update-investor.component';
import { ViewAllCompanyComponent } from './view-all-company/view-all-company.component';
import { ViewAllStockinfoComponent } from './view-all-stockinfo/view-all-stockinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminHomeComponent,
    ManagerHomeComponent,
    AboutUsComponent,
    ContactUsComponent,
    PageNotFoundComponent,
    LoginAdminComponent,
    LoginManagerComponent,
    LoginInvestorComponent,
    UserComponent,
    HomeComponent,
    AddCompanyComponent,
    AddManagerComponent,
    ViewCompanyComponent,
    ViewManagerComponent,
    ViewInvestorComponent,
    AddStockComponent,
    EditManagerComponent,
    EditCompanyComponent,
    UserRegisterComponent,
    ViewStocksComponent,
    AddInvestorComponent,
    EditStockComponent,
    ChangePasswordComponent,
    InvestorComponent,
    InvestorHomeComponent,
    PurchaseStocksComponent,
    UpdateInvestorComponent,
    ViewAllCompanyComponent,
    ViewAllStockinfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
