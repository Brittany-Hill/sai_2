import { EmailValidator } from "@angular/forms";
import { Sai } from "src/classes/sai.model";
export class Student {
    private id: string;
    private firstName: string;
    private lastName: string;
    private email: string;
    private sai: Sai;
    constructor(id:string, firstName:string, lastName: string, email:string, sai: Sai){
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.sai = sai;
    }
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
