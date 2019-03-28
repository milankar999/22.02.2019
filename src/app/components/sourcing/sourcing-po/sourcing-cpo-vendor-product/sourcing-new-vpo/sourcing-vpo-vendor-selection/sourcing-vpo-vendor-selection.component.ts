import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators, FormControl, FormArray } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-vendor-selection',
  templateUrl: './sourcing-vpo-vendor-selection.component.html',
  styleUrls: ['./sourcing-vpo-vendor-selection.component.css']
})
export class SourcingVpoVendorSelectionComponent implements OnInit {
  display='none';
  cpo_id="";
  model:any={};
  poForm :FormGroup;
  sourcing_new_vpo:object[]=[];
  name;
  vpocontact_id="";
  
  
   constructor(private builder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    
    this.buildForm();
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;
    this.SourcingNewVpoProduct(cpo_id);
  }
  localstorage(event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;
    console.log(event.target.name);
    console.log(event.target.id);
    localStorage.setItem('name',event.target.name);
    this.router.navigate(['sourcing/sourcing-po/souring-cpo-vendor-product/'+cpo_id+'/vendor/'+event.target.id+'/contact_person_selection']);

  }
  SourcingNewVpoProduct(cpo_id){
    this.PoVendorService.getSourcingNewVpoProduct(cpo_id).subscribe((data)=>{  // get method
      this.sourcing_new_vpo=data;
      console.log(data);
  })
}
submitvpolist(event){
  let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
  this.cpo_id = cpo_id;
  //validation
  if(this.model.name=="" || this.model.name==null){
    window.alert("name should not be empty ");
    return;
  }
  if(this.model.location=="" || this.model.location==null){
    window.alert("location should not be empty ");
    return;
  }
  if(this.model.address=="" || this.model.address==null){
    window.alert("address should not be empty ");
    return;
  }
  if(this.model.city=="" || this.model.city==null){
    window.alert("city should not be empty ");
    return;
  }
  if(this.model.pin=="" || this.model.pin==null){
    window.alert("pin should not be empty ");
    return;
  }
  if(this.model.state=="" || this.model.state==null){
    window.alert("state should not be empty ");
    return;
  }
 
  if(this.model.country=="" || this.model.country==null){
    window.alert("Country should not be empty ");
    return;
  }
  if(this.model.office_email1=="" || this.model.office_email1==null){
    window.alert("Office Email 1 should not be empty ");
    return;
  }
  if(this.model.office_phone1=="" || this.model.office_phone1==null){
    window.alert("Office Phone 1 should not be empty ");
    return;
  }
  if(this.model.gst_number=="" || this.model.gst_number==null){
    window.alert("Gst Number should not be empty ");
    return;
  }
  if(this.model.payment_term=="" || this.model.payment_term==null){
    window.alert("Payment Term should not be empty ");
    return;
  }
  this.PoVendorService.postSourcingVpoProduct(this.model.name,
    this.model.location,this.model.address,
    this.model.city,this.model.state,
    this.model.pin,
    this.model.country,
    this.model.office_email1,
    this.model.office_email2,
    this.model.office_phone1,
    this.model.office_phone2,
    this.model.gst_number,
    this.model.payment_term,
    this.model.advance_persentage,
    this.model.inco_term,
    cpo_id).subscribe((data)=>{  // get method
    console.log(data);
    window.location.reload();
   
})
}
openModalDialog(){
  this.display='block';
}
closeModalDialog(){
  this.display='none';
  
}
buildForm(){
  this.poForm=this.builder.group({
   name:['',Validators.required],

});
}
}
