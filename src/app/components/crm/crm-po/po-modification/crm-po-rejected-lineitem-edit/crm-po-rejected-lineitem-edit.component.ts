import { Component, OnInit } from '@angular/core';
import {PoEntryServicesService}from '../../../../../services/crm/po/po-entry/po-entry-services.service';
import{ Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-crm-po-rejected-lineitem-edit',
  templateUrl: './crm-po-rejected-lineitem-edit.component.html',
  styleUrls: ['./crm-po-rejected-lineitem-edit.component.css']
})
export class CrmPoRejectedLineitemEditComponent implements OnInit {
rejectlineitemedit:object[]=[];
Model : any={};
  producttitle="";
  descriptions="";
  models="";
  brands="";
  product_codes="";
  part_nos="";
  pack_sizes="";
  hsn_codes="";
  gst_no="";
  quantitys="";
  uom_no="";
  unit_prices="";
  cpo_reject_id="";
  cpo_reject_edit_id="";

 
  constructor(private PoEntryServicesService:PoEntryServicesService,private route:ActivatedRoute, private router:Router ) { }

  ngOnInit() {
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_reject_id=reject_id;
    let edit_reject_id=this.route.snapshot.paramMap.get('cpor-details');
    this.cpo_reject_edit_id=edit_reject_id;
    this.PoRejectLineItemList(reject_id,edit_reject_id)
   
  
  }
  PoRejectLineItemList(reject_id,edit_reject_id){
    this.PoEntryServicesService.getPoRejectLineItemListEdit(reject_id,edit_reject_id).subscribe(data=>{
      this.producttitle=data['product_title'];
      this.descriptions=data['description'];
      this.models=data['model'];
      this.brands=data['brand'];
      this.product_codes=data['product_code'];
      this.part_nos=data['part_no'];
      this.pack_sizes=data['pack_size'];
      this.hsn_codes=data['hsn_code'];
      this.gst_no=data['gst'];
      this.quantitys=data['quantity'];
      this.uom_no=data['uom'];
      this.unit_prices=data['unit_price'];
     console.log (data);
     this.rejectlineitemedit=data;
   
   })
  }
  submitrejectedlineitemlist(event){
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_reject_id=reject_id;
    let edit_reject_id=this.route.snapshot.paramMap.get('cpor-details');
    this.cpo_reject_edit_id=edit_reject_id;
    this.PoEntryServicesService.putrejectedlineitemlist(
      this.Model.product_title,
      this.Model.description,
      this.Model.model,
      this.Model.brand,
      this.Model.product_code,
      this.Model.part_no,
      this.Model.pack_size,
      this.Model.hsn_code,this.Model.gst,
      this.Model.quantity,
      this.Model.uom,this.Model.unit_price,reject_id,edit_reject_id).subscribe(data => {
        console.log(data);
        this.router.navigate(['crm/crm-po/po-mdification/'+reject_id+'/crm-po-rejected-details']);
})
  }
  deleterejectlineitemlist(event){
    let reject_id=this.route.snapshot.paramMap.get('cpo_id');
    this.cpo_reject_id=reject_id;
    let edit_reject_id=this.route.snapshot.paramMap.get('cpor-details');
    this.cpo_reject_edit_id=edit_reject_id;
    this.PoEntryServicesService.postdeleterejectlineitemDetails(reject_id,edit_reject_id).subscribe(data=>{
      console.log(data);
      
    })
  }
  }