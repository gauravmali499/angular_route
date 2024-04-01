import { Routes } from '@angular/router';
import { StudentComponent } from './student/student.component';
import { FatherComponent } from './father/father.component';
import { MotherComponent } from './mother/mother.component';

export const routes: Routes = [
    {path: "student", component: StudentComponent}, 
    {path: "father", component: FatherComponent},
    {path: "mother", component: MotherComponent},
];
