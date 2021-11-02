import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signedin-page',
  templateUrl: './signedin-page.component.html',
  styleUrls: ['./signedin-page.component.css']
})
export class SignedinPageComponent implements OnInit {

  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('student').valueChanges().subscribe(val => console.log(val));
  }

}
