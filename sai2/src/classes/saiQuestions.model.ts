import { Sai } from "src/classes/sai.model";
import { SaiQuestionsInterface } from "src/app/interfaces/saiQuestions-interface";

export class saiQuestions implements SaiQuestionsInterface{
    
    constructor( question1:string, question2: string, question3: string, question4: string, question5: string, question6: string){
        this.question1 = question1;
        this.question2 = question2;
        this.question3 = question3;
        this.question4 = question4;
        this.question5 = question5;
        this.question6 = question6;
    }
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;

    getQuestion1(): string {
        return `${this.question1}`;
    }

    getQuestion2(): string {
        return `${this.question2}`;
    }

    getQuestion3(): string {
        return `${this.question3}`;
    }

    getQuestion4(): string {
        return `${this.question4}`;
    }

    getQuestion5(): string {
        return `${this.question5}`;
    }
    
    getQuestion6(): string {
        return `${this.question6}`;
    }
    
}