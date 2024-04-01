import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-mother',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './mother.component.html',
  styleUrl: './mother.component.css'
})
export class MotherComponent {
  motherInfo: FormGroup;
  constructor(){
    this.motherInfo = new FormGroup({
      motherFullName: new FormControl(''),
      motherEmail: new FormControl(''),
      motherEducation: new FormControl(''),
      motherProfession: new FormControl(''),
      motherDesignation: new FormControl(''),
      motherPhone: new FormControl('')
    })
  }

}
