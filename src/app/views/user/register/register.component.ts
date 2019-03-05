import {Component, OnInit, ViewChild} from '@angular/core';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {User} from '../../../models/user.model.client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User;
  verifyPassword: String;

  errorFlag: boolean;
  errorMsg = 'Passwords are not the same!';

  @ViewChild('f') registerForm: NgForm;

  constructor(private userService: UserService, private router: Router) {
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  register() {
    this.user = new User('', this.registerForm.value.username, this.registerForm.value.password, '', '', '');
    this.verifyPassword = this.registerForm.value.verifyPassword;

    if (this.user.password !== this.verifyPassword) {
      this.errorFlag = true;
    } else {
      this.userService.createUser(this.user)
        .subscribe(
          data => {
            this.errorFlag = false;
            this.user = data;
            this.router.navigate(['/user', this.user._id]);
          },
          error => {
            this.errorFlag = true;
          }
        );
    }
  }
}
