import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
  studentRegistration!:FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.studentRegistration = new FormGroup({
      'name':new FormControl(null,Validators.required),
      'surname':new FormControl(null,Validators.required),
      'universityName':new FormControl(null,Validators.required),
      'email':new FormControl(null,[Validators.required,Validators.email]),
      'gpa':new FormControl(),
      'age':new FormControl(),
      'password':new FormControl(null,Validators.required),
      "address":new FormGroup({
        'city':new FormControl(),
        "country":new FormControl()
      })
    });

    this.addDefaultData();
  }

  addDefaultData(){
    this.studentRegistration.get("name")?.setValue("giorgi");
    this.studentRegistration.get("surname")?.setValue("okruadze");
    this.studentRegistration.get("email")?.setValue("okruadze@gmail.com")
  }

  onFormSubmit(){
    console.log(this.studentRegistration.get('name')?.value);
    console.log(this.studentRegistration);
  }
}
