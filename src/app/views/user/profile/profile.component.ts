import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';
import {SharedService} from '../../../services/shared.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errorFlag: boolean;
  errorMsg = 'Invalid input, please check!';

  user: any;
  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService,
              private activatedRouter: ActivatedRoute,
              private sharedService: SharedService,
              private router: Router) {
    this.errorFlag = false;
  }

  ngOnInit() {
    this.user = this.sharedService.user;
    // this.activatedRouter.params.subscribe(params => {
    //   this.userId = params['uid'];
    //   this.userService.findUserById(this.userId)
    //     .subscribe(
    //       (data: User) => {
    //       this.user = data;
    //     });
    // });
  }

  logout() {
    this.userService.logout()
      .subscribe(
        (data:  any) => {
          this.router.navigate(['/login']);
        },
        error => {
          console.log('logout fail...');
          console.log(error);
        }
      );
  }

  onUpdate() {
    if (!!this.profileForm.valid) {
      this.userService.updateUser(this.user._id, this.user)
        .subscribe(
          data => {
            this.user = data;
          },
          error => {
            this.errorFlag = true;
          }
        );
    } else {
      this.errorFlag = true;
    }
  }

  onGoToWebsites() {
    this.onUpdate();
    this.router.navigate(['/website']);
  }

}
