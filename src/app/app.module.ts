import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LangPipe } from './pipes/lang.pipe';

import localeTh from '@angular/common/locales/th';
import localeThExtra from '@angular/common/locales/extra/th';
import localeEn from '@angular/common/locales/en';
import localeEnExtra from '@angular/common/locales/extra/en';
import localeEs from '@angular/common/locales/es';
import localeEsExtra from '@angular/common/locales/extra/es';
import localeJa from '@angular/common/locales/ja';
import localeJaExtra from '@angular/common/locales/extra/ja';

import { registerLocaleData } from '@angular/common';
import { SynchronizeComponent } from './components/synchronize/synchronize.component';
import { LanguageSelectorComponent } from './components/language-selector/language-selector.component';

registerLocaleData(localeTh, 'th', localeThExtra);
registerLocaleData(localeEn, 'en', localeEnExtra);
registerLocaleData(localeEs, 'es', localeEsExtra);
registerLocaleData(localeJa, 'ja', localeJaExtra);

@NgModule({
  declarations: [
    AppComponent,
    LangPipe,
    SynchronizeComponent,
    LanguageSelectorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
