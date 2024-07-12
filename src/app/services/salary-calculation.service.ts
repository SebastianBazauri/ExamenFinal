import { Injectable } from '@angular/core';
import { SalaryCalculationRequest } from '../models/salary-calculation-request.model';
import { SalaryCalculationResponse } from '../models/salary-calculation-response.model';

@Injectable({
  providedIn: 'root'
})
export class SalaryCalculationService {
  private readonly OVERTIME_RATE = 1.5;
  private readonly DEDUCTION_RATE = 0.1;

  calculateSalary(request: SalaryCalculationRequest): SalaryCalculationResponse {
    const regularSalary = request.regularSalary;
    const overtimeSalary = request.overtimeSalary * this.OVERTIME_RATE;
    const totalSalary = regularSalary + overtimeSalary;
    const deductions = totalSalary * this.DEDUCTION_RATE;
    const netSalary = totalSalary - deductions;

    return {
      regularSalary: regularSalary,
      overtimeSalary: overtimeSalary,
      deductions: deductions,
      netSalary: netSalary
    };
  }
}
