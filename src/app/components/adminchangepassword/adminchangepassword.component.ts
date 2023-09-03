import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from 'src/app/service/adminauth.service';

@Component({
  selector: 'app-adminchangepassword',
  templateUrl: './adminchangepassword.component.html',
  styleUrls: ['./adminchangepassword.component.css']
})
export class AdminchangepasswordComponent {

  username!: string | null;
  password:string | null;

  constructor(private adminAuthService:AdminauthService, private router:Router) {
    this.username = localStorage.getItem('username');
    this.password = localStorage.getItem('password')
  }

  adminchangepassword() {
    console.log('sudhir');
    console.log(this.username);
    console.log(this.password);

    this.adminAuthService.changePassword(this.username,this.password).subscribe((response) => {
      console.log(response);

      if(response == null) {
        alert('changepassword error');
      }
      else {
        alert('changepassword successfull');
        localStorage.setItem('id',response.id);
        localStorage.setItem('username',response.username);
        localStorage.setItem('password',response.password);
        this.router.navigate(['/adminmain']);
      }
    },(error) => {
      alert('changepassword error');
    });
  }

}
