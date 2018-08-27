import { Component, OnInit } from "@angular/core";
import { User } from "../../models/User";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  user: User = {
    firstName: "",
    lastName: "",
    email:''
  };
  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAddUser: boolean = false;
  showAddForm: boolean = false;
  constructor() {
    this.users = [];
    console.log(this.users);
  }

  ngOnInit() {
    setTimeout(() => {
      this.loadUsers();
      this.loaded = true;
    }, 2000);
  }

  loadUsers() {
    this.users.push({
      firstName: "Ilgu",
      lastName: "Lee",
      email:"lee@gmail.com",
      registered: new Date(),
      isActive: true,
      hide: true
    });
    this.users.push({
      firstName: "Samho",
      lastName: "Park",
      email:"park@yahoo.com",
      isActive: false,
      registered: new Date(),
      hide: true
    });
    this.users.push({
      firstName: "Doim",
      lastName: "Park",
      email:"doim@naver.com",
      isActive: true,
      registered: new Date(),
      hide: true
    });
    this.users.push({
      firstName: "Yeonhee",
      lastName: "Seo",
      email:'seo@gmail.com',
      isActive: true,
      registered: new Date(),
      hide: true
    });
  }
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.user.hide = true;
    this.users.unshift(this.user);
    this.user = {
      firstName: "",
      lastName: "",
      email:""
    };
  }

  toggle(user: User) {
    user.hide = !user.hide;
  }

  onSubmit(e) {
    e.preventDefault();
  }
}
