import { Injectable } from '@angular/core';
import { Locale } from '../international/locale';
import { ThaiLocale } from '../international/locales/th';
import { EnglishLocale } from '../international/locales/en';
import { SpanishLocale } from '../international/locales/es';
import { JapaneseLocale } from '../international/locales/ja';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLocale: Locale;
  public locales = {
    'th': new ThaiLocale(),
    'ja': new JapaneseLocale(),
    'en': new EnglishLocale(),
    'es': new SpanishLocale()
  };

  constructor() {
    const userLanguages = navigator.languages
      .map(language => language.split('-')[0])
      .filter(code => this.languageExist(code));

    if (userLanguages.length) {
      this.setLanguage(userLanguages[0]);
    } else {
      this.setLanguage('th');
    }
  }

  public get localeList(): Locale[] {
    return Object.keys(this.locales).map(key => this.locales[key]);
  }

  public languageExist(code: string): boolean {
    return this.locales[code] ? true : false;
  }

  public setLanguage(code: string): void {
    if (this.locales[code]) {
      this.currentLocale = this.locales[code];
      document.documentElement.setAttribute('lang', code);
    }
  }

  public get(key: string): string {
    if (!this.currentLocale) {
      return `[[${key}]]`;
    }
    return this.currentLocale.getString(key);
  }
}
