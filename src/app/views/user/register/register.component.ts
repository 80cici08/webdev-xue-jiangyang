import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: any = {
    username: String,
    password: String,
  };
  verifyPassword: String;

  errorFlag: boolean;
  errorMsg = 'Passwords are not the same!';

  @ViewChild('f') registerForm: NgForm;

  constructor(private userService: UserService, private router: Router) { this.errorFlag = false; }

  ngOnInit() {
  }

  register() {
    this.user.username = this.registerForm.value.username;
    this.user.password = this.registerForm.value.password;
    this.verifyPassword = this.registerForm.value.verifyPassword;


    if (this.user.password !== this.verifyPassword) {
      this.errorFlag = true;
    } else {
        this.user = this.userService.createUser(this.user);
        this.router.navigate(['/user', this.user._id]);
    }
  }
}
