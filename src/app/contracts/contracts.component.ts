import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../services/request.service";
import {FormBuilder} from "@angular/forms";
import {CommandObject} from "../domain/command";
import {PropertyInsuranceContract} from "../domain/contract";

@Component({
  templateUrl: './contracts.component.html',
  styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {
  contracts: PropertyInsuranceContract[];

  constructor(
    private router: Router,
    private requestService: RequestService,
    // private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
  }

  openByDblclick(contract: PropertyInsuranceContract): void {
    this.refresh()
  }

  ngOnInit(): void {
    this.refresh();
  }

  refresh(): void {
    const commandObject = new CommandObject();
    commandObject.command = 'getAllContractsAction';
    this.requestService.request(commandObject).subscribe(value => this.contracts = value.payload);
  }
}
