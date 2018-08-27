import { DataService } from './../../services/data.service';
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

  constructor(private dataService:DataService) {
    console.log(this.users);
  }

  ngOnInit() {
    this.users=this.dataService.getUsers();
    this.loaded=true;
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
      this.dataService.addUser(value);
      this.form.reset();
    }
  }
}
