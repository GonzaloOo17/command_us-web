import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SidebarModule } from './shared/sidebar/sidebar.module';
import { NavbarModule } from './shared/navbar/navbar.module';
import { AdminLayoutModule } from './layouts/admin-layout/admin-layout.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Cookie } from "ng2-cookies";
import { CardEditComponent } from './pages/admin-dashboard/card-edit/card-edit.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoadingModalComponent } from './components/ui/loading-modal/loading-modal.component';
import { RestaurantAddComponent } from './pages/admin-dashboard/restaurant-add/restaurant-add.component';
import { RestaurantsDetailComponent } from './pages/admin-dashboard/restaurants-detail/restaurants-detail.component';
import { CardClientComponent } from './pages/card-client/card-client.component';
import { CardAddComponent } from './pages/admin-dashboard/card-add/card-add.component';
import { SuccessmodalComponent } from './components/ui/successmodal/successmodal.component';
import { RegisterComponent } from './pages/register/register.component';
import { GetQRModalComponent } from './components/ui/get-qr-modal/get-qr-modal.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    CardEditComponent,
    FooterComponent,
    LoadingModalComponent,
    RestaurantAddComponent,
    RestaurantsDetailComponent,
    CardClientComponent,
    CardAddComponent,
    SuccessmodalComponent,
    RegisterComponent,
    GetQRModalComponent
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
