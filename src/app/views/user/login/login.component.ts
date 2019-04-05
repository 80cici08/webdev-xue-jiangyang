import {Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;

  errorFlag: boolean;
  errorMsg = 'Invalid username or password !';

  @ViewChild('f') loginForm: NgForm;

  constructor(private router: Router, private userService: UserService, private sharedService: SharedService) {
    this.errorFlag = false;
  }

  ngOnInit() {
  }

  login() {
    this.username = this.loginForm.value.username;
    this.password = this.loginForm.value.password;

    this.userService.login(this.username, this.password).subscribe((data: any) => {
      this.errorFlag = false;
      this.sharedService.user = data;
      this.router.navigate(['/profile']);
    }, (error: any) => {
      this.errorFlag = true;
      console.log(error);
    });

    // this.userService.findUserByCredentials(this.username, this.password)
    //   .subscribe(
    //     (data: any) => {
    //       if (data) {
    //         this.errorFlag = false;
    //         this.router.navigate(['user', data._id]);
    //       } else {
    //         this.errorFlag = true;
    //       }
    //     },
    //     (error: any) => {
    //       this.errorFlag = true;
    //     }
    //   );

  }


}
