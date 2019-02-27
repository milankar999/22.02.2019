import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';


@Component({
  selector: 'app-sourcing-vpo-confirmation',
  templateUrl: './sourcing-vpo-confirmation.component.html',
  styleUrls: ['./sourcing-vpo-confirmation.component.css']
})
export class SourcingVpoConfirmationComponent implements OnInit {
  cpo_id="";
  vpocontact_id ="";
  vpoconfirm_id="";
  
  constructor(private builder:FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute) { }


  ngOnInit() {
    
   
  }
  submitvpoconfirmlist(event){
   
    let cpo_id = this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;  
    let vpocontact_id = this.route.snapshot.paramMap.get('vpocontact_id');
    this.vpocontact_id= vpocontact_id;
    let vpoconfirm_id = this.route.snapshot.paramMap.get('vpoconfirmation');
    this.vpoconfirm_id= vpoconfirm_id;
    this.PoVendorService.Postsubmitvpoconfirmlist(cpo_id,vpocontact_id, vpoconfirm_id).subscribe(data => {
      console.log(data);
      localStorage.removeItem('contact_person');
      localStorage.removeItem('name');
     this.router.navigate(['sourcing/sourcing-po/'+cpo_id+'/souring-cpo-vendor-product']);


  })
}
get contact_person(): any {
  return localStorage.getItem('contact_person');
}
get name(): any {
  return localStorage.getItem('name');
}
}
