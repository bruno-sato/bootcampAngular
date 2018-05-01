import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

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
  }

  logout(event: Event) {
    event.preventDefault();
    this.authService.logout();
    return false;
  }
}
