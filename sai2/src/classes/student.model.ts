import { EmailValidator } from "@angular/forms";
import { Sai } from "src/classes/sai.model";
import { studentInterface } from "src/app/interfaces/studentInterface";
export class Student implements studentInterface{
    
    constructor( firstName:string, lastName: string, email:string, sai: Sai){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sai = sai;
    }
    firstName: string;
    lastName: string;
    email: string;
    sai: Sai;
    getName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    getEmail(): string{
        return `${this.email}`;
    }
    //getSai(): Sai{
    //    return 0;
   // }
    
}
