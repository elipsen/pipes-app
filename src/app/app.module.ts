import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';

// Configuración del localse de la app (idioma)
import localeEs from '@angular/common/locales/es'
import localeEn from '@angular/common/locales/en'
import localeFrCa from '@angular/common/locales/fr-CA'

import { registerLocaleData } from '@angular/common'

registerLocaleData( localeEs )
registerLocaleData( localeEn )
registerLocaleData( localeFrCa )

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{
    // Inyecta el idioma por defecto para toda la aplicación
    provide: LOCALE_ID, useValue: 'es'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
