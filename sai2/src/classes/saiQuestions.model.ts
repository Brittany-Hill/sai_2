
export class saiQuestions{
    
    public studentsID: number;
    public completed: boolean;
    public classID: number;
    public question1: string;
    public question2: string;
    public question3: string;
    public question4: string;
    public question5: string;

    constructor(saiObj: { studentsID: number; classID: number; completed: boolean; question1: string; question2: string; question3: string; question4: string; question5: string; } ){
        this.studentsID = saiObj.studentsID || 0;
        this.classID = saiObj.classID || 0;
        this.completed = saiObj.completed || false;
        this.question1 = saiObj.question1 || '';
        this.question2 = saiObj.question2 || '';
        this.question3 = saiObj.question3 || '';
        this.question4 = saiObj.question4 || '';
        this.question5 = saiObj.question5 || '';
    }
}