import { FormGroup } from '@angular/forms';

export function dateRangeValidator(startDateControlName: string, endDateControlName: string) {
  return (formGroup: FormGroup) => {
    const startDate = formGroup.controls[startDateControlName];
    const endDate = formGroup.controls[endDateControlName];

    if (startDate.value > endDate.value) {
      endDate.setErrors({ dateRange: true });
    } else {
      endDate.setErrors(null);
    }
  }
}
