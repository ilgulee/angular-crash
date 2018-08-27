import { Component, OnInit, ViewChild } from "@angular/core";
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
    email: ""
  };

  users: User[];
  showExtended: boolean = true;
  loaded: boolean = false;
  enableAddUser: boolean = false;
  showAddForm: boolean = false;
  @ViewChild("userForm")
  form: any;
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
      email: "lee@gmail.com",
      registered: new Date(),
      isActive: true,
      hide: true
    });
    this.users.push({
      firstName: "Samho",
      lastName: "Park",
      email: "park@yahoo.com",
      isActive: false,
      registered: new Date(),
      hide: true
    });
    this.users.push({
      firstName: "Doim",
      lastName: "Park",
      email: "doim@naver.com",
      isActive: true,
      registered: new Date(),
      hide: true
    });
    this.users.push({
      firstName: "Yeonhee",
      lastName: "Seo",
      email: "seo@gmail.com",
      isActive: true,
      registered: new Date(),
      hide: true
    });
  }

  toggle(user: User) {
    user.hide = !user.hide;
  }

  onSubmit({ value, valid }: { value: User; valid: boolean }) {
    if (!valid) {
      console.log("Form is not valid");
    } else {
      value.isActive = true;
      value.hide = true;
      value.registered = new Date();
      this.users.unshift(value);
      this.form.reset();
    }
  }
}
