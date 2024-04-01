import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FatherComponent } from './father/father.component';
import { MotherComponent } from './mother/mother.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, RouterLink, RouterLinkActive, FatherComponent, MotherComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
