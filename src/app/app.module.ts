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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminLayoutComponent,
    CardEditComponent,
    FooterComponent,
    LoadingModalComponent,
    RestaurantAddComponent
   
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    SidebarModule,
    NavbarModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
