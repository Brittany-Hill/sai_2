import { saiQuestions } from "../saiQuestions.model"

describe('Create accurate SAI', () => {
    let questions1:saiQuestions;
    let questions2:saiQuestions;

    beforeAll(() => {
        questions1 = new saiQuestions({studentsID: 1, classID: 3100, completed: false, question1: 'Is question 1 set?', question2: 'Is question 2 set?', question3: 'Is question 3 set?', question4: 'Is question 4 set?', question5: 'Is question 5 set?'});
        questions2 = new saiQuestions({studentsID: 2, classID: 3100, completed: true, question1: 'Is question 1 set?', question2: 'Is question 2 set?', question3: 'Is question 3 set?', question4: 'Is question 4 set?', question5: 'Is question 5 set?'});
    }) 

    test('Student ID set correctly', () => {
        expect(questions1.studentsID).toEqual(1);
        expect(questions2.studentsID).toEqual(2);
    })
})