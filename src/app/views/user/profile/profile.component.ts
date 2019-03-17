import {Component, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserService} from '../../../services/user.service.client';
import {NgForm} from '@angular/forms';
import {User} from '../../../models/user.model.client';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  errorFlag: boolean;
  errorMsg = 'Invalid input, please check!';

  user: User;
  userId: String;
  @ViewChild('f') profileForm: NgForm;

  constructor(private userService: UserService,
              private activatedRouter: ActivatedRoute,
              private router: Router) {
    this.errorFlag = false;
    this.user = new User('111', 'alice', 'alice', 'alice', 'alice', 'alice@alice');
  }

  ngOnInit() {
    this.activatedRouter.params.subscribe(params => {
      this.userId = params['uid'];
      this.userService.findUserById(this.userId)
        .subscribe(
          (data: User) => {
          this.user = data;
        });
    });
  }

  onUpdate() {
    if (!!this.profileForm.valid) {
      this.userService.updateUser(this.userId, this.user)
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
    this.router.navigate(['/user', this.user._id, 'website']);
  }

}
