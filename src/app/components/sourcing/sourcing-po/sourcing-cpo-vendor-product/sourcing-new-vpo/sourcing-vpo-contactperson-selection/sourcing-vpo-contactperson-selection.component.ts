import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';

import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';

import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-contactperson-selection',
  templateUrl: './sourcing-vpo-contactperson-selection.component.html',
  styleUrls: ['./sourcing-vpo-contactperson-selection.component.css']
})
export class SourcingVpoContactpersonSelectionComponent implements OnInit {
  cpo_id="";
  vpocontact_id ="";
  display='none';
  model:any={};
  poForm :FormGroup;
  name;
 mobileNo1;
 mobileNo2;
  email1;
 email2;
 supplier_name;
 
  sourcingVPO_contact_person:object[]=[];
  constructor(private builder:FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
   
    this.buildForm();
    let cpo_id = this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;  
    let vpocontact_id = this.route.snapshot.paramMap.get('vpocontact_id');
    this.vpocontact_id= vpocontact_id 
    this.SourcingVpoContactPerson(cpo_id,vpocontact_id);
  }
  SourcingVpoContactPerson(cpo_id,vpocontact_id){
      this.PoVendorService.getSourcingVpoContactPerson(cpo_id,vpocontact_id).subscribe((data)=>{  // get method
        this. sourcingVPO_contact_person=data;
        console.log(data);
  });
}
submitvpocontactlist(event){
  
  let cpo_id = this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;  
    let vpocontact_id = this.route.snapshot.paramMap.get('vpocontact_id');
    this.vpocontact_id= vpocontact_id 
     this.PoVendorService.Postsubmitvpocontactlist(this. model.name,
     this.model.mobileNo1,
     this.model.mobileNo2,
     this.model.email1,this.model.email2,
     this.model.supplier_name,cpo_id,vpocontact_id).subscribe(data => {
     
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
   email2:[''],
   supplier_name:['']
  });
}

openModalDialog(){
  this.display='block';
}
closeModalDialog(){
  this.display='none';
  
}
localstorage(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
  this.cpo_id = cpo_id;
  let vpocontact_id = this.route.snapshot.paramMap.get('vpocontact_id');
  this.vpocontact_id= vpocontact_id 
  console.log(event.target.name);
  console.log(event.target.id);
  localStorage.setItem('name',event.target.name);
  localStorage.setItem('name',event.target.name);

  this.router.navigate(['sourcing-po/souring-cpo-vendor-product/'+cpo_id+'/vendor/'+vpocontact_id+'/contact_person/'+event.target.id+'/createnewvpo']);

}
}
