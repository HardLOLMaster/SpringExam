import {Component, OnInit} from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";
import {RequestService} from "../services/request.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {PropertyInsuranceContract} from "../domain/property.insurance.contract";

@Component({
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contract: PropertyInsuranceContract;
  loginForm: FormGroup;

  constructor(
    private router: Router,
    private requestService: RequestService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
  ) {
    this.requestService.contract.subscribe(value => this.contract = value);
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      insuranceSum: ['', Validators.required],
      insurancePeriodFrom: ['', Validators.required],
      insurancePeriodTo: ['', Validators.required],
    });
  }

  onSubmit() {

  }
}
