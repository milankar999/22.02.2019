import { Component, OnInit } from '@angular/core';
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import{ HttpResponse} from '@angular/common/http';
 

@Component({
  selector: 'app-sourcing-vpo-add-contactperson-info',
  templateUrl: './sourcing-vpo-add-contactperson-info.component.html',
  styleUrls: ['./sourcing-vpo-add-contactperson-info.component.css']
})
export class SourcingVpoAddContactpersonInfoComponent implements OnInit {
model:any={}
query:string='';

public requestorId;
display='none';
poForm :FormGroup;
 
po_contact_info:object[]=[];
name="";
mobileNo1= "";
mobileNo2= "";
email1= "";
email2= "";
created_at= "";
updated_at= "";
supplier_name= "";
created_by= "";
id="";
cpo_id="";
vpo_id="";

vendor_cp_id = "";
 



constructor(private PoVendorService:PoVendorService,private route:ActivatedRoute,private router:Router,
  private builder:FormBuilder) { }

  ngOnInit() {
    this.buildForm();
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
    this.SourcingVpoAddContactPersoninfo(cpo_id,vpo_id);
    console.log(this.name);
  
   
  }
  SourcingVpoAddContactPersoninfo(cpo_id,vpo_id,){

    this.PoVendorService.getSourcing_Vpo_AddContact_Person_info(cpo_id,vpo_id).subscribe((data)=>{ 
      console.log(data);
      this.po_contact_info=data;
      this.vendor_cp_id = data['vendor_contact_person']['id']; 
      console.log(this.vendor_cp_id); 
    }); 
  }

  submitsourcingvpoaddcontactpersoninfolist(event){
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_id=cpo_id;
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');
    this.vpo_id=vpo_id;
    console.log(this.model.mobileNo1);

    //Validation 
        if (this.name==null){
        if (this.model.name==""||this.model.name==null)
        {
            window.alert("name should  not be empty");
            return;
        }
      } 
        else{
          if (this.model.name==""){
            window.alert("name should  not be empty");
            return;
          }
        }

        if (this.mobileNo1==null){
          if (this.model.mobileNo1==""||this.model.mobileNo1==null){
            window.alert("mobileNo1 should  not be empty");
            return;
          }
        }
        else{
        if (this.model.mobileNo1=="")
        {
            window.alert("mobileNo1 should  not be empty");
            return;
        }
      }

        if(this.email1==null){
          if(this.model.emai1==""||this.model.email1==null){
            window.alert("email1  should  not be empty");
            return;
          }
        }
        else{
        if (this.model.email1=="")
        {
            window.alert("Email1 should  not be empty");
            return;
        }
        }
    this.PoVendorService.Post_submit_sourcing_vpo_addcontact_person_info_list(                              
      this.model.name,
      this.model.mobileNo1,
      this.model.mobileNo2,
      this.model.email1,
      this.model.email2,
      cpo_id,
      vpo_id,
      this.po_contact_info
      ).subscribe(data=>{
        this.po_contact_info=data;
        console.log(data);
        this.router.navigate(['sourcing/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/supplier_info_checking']);  //go back to souring-cpo-vendor-product component

  })
}
buildForm(){
 
    this.poForm=this.builder.group({
      name:[''],
       mobileNo1:[''],
       email1:[''],
      mobileNo2:[''],
      email2:['']
});
}
}
