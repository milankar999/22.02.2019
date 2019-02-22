import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sourcing-header',
  templateUrl: './sourcing-header.component.html',
  styleUrls: ['./sourcing-header.component.css']
})
export class SourcingHeaderComponent implements OnInit {
  display='none';
  constructor(private router:Router, private cookie:CookieService) { }

  ngOnInit() {
  }
  logoutUser(event){
   
    localStorage.removeItem('token');
    localStorage.removeItem('type');
    this.cookie.deleteAll();
    }
    openModalDialog()
    {
      this.display='block';
    }
    closeModalDialog()
    {
      this.display='none';
      }

}
