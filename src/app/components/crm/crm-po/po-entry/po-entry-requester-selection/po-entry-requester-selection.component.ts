import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ HttpResponse} from '@angular/common/http';


@Component({
  selector: 'app-po-entry-requester-selection',
  templateUrl: './po-entry-requester-selection.component.html',
  styleUrls: ['./po-entry-requester-selection.component.css']
})
export class PoEntryRequesterSelectionComponent implements OnInit {
  query:string='';
  public requestorId ;
  model:any={};
  requestorpolist:Object[]=[];
  display='none';
  customer_id="";
  poForm :FormGroup;
  name;
 mobileNo1;
 mobileNo2;
  email1;
 email2;

  constructor(private poEntryServicesService:PoEntryServicesService,
    private router:Router, private route:ActivatedRoute, private builder:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    let id=this.route.snapshot.paramMap.get('customer');
    this.customer_id = id;
    this.PoEntryRequestorSelection(id)
    
  }
  PoEntryRequestorSelection(id){
    this.poEntryServicesService.getPoEntryRequestorSelection(id).subscribe((data)=>{  
      this. requestorpolist=data;
      console.log(this.requestorpolist);
      
  })
}
  
  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none';
    
  }

  submitrequestorlist(event){
    let id=this.route.snapshot.paramMap.get('customer');
    this.requestorId=id;
    console.log(id);
    this.poEntryServicesService.PostRequestorlist(this. model.name,this.model.mobileNo1,this.model.mobileNo2,this.model.email1,this.model.email2,id).subscribe(data => {
      console.log(data);
      window.location.reload();
     
});
  }
  buildForm(){
    this.poForm=this.builder.group({
     name:['',Validators.required],
      mobileNo1:['',Validators.required],
      email:['',Validators.compose([Validators.required,Validators.email])],
     mobileNo2:[''],
     email2:['']
    });
  }
}
    































