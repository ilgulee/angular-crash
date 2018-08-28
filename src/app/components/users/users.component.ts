import { UserService } from "../../services/user.service";
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

  constructor(private userService:UserService) {
    console.log(this.users);
  }

  ngOnInit() {
    this.userService.getUsers().subscribe(users=>{
      this.users=users;
      this.loaded=true;
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
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}
