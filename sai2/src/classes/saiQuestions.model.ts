
export class saiQuestions{
    
    public studentsID: any;
    public completed: boolean;
    public classID: number;
    public question1: string;
    public question2: string;
    public question3: string;
    public question4: string;
    public question5: string;
    public question6: string;
    public question7: string;

    constructor(saiObj: any){
        this.studentsID = saiObj.studentsID || '';
        this.classID = saiObj.classID || 0;
        this.completed = saiObj.completed || false;
        this.question1 = saiObj.question1 || '';
        this.question2 = saiObj.question2 || '';
        this.question3 = saiObj.question3 || '';
        this.question4 = saiObj.question4 || '';
        this.question5 = saiObj.question5 || '';
        this.question6 = saiObj.question6 || '';
        this.question7 = saiObj.question7 || '';
    }
}