import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';


export class User {
  _id: String;
  username: String;
  password: String;

  firstName: String;
  lastName: String;
  email: String;

  constructor(_id, username, password, firstName, lastName, email) {
    this._id = _id;
    this.username = username;
    this.password = password;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

}


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errorFlag: boolean;
  errorMsg = 'Invalid input, please check!';

  user;
  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService,
              private activatedRouter: ActivatedRoute,
              private router: Router) { this.errorFlag = false; }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.user = this.userService.findUserById(params.uid);
    });
  }

  updateUser() {
    if (!!this.profileForm.valid) {
      this.userService.updateUser(this.user._id, this.user);
      this.router.navigate(['/user', this.user._id, 'website']);
      console.log(this.userService.users);
    } else {
      this.errorFlag = true;
    }
  }

}
