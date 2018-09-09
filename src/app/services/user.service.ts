import { User } from "../models/User";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable({
  providedIn: "root"
})
export class UserService {
  users: User[];
  data: Observable<any>;
  constructor() {
    this.users = [];
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

  getUsers(): Observable<User[]> {
    return of(this.users);
  }
  addUser(user: User) {
    this.users.unshift(user);
  }
}
