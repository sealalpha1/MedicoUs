import { USER } from './../../admin/model/model';
import { Subscription } from 'rxjs';
import { UserProfileService } from './service/user-profile.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit, OnDestroy {
 UserDatas: USER[] = [];
 userId: any;
 firstname: any;
 lastname: any;
 mobile: any;
 email: any;
 gender: any;
 private userDataObserver: Subscription;
  constructor(private profileService: UserProfileService) { }

  ngOnInit() {
    this.profileService.getProfile();
    this.userDataObserver = this.profileService.getuserUpdateListner()
    .subscribe((userDatas: { user: USER[]}) => {
      this.UserDatas = userDatas.user;
      console.log(this.UserDatas);
      console.log(typeof this.UserDatas[0]);
      this.userId = this.UserDatas[0];
      this.firstname = this.UserDatas[1];
      this.lastname = this.UserDatas[2];
      this.mobile = this.UserDatas[3];
      this.email = this.UserDatas[4];
      this.gender = this.UserDatas[5];
    });

  }
  ngOnDestroy() {
    this.userDataObserver.unsubscribe();
  }
}
