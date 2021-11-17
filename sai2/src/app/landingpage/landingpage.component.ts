import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  private userSubscription!: Subscription;
  
  constructor(public userService: UserService, private router: Router) { }
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe( user => {
      if (user) {
        this.router.navigate(['signedin']);
      }
    });
  }

}
