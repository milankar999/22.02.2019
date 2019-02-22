import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-sales-header',
  templateUrl: './sales-header.component.html',
  styleUrls: ['./sales-header.component.css']
})
export class SalesHeaderComponent implements OnInit {
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

  