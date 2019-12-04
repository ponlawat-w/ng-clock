import { Injectable } from '@angular/core';
import { Locale } from '../international/locale';
import { ThaiLocale } from '../international/locales/th';
import { EnglishLocale } from '../international/locales/en';
import { JapaneseLocale } from '../international/locales/ja';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  public currentLocale: Locale;
  public locales = {
    'th': new ThaiLocale(),
    'ja': new JapaneseLocale(),
    'en': new EnglishLocale()
  };

  constructor() {
    const userLanguages = navigator.languages
      .map(language => language.split('-')[0])
      .filter(code => this.languageExist(code));

    const localStorageLanguage = localStorage.getItem('language');
    if (localStorageLanguage && this.locales[localStorageLanguage]) {
      this.setLanguage(localStorageLanguage);
    } else if (userLanguages.length) {
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
      localStorage.setItem('language', this.currentLocale.code);
    }
  }

  public get(key: string, ...params: string[]): string {
    if (!this.currentLocale) {
      return `[[${key}]]`;
    }
    return this.currentLocale.getString(key, ...params);
  }
}
