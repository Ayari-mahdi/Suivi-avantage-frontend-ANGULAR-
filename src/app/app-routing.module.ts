import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChartsComponent } from './Suivi_Avantage/charts/charts.component';
import { PaymentComponent } from './Suivi_Avantage/payment/payment.component';
import { FacturationComponent } from './Suivi_Avantage/facturation/facturation.component';
import { FirstcompComponent } from './Suivi_Avantage/firstcomp/firstcomp.component';
import { karama } from './Suivi_Avantage/karama';
//import { HomeComponent } from './ANGULAR-PROJECT/home/home.component';
//import { RegionsComponent } from './ANGULAR-PROJECT/regions/regions.component';
//import { CountriesComponent } from './ANGULAR-PROJECT/countries/countries.component';
//import { CountryComponent } from './ANGULAR-PROJECT/country/country.component';
//import { SpringbootComponent } from './springboot_oracle/springboot/springboot.component';
//import { UserformComponent } from './springboot_oracle/userform/userform.component';
//import { AppComponent } from './app.component';
import { KaramaApiComponent } from './Suivi_Avantage/karama-api/karama-api.component';
import { LoginComponent } from './Suivi_Avantage/login/login.component';
import { VersioningComponent } from './Suivi_Avantage/versioning/versioning.component';
import { AdminHeaderComponent } from './Suivi_Avantage/Administrator/admin-header/admin-header.component';
import { CNSSAgentsComponent } from './Suivi_Avantage/Administrator/cnss-agents/cnss-agents.component';
import { CNSSAgentsRolesComponent } from './Suivi_Avantage/Administrator/cnss-agents-roles/cnss-agents-roles.component';
import { NewAdvantagesComponent } from './Suivi_Avantage/Administrator/new-advantages/new-advantages.component';
import { FaultyDataComponent } from './Suivi_Avantage/faulty-data/faulty-data.component';
import { NotYetRegisteredComponent } from './Suivi_Avantage/not-yet-registered/not-yet-registered.component';

// const routes: Routes = [
//   {path:'country/:name',component:CountryComponent},
//   {path:'countries/:region',component:CountriesComponent},
//   {path:'home',component:HomeComponent},
//   {path:'',component:HomeComponent},
//   {path:'regions',component:RegionsComponent},
//   {path:'countries',component:CountriesComponent},
// ];
const routes: Routes = [
  //{path :'users/:id',component:SpringbootComponent},
 // { path: 'login',component:LoginComponent},
  { path: '', component:KaramaApiComponent },
  { path: 'login', component:LoginComponent },
  { path: 'Suivi-Avantage', component:FirstcompComponent },
  { path: 'home',component :KaramaApiComponent},  
  { path: 'faulty', component: FaultyDataComponent },
  { path: 'notyetregistered', component: NotYetRegisteredComponent },
  { path: 'versioning', component: VersioningComponent },
  { path: 'facturation', component: FacturationComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'charts', component: ChartsComponent },
 // {path:'admin',component: AdminHeaderComponent},
 { path: 'admin' ,component: AdminHeaderComponent,
children:[
  {path:'agents',component: CNSSAgentsComponent},
  {path:'roles',component:CNSSAgentsRolesComponent},
  {path:'avantages',component:NewAdvantagesComponent},
]},

];
@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' ,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
