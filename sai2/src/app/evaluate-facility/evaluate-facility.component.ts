import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Facility } from 'src/classes/facility.model';
import { AuthenticationService } from 'src/services/auth.service';
import { FacilityService } from 'src/services/facility.service';
import { UserService } from 'src/services/user-service.service';

@Component({
  selector: 'app-evaluate-facility',
  templateUrl: './evaluate-facility.component.html',
  styleUrls: ['./evaluate-facility.component.css']
})
export class EvaluateFacilityComponent implements OnInit {

  userId: string | undefined;
  constructor(public facilityService: FacilityService, 
              public router: Router,
              public authService: AuthenticationService,
              public userService: UserService) {
              }
              
   facilityForm: FormGroup= new FormGroup({
    environment: new FormControl(null),
    safety: new FormControl(null),
    organized: new FormControl(null),
    space: new FormControl(null),
    feedback: new FormControl(null)
  })

  ngOnInit(): void {
    this.userService.user$.subscribe(user => {
      this.userId = user?.uid;
    })
  }
  onSubmit(): void{
    console.log(this.userId)
    var tempfacility = new Facility({
      studentsID: this.userId,
      question1: this.facilityForm.get("environment")?.value,
      question2: this.facilityForm.get("safety")?.value,
      question3: this.facilityForm.get("organized")?.value,
      question4: this.facilityForm.get("space")?.value,
      question5: this.facilityForm.get("feedback")?.value,
    }
    )
    this.facilityService.createNewAnswers(tempfacility);
    console.log(this.userId)
    this.router.navigate(["/signedin"]);
  }
}
