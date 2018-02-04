import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
 
export class User {
  constructor(
    public username: string,
    public password: string) { }
}
 
var users = [
  new User('user3','user3')
];
 
@Injectable()
export class LoginService {
 
  constructor(
    private _router: Router){}
 
 
  login(user){
    var authenticatedUser = users.find(u => u.username === user.username);
    if (authenticatedUser && authenticatedUser.password === user.password){
      //localStorage.setItem("user", authenticatedUser);
      console.log(user);
      this._router.navigate(['deviceInfo']);      
      return true;
    }
    return false;
 
  }

}