import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users: User[];
  showExtended:boolean=true;
  loaded:boolean=false;
  enableAddUser:boolean=false;
  constructor() {
    this.users = [];
    console.log(this.users);
  }

  ngOnInit() {
    setTimeout(()=>{
      this.loadUsers();
      this.loaded=true;
    },2000);



  }

  loadUsers(){
    this.users.push({
      firstName: "Ilgu",
      lastName: "Lee",
      age: 45,
      address: {
        street: "North York",
        city: "Toronto",
        state: "ON"
      },
      registered:new Date(),
      isActive:true,
      hide:true
    });
    this.users.push({
      firstName: "Samho",
      lastName: "Park",
       age: 39,
      address: {
        street: "Yonge",
        city: "Seoul",
        state: "BC"
      },
      isActive:false,
      registered:new Date(),
      hide:true
    });
    this.users.push({
      firstName: "Doim",
      lastName: "Park",
      age: 60,
      address: {
        // street: "Samhakdo",
        city: "Kwangju",
        state: "PS"
      },
      isActive:true,
      registered:new Date(),
      hide:true
    });
    this.users.push({
      firstName: "Yeonhee",
      lastName: "Seo",
      age: 40,
      address: {
        street: "North York",
        // city: "Mokpo",
        // state: "Jeolla"
      },
      isActive:true,
      registered:new Date(),
      hide:true
    });
    // this.addUser({
    //   firstName: "Simpo",
    //   lastName: "Koya",
    //   age: 100,
    //   address: {
    //     street: "PyongYang",
    //     city: "NorthKorea",
    //     state: "NK"
    //   }
    // });
  }
  addUser(user: User) {
    this.users.push(user);
  }

  toggle(user:User){
    user.hide=!user.hide;
  }
}
