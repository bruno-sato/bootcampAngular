import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class AuthService implements CanActivate {

  canActivate() {
    console.log('CanActivate was called!');
    return true;
  }
  constructor(private fireAuth: AngularFireAuth) { }

  login() {
    this.fireAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

  isLogged() {
    let user = firebase.auth().currentUser;

    if (user) {
      console.log(user);
    } else {
      console.log(user);
    }
  }

  logout() {
    this.fireAuth.auth.signOut();
  }

}
