import { Component } from '@angular/core';
import { FormsModule, FormControl, ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../assets/ticket';
import {json} from '../seats.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './book-now.component.html',
  styleUrl: './book-now.component.css'
})
export class BookNowComponent {
  seats: Ticket[] = json;
  selectedSeats:any = localStorage.getItem('selectedSeat');
  arrayOfSeats: number[] = JSON.parse(this.selectedSeats);
  BookedSeats: string[] = [];
  TotalAmount: number = 0;
  form: FormGroup;
  
  constructor(private formBuilder:FormBuilder, private router: Router){
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', [Validators.required, Validators.min(999999999), Validators.max(9999999999)]]
  });
    for (let i = 0; i < this.arrayOfSeats.length; i++) {
      this.BookedSeats.push(this.seats[this.arrayOfSeats[i]].name);
      this.TotalAmount += this.seats[this.arrayOfSeats[i]].price;
    }
  }

  booked(){
    confirm('Enjoy Your Movie');
    this.router.navigate(["/"])
  }
}
