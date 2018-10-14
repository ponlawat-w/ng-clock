import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from '../services/language.service';

@Pipe({
  name: 'lang',
  pure: false
})
export class LangPipe implements PipeTransform {

  constructor(private languageService: LanguageService) {}

  transform(value: string): any {
    return this.languageService.get(value);
  }

}
