import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
declare var $ :any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public user;

  ngOnInit() {
    this.user = this.authService.getUser();
    $('a.nav-link:not(.dropdown-toggle)').on('click', () => {
      if ($(".navbar-collapse").is(":visible") && $(".navbar-collapse").is(":visible") ) {
        $('.navbar-collapse').collapse('toggle');
      }
    })
  }

  isLogged() {
    let isLogged: boolean = this.authService.isLogged();
    if (isLogged) {
      this.user = this.authService.getUser();
    }
    return isLogged;
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
    return false;
  }
}
