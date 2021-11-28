import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthenticationService } from 'src/services/auth.service';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-signinpage',
  templateUrl: './signinpage.component.html',
  styleUrls: ['./signinpage.component.css']
})
export class SigninpageComponent implements OnInit {
  private userSubscription!: Subscription;
  constructor(
    public authService: AuthenticationService,
    public router: Router,
    public userService: UserService) { }

  ngOnDestroy(): void{
    this.userSubscription.unsubscribe();
  }
  ngOnInit(): void {
    this.userSubscription = this.userService.user$.subscribe( user => {
      if (user?.email == "capstonestudenttest@gmail.com") {
        this.router.navigate(['signedin']);
      }
      else if(user?.email == "capstoneteachertest@gmail.com"){
        this.router.navigate(['tearcherview']);
      }
    });
  }
}
