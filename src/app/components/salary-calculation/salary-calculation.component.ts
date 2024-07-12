import { Component } from '@angular/core';
import { SalaryCalculationService } from '../../services/salary-calculation.service';
import { SalaryCalculationRequest } from '../../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../../models/salary-calculation-response.model';

@Component({
  selector: 'app-salary-calculation',
  templateUrl: './salary-calculation.component.html'
})
export class SalaryCalculationComponent {
  employee: SalaryCalculationRequest = {
    regularSalary: 0,
    overtimeSalary: 0,
    deductions: 0,
    netSalary: 0
  };

  salary: SalaryCalculationResponse | undefined;

  constructor(private salaryCalculationService: SalaryCalculationService) {}

  onSubmit() {
    this.salary = this.salaryCalculationService.calculateSalary(this.employee);
  }
}
