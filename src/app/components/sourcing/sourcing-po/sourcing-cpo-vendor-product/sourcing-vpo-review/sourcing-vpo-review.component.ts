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
 
  sourcing_preview_lineitems:object[]=[];
  
  total_amount = 0;
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
    this. SourcingVpo_Preview_lineitems(cpo_id,vpo_id)
  }
 
  SourcingVpo_Preview(cpo_id,vpo_id){
    this.PoVendorService.getSourcingVpo_Preview(cpo_id,vpo_id).subscribe((data)=>{
      this.sourcing_vpo_preview=data["0"];
      console.log(data["0"]);
    });
    }
    SourcingVpo_Preview_lineitems(cpo_id,vpo_id){
      this.PoVendorService.getSourcing_Vpo_Preview_lineitems(cpo_id,vpo_id).subscribe((data)=>{
        this.sourcing_preview_lineitems=data;
       
        console.log(data);
       
          for(var item in data){
            let discounted_price = data[item]["unit_price"] - ((data[item]["unit_price"])*(data[item]["discount"])/100);
            let with_gst_price = discounted_price + (discounted_price * (data[item]["gst"]) / 100);
            this.total_amount = this.total_amount + with_gst_price; 
          }
            console.log();
    
       
        
      });
      }
  }


