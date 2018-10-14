import { Component, OnInit } from '@angular/core';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  constructor(public languageService: LanguageService) { }

  ngOnInit() {
  }

}
