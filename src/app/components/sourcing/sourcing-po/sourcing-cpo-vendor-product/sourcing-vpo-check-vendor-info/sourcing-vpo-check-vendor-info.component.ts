import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';

import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-check-vendor-info',
  templateUrl: './sourcing-vpo-check-vendor-info.component.html',
  styleUrls: ['./sourcing-vpo-check-vendor-info.component.css']
})
export class SourcingVpoCheckVendorInfoComponent implements OnInit {
  model:any={}
  sourcingvpocheckinfo:object[]=[];
  poForm :FormGroup;
  name = "";
  location="";
  address="";
  city="";
  state="";
  pin="";
  country="";
  office_email1="";
  office_email2="";
  office_phone1="";
  office_phone2="";
  gst_number="";
  supplier_id="";
 vendor_supplier_id="";
 vpo_id="";
  cpo_id="";



  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute,private builder:FormBuilder) {} 
  ngOnInit() {
    this.buildForm();
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
  this.SourcingVpoCheckInfo(cpo_id,vpo_id)
    
  }
  SourcingVpoCheckInfo(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpoCheckInfo(cpo_id,vpo_id).subscribe((data)=>{ 
      console.log(data);
      this.sourcingvpocheckinfo = data; 
      this.vendor_supplier_id= data['vendor']['id']; 
    });
  }
  submit_supplier_check_info(event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;

 //validation alert message
  if(this.name==null){
    if(this.model.name==""||this.model.name==null){
         window.alert("name should not be empty");
         return;
       }
      }
   else{
      if (this.model.name=="")
    {
      window.alert("name should not be empty");
      return;
    }
  }

    if(this.location==null){
      if(this.model.location==""||this.model.location==null){
        window.alert("Location should not be empty");
        return;
      }
    }
    else{
    if (this.model.location=="")
    {
      window.alert("location should not be empty");
      return;
    }
  }

  if(this.city==null){
    if(this.model.city==""||this.model.city==null){
      window.alert("City should not be empty");
      return;
    }
  }
  else{
    if (this.model.city=="")
    {
      window.alert("City should not be empty");
      return;
    }
  }
    if(this.state==null){
      if(this.model.state==""||this.model.state==null){
        window.alert("State should not be empty");
        return;
      }
    }
    else{
    if (this.model.state=="")
    {
      window.alert("state should not be empty");
      return;
    }
  }
    if(this.pin==null){
      if(this.model.pin==""||this.model.pin==null){
        window.alert("Pin should not be empty");
        return;
      }
    }
    else{
    if (this.model.pin=="")
    {
      window.alert("pin should not be empty");
      return;
    }
  }
  if(this.country==null)
    if (this.model.country==""||this.model.country==null)
    {
      window.alert("country should not be empty");
      return;
    }
    else{
      if(this.model.country==""){
        window.alert("country should not be empty");
        return;
      }
    }
    if(this.gst_number==null){
      if(this.model.gst_number==""||this.model.gst_number){
        window.alert("GST Number should not be empty");
        return;
      }
    }
      else{
        if (this.model.gst_number=="")
    {
      window.alert("GST Number should not be empty");
      return;
    }
  }
    if(this.address==null){
      if(this.model.address==""||this.model.address==null){
        window.alert("Address should not be empty");
        return;
      }
    }
      else{
    if (this.model.address=="")
    {
      window.alert("Address should not be empty");
      return;
    }
  }




    this.PoVendorService.PutSourcingVpoCheckInfo(
      this.model.name,
      this.model.location,
      this.model.address,this.model.city,
      this.model.state,
      this.model.pin,
      this.model.country,
      this.model.office_email1,
      this.model.office_email2,
      this.model.office_phone1,
      this.model.office_phone2,
      this.model.gst_number,
      this.model.payment_term,
      this.model.advance_persentage,
      this.model.inco_term,cpo_id,vpo_id,
      this.sourcingvpocheckinfo 
      ).subscribe((data)=>{ 
        this.sourcingvpocheckinfo=data;
      console.log(data);
     
      this.router.navigate(['sourcing/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/receiver-info']); 
     
    });
  }
  buildForm(){
    this.poForm=this.builder.group({
    name:[''],
    location:[''],
    city:[''],
   state:[''],
   pin:[''],
   country:[''],
   gst_number:[''],
   address:[''],

    });
  }
}



