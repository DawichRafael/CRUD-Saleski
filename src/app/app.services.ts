import { Student } from "src/models/Student";


export class AppServices {
    public students : Array<Student> = [];

    createStudent(student: Student)  {
       this.students.push({...student});
    
       return this.students;
    }

    upgradeStudent(student: Student){
        let studentFind = this.students.findIndex(x => x.id == student.id)
        this.students[studentFind] = student;

        return studentFind;
    }

    deleteStudent(student: Student){
        let studentFind = this.students.findIndex(x => x.id == student.id);

        this.students.splice(studentFind, 1);
        return this.students;
    }

    getStudent(){
        return this.students;
    }
}