import {Individual} from "./individual";
import {PropertyInsuranceObject} from "./property.insurance.object";

export class PropertyInsuranceContract {
  id: number;
  number: string;
  insurancePeriodFrom: Date;
  insurancePeriodTo: Date;
  calculateDate: Date;
  conclusionDate: Date;
  insurer: Individual;
  insuranceObject: PropertyInsuranceObject;
}
