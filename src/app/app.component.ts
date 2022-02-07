import { Component, OnInit } from '@angular/core';
import { Student } from 'src/models/Student';
import { AppServices } from './app.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
 
export class AppComponent implements OnInit {
  title = 'crud-saleski';
  public student: Student;
  public students: Array<Student> = [];
  public selected = false;

  constructor(public crudservice: AppServices) {
    this.student = {
      nombre : '',
      apellido : '',
      edad: 0,
      id: 0,
      telefono: ''
    }
   }

  ngOnInit(): void {
   this.students = this.crudservice.getStudent();
  }

  CreateStudents() {
    
    if(this.students.length == 0){
        this.student.id = 1;
    }else{
        this.student.id = this.students[this.students.length -1 ].id + 1;
    }

    this.crudservice.createStudent(this.student);
    this.student = {
      nombre : '',
      apellido : '',
      edad: 0,
      id: 0,
      telefono: ''
    }
    this.crudservice.getStudent();
  }

  updateStudent() {
    this.crudservice.upgradeStudent(this.student);
    this.student = {
      nombre : '',
      apellido : '',
      edad: 0,
      id: 0,
      telefono: ''
    }
    this.crudservice.getStudent();
  }

  deleteStudent() {
    this.crudservice.deleteStudent(this.student);
    this.crudservice.getStudent();
    this.selected = false;
    this.student = {
      nombre : '',
      apellido : '',
      edad: 0,
      id: 0,
      telefono: ''
    }
  }
  selectStudent(studentSelected : Student) {
    this.selected = true;
    this.student = {...studentSelected};
  }
}

