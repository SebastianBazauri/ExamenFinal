import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalaryCalculationComponent } from '../app/components/salary-calculation/salary-calculation.component'; 
const routes: Routes = [
  { path: '', component: SalaryCalculationComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
