import { User } from './../models/User';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  users:User[];
  constructor() {
    this.users=[];
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

  getUsers():User[]{
    return this.users;
  }
  addUser(user:User){
    this.users.unshift(user);
  }
}