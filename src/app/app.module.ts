import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ContractComponent} from './contracts/contract.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './helper/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ContractComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: ContractComponent, canActivate: [AuthGuard]},
      {path: 'login', component: LoginComponent},
      {path: '**', redirectTo: ''}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
