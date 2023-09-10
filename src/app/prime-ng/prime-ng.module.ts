import { NgModule } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { FieldsetModule } from 'primeng/fieldset';
import { PanelModule } from 'primeng/panel';
import { ToolbarModule } from 'primeng/toolbar';
import { TableModule } from 'primeng/table';

// Esto lo hacemos para centralizar un modulo con todos los componentes de primeNG que vamos a utilizar para la aplicación
// Esta técnica mejora la legibilidad del código, aunque en determinados casos estos modulos de primeNG se pueden importar
// en un componente en concreto
@NgModule({
  declarations: [],
  imports: [],
  exports: [
    ButtonModule,
    CardModule,
    FieldsetModule,
    MenubarModule,
    PanelModule,
    TableModule,
    ToolbarModule
  ]
})
export class PrimeNgModule { }
