import { Component } from '@angular/core';
import { Country, State, City }  from 'country-state-city';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.css'
})
export class StudentComponent {
  countries =  Country.getAllCountries();
  selectedCountry:string = '';
  selectedCountryCode:string = '';
  CurrentCountryState:any = [];
  selectedState:string = '';
  selectedStateCode:string = '';
  CurrentStateCity:any = [];
  selectedCity:string = '';
  form:FormGroup;
  
  onChangeofCountry(newCountry: string) {
    for (let i = 0; i < this.countries.length; i++) {
      if (newCountry == this.countries[i].name) {
        this.selectedCountryCode = this.countries[i].isoCode;
        this.CurrentCountryState = State.getStatesOfCountry(this.selectedCountryCode);
      }
    }
  }

  onChangeofState(newState: string){
    for (let i = 0; i < this.CurrentCountryState.length; i++) {
      if (newState == this.CurrentCountryState[i].name) {
        this.selectedStateCode = this.CurrentCountryState[i].isoCode;
        this.CurrentStateCity = City.getCitiesOfState(this.selectedCountryCode, this.selectedStateCode); 
      }
    }
  } 

  constructor(){
    this.form = new FormGroup({
      firstName: new FormControl(''),
      middleName: new FormControl(''),
      lastName: new FormControl(''),
      dob: new FormControl(''),
      placeOfBirth: new FormControl(''),
      firstLanguage: new FormControl(''),
      country: new FormControl(''),
      state: new FormControl(''),
      city: new FormControl(''),
      pin: new FormControl('')
    });
  }
}
