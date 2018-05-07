import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../utils/config.service';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.css']
})
export class LanguagesComponent implements OnInit {

  constructor(private configService: ConfigService) { }

  public language: number = 1;

  ngOnInit() {
  }

  saveLanguage(event: Event) {
    event.preventDefault();
    this.configService.setLocalHost(this.language);
  }

}
