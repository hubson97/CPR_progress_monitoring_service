import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators  } from '@angular/forms';

interface Role {
  value: string;
  viewValue: string;
}

interface Group {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-settings-page',
  templateUrl: './settings-page.component.html',
  styleUrls: ['./settings-page.component.scss']
})
export class SettingsPageComponent implements OnInit {
  public form: FormGroup;
  flag: boolean = true;
  
  roles: Role[] = [
    { value: 'Student', viewValue: 'Student' },
    { value: 'Instructor', viewValue: 'Instructor' },
    { value: 'Administrator', viewValue: 'Administrator' },
  ];

  groups: Role[] = [
    { value: 'group1', viewValue: 'Group 1' },
    { value: 'group1', viewValue: 'Group 2' },
    { value: 'group1', viewValue: 'Group 3' },
  ];


  constructor(private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    //this.form = this.formBuilder.group({
    //  email: 'a',
    //  password: 'b',
    //  role: 'c',
    //  group: 'd'
    //});

    this.form = this.formBuilder.group({
      email: ['instr@cprservice.com', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password: ['aa', [Validators.required, Validators.minLength(6)]],
    });

  }

  onSubmit(): void {


  }

  saveDetails(form) {
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(form.value, null, 4));
  }

}
