import { EmailValidator } from "@angular/forms";
import { studentInterface } from "src/app/interfaces/studentInterface";
import { saiQuestions } from "./saiQuestions.model";
export class Student implements studentInterface{
    
    constructor( firstName:string, lastName: string, email:string, classes: Array<string>){
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.classes = classes;
    }
    firstName: string;
    lastName: string;
    email: string;
    classes: Array<string>;
    
    getName(): string{
        return `${this.firstName} ${this.lastName}`;
    }
    getEmail(): string{
        return `${this.email}`;
    }
    getClasses(){
        return this.classes;
    }

}
