import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminauthService } from 'src/app/service/adminauth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {

  username!: string;
  password:string | undefined;

  constructor(private adminAuthSerice : AdminauthService,private router: Router) {

  }

  login() {
    console.log('sudhir');
    console.log(this.username);
    console.log(this.password);

    this.adminAuthSerice.adminLogin(this.username,this.password).subscribe((response) => {
      console.log(response);

      if(response == null) {
        alert('login error');
      }
      else {
        alert('login successfull');
        localStorage.setItem('id',response.id);
        localStorage.setItem('username',response.username);
        localStorage.setItem('password',response.password);
        this.router.navigate(['/adminmain']);
      }
    },(error) => {
      alert('login error');
    });
  }

}
