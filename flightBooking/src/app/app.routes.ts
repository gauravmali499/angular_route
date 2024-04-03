import { Routes } from '@angular/router';
import { BookNowComponent } from './book-now/book-now.component';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {path: "", component: MoviesComponent},
    {path: "seats", component: SeatBookingComponent},
    {path: "book", component: BookNowComponent}
];
