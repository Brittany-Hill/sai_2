export class Course {
    private courseName: string;
    private courseID: number;
    private numStudents: number;

    constructor(courseName: string, courseID: number, numStudents: number){
        this.courseName = courseName;
        this.courseID = courseID;
        this.numStudents = numStudents;
    }

    getCourseName(){
        return this.courseName;
    }

    getCourseID(){
        return this.courseID;
    }

    getNumStudents(){
        return this.numStudents;
    }
}
