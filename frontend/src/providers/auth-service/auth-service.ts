import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
 
import {UserDataServiceProvider} from '../user-data-service/user-data-service';

export class User {
  name: string;
  email: string;
 
  constructor(name: string, email: string) {
    this.name = name;
    this.email = email;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  registerEndpoint:string;
  loginEndpoint:string;

  constructor(public http:Http, public userData:UserDataServiceProvider){
    this.registerEndpoint = 'http://localhost:8000/api/user/create';
    this.loginEndpoint = 'http://localhost:8000/api/user/get'
  }
 
  public login(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      return Observable.create(observer => {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });
        this.http.post(this.loginEndpoint, credentials, options)
              .subscribe(data => {
                var user = JSON.parse(data['_body']);
                console.log(user.data);
                if(data.status == 200){
                    this.userData.user_data = user.data;
                    observer.next(true);
                  }
                  else {
                    observer.next(false);
                  }
                  observer.complete();

              }, error => {
                console.log(error);// Error getting the data
              });
      });
        // At this point make a request to your backend to make a real check!
        /*let access = (credentials.password === "pass" && credentials.email === "email");
        this.currentUser = new User('Brian', 'brian.j.rodham@gmail.com');
        observer.next(access);
        observer.complete();*/
    }
  }
 
  public register(credentials) {
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        var headers = new Headers();
        headers.append("Accept", 'application/json');
        headers.append('Content-Type', 'application/json' );
        let options = new RequestOptions({ headers: headers });

        // Calls the API to register a new user
        this.http.post(this.registerEndpoint, credentials, options)
              .subscribe(data => {
                //console.log(data['_body']);
                var user = JSON.parse(data['_body']);

                if(data.status == 200){
                    console.log("Created user with id: " + user.data);
                    observer.next(true);
                  }
                  else {
                    observer.next(false);
                  }
                  observer.complete();

              }, error => {
                console.log(error);// Error getting the data
              });
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      this.userData.clear();
      observer.next(true);
      observer.complete();
    });
  }

}