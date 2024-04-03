import { Component } from '@angular/core';
import { json } from '../seats.json';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Ticket } from '../../assets/ticket';
import { Router } from '@angular/router';

@Component({
  selector: 'app-seat-booking',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './seat-booking.component.html',
  styleUrl: './seat-booking.component.css'
})
export class SeatBookingComponent {
  seats: Ticket[] = json;
  S_seat: number[] = [];
  totalSeat: number = 0;
  constructor(private router: Router) {
  }
  selectedSeat(id: number) {
    if (this.seats[id - 1].status !== true) {
      this.seats[id - 1].status = true;
      this.S_seat.push(id - 1)
      this.totalSeat += 1;
    }

  }

  bookNow() {
    localStorage.setItem("selectedSeat", JSON.stringify(this.S_seat))
    if (this.totalSeat !== 0) {
      this.router.navigate(["/book"])
    }
    this.totalSeat = 0;
  }
}
