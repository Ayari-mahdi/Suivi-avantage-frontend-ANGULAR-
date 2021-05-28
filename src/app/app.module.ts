import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { KaramaApiComponent } from './Suivi_Avantage/karama-api/karama-api.component';
import { VersioningComponent } from './Suivi_Avantage/versioning/versioning.component';
import { NavbarComponent } from './Suivi_Avantage/navbar/navbar.component';
import { MatProgressBarModule} from '@angular/material/progress-bar';
import { InterceptorService } from './Suivi_Avantage/loader/interceptor.service';
import { MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MainNavbarComponent } from './Suivi_Avantage/main-navbar/main-navbar.component';
import { LoginComponent } from './Suivi_Avantage/login/login.component';
import { FacturationComponent } from './Suivi_Avantage/facturation/facturation.component';
import { FirstcompComponent } from './Suivi_Avantage/firstcomp/firstcomp.component';
import { PaymentComponent } from './Suivi_Avantage/payment/payment.component';
import { ChartsComponent } from './Suivi_Avantage/charts/charts.component';
import { CNSSAgentsComponent } from './Suivi_Avantage/Administrator/cnss-agents/cnss-agents.component';
import { CNSSAgentsRolesComponent } from './Suivi_Avantage/Administrator/cnss-agents-roles/cnss-agents-roles.component';
import { NewAdvantagesComponent } from './Suivi_Avantage/Administrator/new-advantages/new-advantages.component';
import { RegistrationComponent } from './Suivi_Avantage/Administrator/registration/registration.component';
import { AdminHeaderComponent } from './Suivi_Avantage/Administrator/admin-header/admin-header.component';
import { PaymentDataTableComponent } from './Suivi_Avantage/payment-data-table/payment-data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { FaultyDataComponent } from './Suivi_Avantage/faulty-data/faulty-data.component';
import { NotYetRegisteredComponent } from './Suivi_Avantage/not-yet-registered/not-yet-registered.component'; 
import {MatButtonModule} from '@angular/material/button'
import { HighchartsChartModule } from 'highcharts-angular';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ComplaintsComponent } from './Suivi_Avantage/Administrator/complaints/complaints.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
@NgModule({
  declarations: [AppComponent, KaramaApiComponent, VersioningComponent, NavbarComponent, MainNavbarComponent, LoginComponent, FacturationComponent, FirstcompComponent, PaymentComponent, ChartsComponent, CNSSAgentsComponent, CNSSAgentsRolesComponent, NewAdvantagesComponent, RegistrationComponent, AdminHeaderComponent, PaymentDataTableComponent, FaultyDataComponent, NotYetRegisteredComponent, ComplaintsComponent],
  imports: [NgMultiSelectDropDownModule,HighchartsChartModule,FlexLayoutModule,MatButtonModule,MatSidenavModule,MatInputModule,MatFormFieldModule,BrowserModule, AppRoutingModule,FormsModule, NgbModule,HttpClientModule,MatProgressBarModule,MatProgressSpinnerModule,BrowserAnimationsModule,MatSnackBarModule, MatTableModule, MatPaginatorModule, MatSortModule],
 // providers: [{provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}],
 providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
