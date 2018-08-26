import { Component, OnInit } from '@angular/core';
import{User} from '../../models/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  user:User;

  constructor() {
    
   this.user={
    firstName:'ilgu',
    lastName:'lee',
    age:30,
    address:{
      street:'North York',
      city:'Toronto',
      state:'Toronto'
    }
   }
   }

  ngOnInit() {

  }

}

