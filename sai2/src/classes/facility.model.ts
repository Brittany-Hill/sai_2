export class Facility {
    studentsID: any;
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    constructor(facilityObj: any){
        this.studentsID = facilityObj.studentsID || '';
        this.question1 = facilityObj.question1 || '';
        this.question2 = facilityObj.question2 || '';
        this.question3 = facilityObj.question3 || '';
        this.question4 = facilityObj.question4 || '';
        this.question5 = facilityObj.question5 || '';
    }
}