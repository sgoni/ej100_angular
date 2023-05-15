import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = '066 formReactive';
  form: FormGroup;
  aficiones: FormGroup;

  constructor(private fctrl: FormBuilder) {
    this.form = fctrl.group({
      codigo: '123',
      nombre: 'Juanito',
      aficion1: 'musica',
      aficion2: 'escribir',
      //aficiones: fctrl.group({ aficion1: 'musica', aficion2: 'escribir' }),
    });

    this.aficiones = this.fctrl.group({
      aficion1: 'musica',
      aficion2: 'escribir',
    });
  }

  onSubmit() {
    console.log('codigo .' + this.form.controls['codigo'].value);
    console.log('nombre .' + this.form.controls['nombre'].value);
    console.log('aficion1 .' + this.form.controls['aficion1'].value);
    console.log('aficion2 .' + this.form.controls['aficion2'].value);
    //console.log(      'aficiones ' + JSON.stringify(this.form.controls['aficiones'].value)    );
    console.log('form ' + JSON.stringify(this.form.value));
  }
}
