import { Component, OnInit } from '@angular/core';
import { TokenService } from '../service/token.service';
import { Router } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public token:TokenService,private router:Router,private auth:AuthService) { }

  ngOnInit() {
  }

  logging() {
    if(this.token.getToken()){
       this.token.signout();
       window.location.reload();
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}
