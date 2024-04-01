import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  fatherInfo: FormGroup;

  constructor(){
    this.fatherInfo = new FormGroup({
      fatherFullName: new FormControl(''),
      fatherEmail: new FormControl(''),
      fatherEducation: new FormControl(''),
      fatherProfession: new FormControl(''),
      fatherDesignation: new FormControl(''),
      fatherPhone: new FormControl('')
    })
  }
}
