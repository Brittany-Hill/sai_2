import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { AuthenticationService } from 'src/services/auth.service';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  
  constructor(public userService: UserService, private router: Router,public authService: AuthenticationService) { }
  ngOnDestroy(): void {
  }
  ngOnInit(): void {
    this.authService.afAuth.signOut();
  }

}
