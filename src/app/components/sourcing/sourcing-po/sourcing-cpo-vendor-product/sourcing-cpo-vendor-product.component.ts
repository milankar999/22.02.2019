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
  display='none';
  model:any={}
  product="";
  vendorname="";
  vpo_id="";
  lineitem_id="";
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
   this.cpo_id = id;                  //display singel api id --  app routemodel we mention the id as :cpo_id/
   this.SourcingCpoVenderProduct(id);
  }

  SourcingCpoVenderProduct(id){
    this.PoVendorService.getSourcingCpoVenderProduct(id).subscribe((data)=>{  // get method
      this.cpo_vendor_list=data;
      console.log(data);
      this.GetUnassignedVenderProduct(id);
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
    this.vpo_id=vpo_id;
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
  deletelineitem(event,id){
    
    console.log(event.target.name);
    let vpo_id = event.target.name;
   
    let cpo_id=this.route.snapshot.paramMap.get('cpo_id');  
    this.cpo_id = cpo_id;  
  
   
    let lineitem_id=this.route.snapshot.paramMap.get('lineitem_id'); 
    this.lineitem_id =lineitem_id;
    this.PoVendorService.deleteLineItemEdit(cpo_id,vpo_id,lineitem_id).subscribe((data)=>{  // delete method
      console.log(data);
     
    })
  }

  openModalDialog(){
    this.display='block';
  }
  closeModalDialog(){
    this.display='none'; 
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






  
