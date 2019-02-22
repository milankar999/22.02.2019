import { Component, OnInit } from '@angular/core';
import { LoginSerivesService } from 'src/app/services/authentication/login-serives.service';
import{ Router } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { getViewData } from '@angular/core/src/render3/state';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
model:any={};
poForm :FormGroup;
  constructor(private LoginServicesService:LoginSerivesService,
    private router:Router, private builder:FormBuilder ){}
  ngOnInit() {
    this.buildForm();
  }
  loginUser(event){

    this.LoginServicesService.getLoginDetails(this.model.inputUsername, this.model.inputPassword).subscribe(data => {
      console.log(data);
      alert('Your login as been success');
      localStorage.setItem('token', data.token);
      localStorage.setItem('type', data.type);
      if(data.type=="CRM")
        this.router.navigate(['crm/crm-home']);
      else if(data.type=="Sourcing")
        this.router.navigate(['sourcing/sourcing-home']);
      else if(data.type=="Sales")
        this.router.navigate(['sales/sales-home']);
    
    },
    data=>{
      alert('wrong username, password');
    
    });
   
  }
  buildForm(){
    this.poForm=this.builder.group({
     name:['',Validators.required],
     password:['',Validators.required]
    });
  }
}
