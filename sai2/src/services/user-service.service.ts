import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../classes/user.model';

import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';

import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  user$: Observable<User| null | undefined>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router
  ) {
      // Get the auth state, then fetch the Firestore user document or return null
      this.user$ = this.afAuth.authState.pipe(
        switchMap(user => {
            // Logged in
          if (user) {
            return this.afs.doc<User | null>(`student/${user.uid}`).valueChanges();
          } else {
            // Logged out
            return of(null);
          }
        })
      );
  }

  /** Authenticates the user with Google */
  async googleSignin() {
    const provider = new firebase.auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    return this.updateUserData(credential.user)
  }

  /** Signs the user out of Google */
  async signOut() {
    await this.afAuth.signOut();
    this.router.navigate(['/landingpage']);
  }
  private updateUserData(user: any) {
    // Sets user data to firestore on login
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`student/${user.uid}`);

    return userRef.set({
      uid: user.uid,
      email: user.email,
      displayName: user.displayName
    }, { merge: true });

  }

}
