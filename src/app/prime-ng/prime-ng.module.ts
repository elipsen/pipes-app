import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';

// Esto lo hacemos para centralizar un modulo con todos los componentes de primeNG que vamos a utilizar para la aplicación
// Esta técnica mejora la legibilidad del código, aunque en determinados casos estos modulos de primeNG se pueden importar
// en un componente en concreto
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    MenubarModule,
    CardModule,
    FieldsetModule,
    PanelModule
  ]
})
export class PrimeNgModule { }
