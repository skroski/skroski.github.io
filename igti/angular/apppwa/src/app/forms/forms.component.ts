import { Component} from '@angular/core';
import { FormControl, FormGroup, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent  {

  myForm = new FormGroup({
    name: new FormControl('', [Validators.required, forbiddenNameValidator('Daniel')]),
    address: new FormControl(''),

  });

  // tslint:disable-next-line: typedef
  onSubmit() {
    console.log(this.myForm.value);
  }
}

export function forbiddenNameValidator(invalidName: string): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      if (control.value === invalidName) {
        return {forbiddenName: {value: control.value}};
      }
      else{
        return null;
      }
    };
}
