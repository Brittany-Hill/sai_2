import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { StudentService } from './student.service';
import { UserService } from './user-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  authState: any = null;
  constructor(
    public afAuth: AngularFireAuth, // Inject Firebase auth service
    public router: Router,
    public userService: UserService
    ) { 
      // this.afAuth.authState.subscribe((auth) => {
      //   this.authState = auth
      // });
  }

  // get currentUserId(): string {
  //   return (this.authState !== null) ? this.authState.uid : ''
  // }
  // get currentEmail(): string {
  //   return this.authState['email']
  // }
  
  // loginWithEmail(email: string, password: string) {
  //   return this.afAuth.signInWithEmailAndPassword(email, password)
  //     .then((user) => {
  //       this.authState = user
  //     })
  //     .catch(error => {
  //       console.log(error)
  //       throw error
  //     });
  // }

  // signOut(): void {
  //   this.afAuth.signOut();
  //   this.router.navigate(['/'])
  // }

  // get isUserEmailLoggedIn(): boolean {
  //   if ((this.authState !== null) ) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.userService.user$.pipe(
         take(1),
         map(user => !!user), // <-- map to boolean
         tap(loggedIn => {
           if (!loggedIn) {
             console.log('access denied');
             this.router.navigate(['/landingpage']);
           }
       })
  );
}
  
}