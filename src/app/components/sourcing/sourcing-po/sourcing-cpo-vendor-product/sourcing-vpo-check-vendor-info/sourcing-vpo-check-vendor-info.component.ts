import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


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
  vpo_id="";
  cpo_id="";
  name="";
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



  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) {} 
  ngOnInit() {
    let cpo_id="24fee713-7d0e-4794-81ec-6a752cc52a64"
    this.cpo_id = cpo_id; 
    let vpo_id="031d73a5-ea70-456c-9c7b-e461c9022ce4" 
    this.vpo_id = vpo_id; 
  this.SourcingVpoCheckInfo(cpo_id,vpo_id)
    
  }
  SourcingVpoCheckInfo(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpoCheckInfo(cpo_id,vpo_id).subscribe((data)=>{ 
      console.log(data);
      this.sourcingvpocheckinfo=data;
    });
  }
  
}




