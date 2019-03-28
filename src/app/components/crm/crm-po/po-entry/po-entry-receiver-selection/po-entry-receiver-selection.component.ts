import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import{ Router, ActivatedRoute } from '@angular/router';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ HttpResponse} from '@angular/common/http';

@Component({
  selector: 'app-po-entry-receiver-selection',
  templateUrl: './po-entry-receiver-selection.component.html',
  styleUrls: ['./po-entry-receiver-selection.component.css']
})
export class PoEntryReceiverSelectionComponent implements OnInit {
 query:string='';
 model:any={};

 person_name;
 mobileNo1;
 mobileNo2;
 email1;
 email2;
 department_name;
 
 public reciverId;
 customer_id="";
 requester_id=""; 
 reciverselectionlist:object[]=[];
 public requestorId;
 display='none';
 poForm :FormGroup;
 public name: string;


constructor(private  poEntryServicesService:PoEntryServicesService, private router:Router,
  private route:ActivatedRoute,private builder:FormBuilder) { }


 ngOnInit() {
  this.buildForm();
    let cust_id=this.route.snapshot.paramMap.get('customer');
    let requ_id=this.route.snapshot.paramMap.get('requester');
    this.customer_id = cust_id;
    this.requester_id = requ_id;
    this.PoEntryReciverSelection(cust_id,requ_id);
}
PoEntryReciverSelection(cust_id,requ_id){
  this.poEntryServicesService.getPoEntryReciverSelection(cust_id,requ_id).subscribe((data)=>{  
    this.reciverselectionlist=data;
    console.log(this.reciverselectionlist);
    
})
}

openModalDialog()
    {
      this.display='block';
    }
    closeModalDialog()
    {
      this.display='none';
      }
     submitreciverlist(event){
           let id=this.route.snapshot.paramMap.get('customer');
           let id1=this.route.snapshot.paramMap.get('requester');
           this.reciverId=id;

           //validation
           if(this.model.person_name=="")
           {
             window.alert("Person Name should not be empty");
             return;
           }

           if(this.model.mobileNo1=="")
           {
             window.alert("Mobile No1 should not be empty");
             return;
           }

           if(this.model.email1=="")
           {
             window.alert("Email1 should not be empty");
             return;
           }

           if(this.model.department_name=="")
           {
             window.alert("Department Name should not be empty");
             return;
           }
           this.poEntryServicesService.PostReciverlist(this.model.person_name,
           this.model.mobileNo1,this.model.mobileNo2, this.model.email1,this.model.email2,this.model.department_name,id,id1).subscribe(data => {
           this.model.person_name='disabled';
            console.log(data);
           window.location.reload();//display the console    
       });
    }
    isDisabled(model):
      boolean {
        return model && model.person_name === name;
       }
    
    buildForm(){
      this.poForm=this.builder.group({
        person_name:[''],
        mobileNo1:[''],
        email1:[''],
        department_name:[''],
        mobileNo2:[''],
        email2:['']
       
      });
    }
  }
