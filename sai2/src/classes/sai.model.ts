export class Sai {
    private className: string;
    private classID: number;
    private completion: boolean;
    
    constructor(className: string, classID: number, completion: boolean){
        this.className = className;
        this.classID = classID;
        this.completion = completion;
    }
    
    getClassName() : string{
        return `${this.className}`;
    }
    getClassID() : number {
        return this.classID;
    }
    getCompletion() : boolean{
        return this.completion;
    }

}
