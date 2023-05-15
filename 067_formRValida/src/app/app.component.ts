import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '067 formRValida';
  form: FormGroup;

  constructor(private fctrl: FormBuilder) {
    this.form = fctrl.group({
      codigo: '123',
      nombre: [``, Validators.required],
    });
  }

  onSubmit() {
    console.log('codigo .' + this.form.controls['codigo'].value);
    console.log('nombre .' + this.form.controls['nombre'].value);
    console.log('form ' + JSON.stringify(this.form.value));
  }
}
