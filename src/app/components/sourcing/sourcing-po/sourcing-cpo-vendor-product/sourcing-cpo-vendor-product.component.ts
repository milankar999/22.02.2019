import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';


import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService} from 'src/app/services/sourcing/po/po-vendor.service';


@Component({

  selector: 'app-sourcing-cpo-vendor-product',
  templateUrl: './sourcing-cpo-vendor-product.component.html',
  styleUrls: ['./sourcing-cpo-vendor-product.component.css']
})
export class SourcingCpoVendorProductComponent implements OnInit {

  model:any={}
  product="";
  vendorname="";
  vpo_id="";
  cpo_vendor_list:object[]=[];
  vpo_lineitems:object[]=[];
  unassigned_product:object[]=[];
  cpo_id="";
  selected_unassignitem_list: Array<{id: string}> = [];
  item_list=[];  
  

  form: FormGroup;
  accepted_display='none';
  constructor(private formBuilder: FormBuilder,private PoVendorService:PoVendorService,private router:Router,private route:ActivatedRoute,) { 
  
  }  

  ngOnInit() {
   let id=this.route.snapshot.paramMap.get('cpo_id');  
   this.cpo_id = id;                        //display singel api id --  app routemodel we mention the id as :cpo_id/
   this.SourcingCpoVenderProduct(id);
   this.GetUnassignedVenderProduct(id);
  }

  SourcingCpoVenderProduct(id){
    this.PoVendorService.getSourcingCpoVenderProduct(id).subscribe((data)=>{  // get method
      this.cpo_vendor_list=data;
      console.log(data);
    })
  }

  GetUnassignedVenderProduct(id){
    this.PoVendorService.getUnassignedCpoProducts(id).subscribe((data)=>{  // get method
      this.unassigned_product=data;
      console.log(data);
    })
  }
  submitassignvendorlist(event){
    console.log(event.target.name);
    let vpo_id = event.target.name;
    let id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = id;  
  
    for(let item in this. selected_unassignitem_list)
  {
    this.item_list.push(this. selected_unassignitem_list[item]['id']);
 }
  console.log(this.item_list);
    this.PoVendorService.Postassignvendorlist(this.item_list,id,vpo_id).subscribe((data)=>{ 
      console.log(data);
      window.location.reload();
    })
  }

  openAcceptedModalDialog(){
    this.accepted_display='block';
  }
  closeAcceptedModalDialog(){
    this.accepted_display='none';
  }
  checkUnassignitem(event,id) {
    if(event.target.checked) {
        this.selected_unassignitem_list.push({id:event.target.name});
       console.log(this.selected_unassignitem_list);
    } 
    else {
      this.selected_unassignitem_list.splice(event.target.name,1);
      console.log(this.selected_unassignitem_list);
    }
  }
  
}






  
