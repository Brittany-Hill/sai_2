import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authState: any = null;
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router
    ) { 
      this.afAuth.authState.subscribe((auth) => {
        this.authState = auth
      });
  }

  get currentUserId(): string {
    return (this.authState !== null) ? this.authState.uid : ''
  }
  get currentEmail(): string {
    return this.authState['email']
  }
  
  loginWithEmail(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then((user) => {
        this.authState = user
      })
      .catch(error => {
        console.log(error)
        throw error
      });
  }

  signOut(): void {
    this.afAuth.signOut();
    this.router.navigate(['/'])
  }

  get isUserEmailLoggedIn(): boolean {
    if ((this.authState !== null) ) {
      return true
    } else {
      return false
    }
  }
  
}