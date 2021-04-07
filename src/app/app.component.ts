import {Component} from '@angular/core';
import {Principal} from './domain/principal';
import {RequestService} from './services/request.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  principal: Principal;

  constructor(
    private requestService: RequestService
  ) {
    this.requestService.principal.subscribe(x => this.principal = x);
  }

  logout(): void {
    this.requestService.logout();
  }
}
