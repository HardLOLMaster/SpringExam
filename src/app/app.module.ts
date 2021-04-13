import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ContractsComponent} from './contracts/contracts.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helper/auth.guard';
import {ContractComponent} from "./contract/contract.component";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContractsComponent,
    ContractComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContractsComponent, canActivate: [AuthGuard]},
      {path: 'contract', component: ContractComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
