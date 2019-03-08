import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service'; //services name import


@Component({
  selector: 'app-sourcing-vpo-details',
  templateUrl: './sourcing-vpo-details.component.html',
  styleUrls: ['./sourcing-vpo-details.component.css']
})
export class SourcingVpoDetailsComponent implements OnInit {
  vpo_details:object[]=[];
  get_pdf:object[]=[];
  po_no="";
  display="";
  po_url="";

  constructor(private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) {}

  ngOnInit() {
    let po_no=this.route.snapshot.paramMap.get('po_no');  
   this.po_no = po_no;                  //display singel api id --  app routemodel we mention the id as :cpo_id/
   this.SourcingVpoDetails(po_no);
   this.Sourcing_Vpo_Details_pdf(po_no);
  }
  SourcingVpoDetails(po_no){
    this.PoVendorService.getSourcing_VPO_Details(po_no).subscribe((data)=>{  // get method
      this.vpo_details=data;
      console.log(data);
  });
}
vpo_details_change_info(event){
  let po_no=this.route.snapshot.paramMap.get('po_no');  
  this.po_no = po_no; 
  this.PoVendorService.postvpo_details_change_info(po_no).subscribe((data)=>{  // get method
    console.log(data);
    this.router.navigate(['sourcing/sourcing-po/sourcing-vpo/sourcing-vpo-list']);

});
}
Sourcing_Vpo_Details_pdf(po_no){
  this.PoVendorService.getSourcing_VPO_Details_pdf(po_no).subscribe((data)=>{  // get method
    this.get_pdf=data;
    console.log(data);
});

}
openModalDialog(){
  this.display='block';
}
closeModalDialog(){
  this.display='none'; 
}
}
