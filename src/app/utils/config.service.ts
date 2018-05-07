import { Injectable } from '@angular/core';
import { join } from 'path';

const BASE_KEY = 'mkListConfigs';
@Injectable()
export class ConfigService {

  constructor() { }
  
  public config = {
    language: 1
  }

  getLocalStorage() {
    return localStorage.getItem(BASE_KEY);
  }

  setLocalHost(language?: number) {
    if (language) {
      this.config.language = language;
    }
    localStorage.setItem(BASE_KEY, JSON.stringify(this.config));
  }

}
