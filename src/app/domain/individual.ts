import {Document} from "./document";

export class Individual {
  id: number;
  lastName: string;
  firstName: string;
  secondName: string;
  birthdate: Date;
  citizenship: string;
  document: Document;

  getFullName(): string {
    let firstName = this.firstName ? this.firstName : '';
    let lastName = this.lastName ? this.lastName : '';
    let secondName = this.secondName ? this.secondName : '';
    let s = firstName + ' ' + lastName + ' ' + secondName;
    return s.trim();
  }
}
