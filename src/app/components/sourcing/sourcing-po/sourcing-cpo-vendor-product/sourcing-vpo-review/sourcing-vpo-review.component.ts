import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';

@Component({
  selector: 'app-sourcing-vpo-review',
  templateUrl: './sourcing-vpo-review.component.html',
  styleUrls: ['./sourcing-vpo-review.component.css']
})
export class SourcingVpoReviewComponent implements OnInit {
  cpo_id="";
  vpo_id="";
 
  sourcing_vpo_preview:object[]=[];
  vpo_lineitems:object[]=[];
  product_title="";
  billing_address="";
  name="";
  address="";
  location="";
  state="";
  pin="";
  phone="";
  office_phone1="";
  office_email1="";
  gst_number="";

  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) {} 
  ngOnInit() {
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
    this. SourcingVpo_Preview(cpo_id,vpo_id)
  }
 
  SourcingVpo_Preview(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpo_Preview(cpo_id,vpo_id).subscribe((data)=>{
      this.sourcing_vpo_preview=data;
     
      console.log(data);
    });
    }
  }


