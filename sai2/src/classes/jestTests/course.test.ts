import {Course} from '../course'

describe('createCourse', () => {
    let course: Course;

    beforeAll(() => {
        course = new Course('Software Engineering', 3031, 25);
    })

    test('Course name is set correctly', () =>{
        const courseName = course.getCourseName();
        expect(courseName).toEqual('Software Engineering');
    })

    test('Course ID is set correctly', () =>{
        const courseID = course.getCourseID();
        expect(courseID).toEqual(3031);
    })

    test('Number of students is set correctly', () => {
        const numStudents = course.getNumStudents();
        expect(numStudents).toEqual(25);
    })
})