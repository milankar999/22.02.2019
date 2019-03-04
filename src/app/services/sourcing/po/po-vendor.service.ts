import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import interface data Type
import { CpoPendingDetails } from '../../../interface/sourcing/po/cpo-pending-details';
import { SourcingVendorProduct} from '../../../interface/sourcing/po/sourcing-vendor-product';
import { SourcingVendorProductVPOLineitem} from '../../../interface/sourcing/po/sourcing-vendor-product-vpolineitem';
import { UnassignedProductList } from '../../../interface/sourcing/po/unassigned-product-list';
import { Postassigned } from '../../../interface/sourcing/po/postassigned';
import { SourcingNewVpo  } from '../../../interface/sourcing/po/sourcing-new-vpo';
import { SourcingVpoContactPerson } from '../../../interface/sourcing/po/sourcing-vpo-contact-person';
import { SourcingVpoLineitemEdit} from '../../../interface/sourcing/po/sourcing-vpo-lineitem-edit';
import { BasicInfo } from '../../../interface/sourcing/po/basic-info';
import {SupplierCheckInfo } from '../../../interface/sourcing/po/supplier-check-info';
import { SourcingVpoAddContactpersonInfo} from '../../../interface/sourcing/po/sourcing-vpo-add-contactperson-info';
import { PutSupplierCheckInfo } from '../../../interface/sourcing/po/put-supplier-check-info';
import { collectExternalReferences } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class PoVendorService {

  constructor(private http: HttpClient) { }

//Sourcing CPO Pending Details GET Method()..
  getCPOPendingDetailsList(id):Observable<CpoPendingDetails[]>{
    return this.http.get<CpoPendingDetails[]>("api/po_to_vendor/pending_cpo/"+ id +"/lineitem_details/",   //Api id ...
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
}


//Sourcing CPO vendor product GET Method()..
getSourcingCpoVenderProduct(id):Observable<SourcingVendorProduct[]>{
  return this.http.get<SourcingVendorProduct[]>("/api/po_to_vendor/pending_cpo/"+ id +"/vendor_product_segmentation/",  //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }

 //Get Unassigned Products
 getUnassignedCpoProducts(id):Observable<UnassignedProductList[]>{
  return this.http.get<UnassignedProductList[]>("/api/po_to_vendor/pending_cpo/"+ id +"/unassigned_lineitem/",   //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 Postassignvendorlist(vpo_lineitems,id,vpo_id){
   console.log(vpo_lineitems);
  return this.http.post<Postassigned[]>("/api/po_to_vendor/pending_cpo/"+id+"/vpo/"+vpo_id+"/assign_lineitems/",   //Api id ...
  {
      
    "vpo_lineitems":vpo_lineitems
  },
{
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
});   
}
deleteLineItemEdit(cpo_id,vpo_id,lineitem_id){
  return this.http.delete("/api/po_to_vendor/pending_cpo/"+cpo_id+"/vpo/"+vpo_id+"/lineitem/"+lineitem_id+"/edit/",   //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 getSourcingNewVpoProduct(cpo_id):Observable< SourcingNewVpo[]>{
  return this.http.get< SourcingNewVpo[]>("api/po_to_vendor/pending_cpo/"+cpo_id+"/new_vendor_selection/",  //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 getSourcingVpoContactPerson(cpo_id,vpocontact_id):Observable< SourcingVpoContactPerson []>{
  return this.http.get< SourcingVpoContactPerson []>("/api/po_to_vendor/pending_cpo/"+cpo_id+"/vendor/"+vpocontact_id+"/contact_person_selection/",  //Api id ...
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
 }
 Postsubmitvpocontactlist(name,mobileNo1,mobileNo2,email1,email2,supplier_name,cpo_id,vpocontact_id){
  return this.http.post<SourcingVpoContactPerson>("/api/po_to_vendor/pending_cpo/"+cpo_id+"/vendor/"+vpocontact_id+"/contact_person_selection/",//employee leave req database API Link
      {
       "name" : name,
       "mobileNo1" : mobileNo1,
       "mobileNo2" : mobileNo2,
       "email1" : email1,
       "email2" : email2,
       "supplier_name":supplier_name
},{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}
postSourcingVpoProduct(name,location,address,city,state,pin,country,office_email1,office_email2,office_phone1, office_phone2,gst_number,payment_term,advance_persentage,inco_term,cpo_id){
  return this.http.post<SourcingNewVpo>("api/po_to_vendor/pending_cpo/"+cpo_id+"/new_vendor_selection/",//employee leave req database API Link
  {
   "name" : name,
   "location": location,
   "address" : address,
   "city" : city,
   "state": state,
   "pin": pin,
   "country":country,
   "office_email1":office_email1,
   "office_email2":office_email2,
   "office_phone1":office_phone1,
   "office_phone2":office_phone2,
   "gst_number":gst_number,
   "payment_term":payment_term,
   "advance_persentage":advance_persentage,
   "inco_term":inco_term
  
},{
headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header Authorize
});

}
//SourcingVpoLineitemEdit GET method()...Component--(sourcing-vpo-lineitem-edit)
getSourcingVpoLineitemEdit(cust_id,requ_id,rece_id):Observable<SourcingVpoLineitemEdit[]>{ 
  console.log(cust_id,requ_id,rece_id)       
  return this.http.get<SourcingVpoLineitemEdit[]>("/api/po_to_vendor/pending_cpo/"+cust_id+"/vpo/"+ requ_id +"/lineitem/"+ rece_id +"/edit/", //SourcingVpoLineitemEdit database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

// Sourcing VPo Add contactperson info GET method()...Component--( Sourcing VPo Add contactperson info )
getSourcing_Vpo_AddContact_Person_info(cpo_id,vpo_id):Observable<SourcingVpoAddContactpersonInfo[]>{ 
  console.log(cpo_id,vpo_id)       
  return this.http.get<SourcingVpoAddContactpersonInfo []>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/supplier_contact_person_info_checking/', // Sourcing VPo Add contactperson info  database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}

// submit sourcing vpo addcontactperson info  PUT method()... .Component--(submit sourcing vpo addcontactperson info )
Post_submit_sourcing_vpo_addcontact_person_info_list(name,mobileNo1,mobileNo2,email1,email2,cpo_id,vpo_id,supplier_cp_id){
  supplier_cp_id = supplier_cp_id['vendor_contact_person']['id'];
  console.log(email2);
  console.log(email1); 
  console.log(mobileNo1);
  console.log(mobileNo2);
  console.log(name);
  return this.http.put<SourcingVpoAddContactpersonInfo[]>('/api/po_to_vendor/pending_cpo/'+ cpo_id +'/vpo/' + vpo_id + '/supplier_contact_person/'+ supplier_cp_id +'/edit/', //SourcingVpoLineitemEdit database API LInk     /api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/supplier_contact_person_info_checking/
  {
    "id":supplier_cp_id,
    "name": name,
    "mobileNo1":mobileNo1,
    "mobileNo2":mobileNo2,
    "email1":email1,
    "email2":email2
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });        
}

// SourcingVpoLineitemEdit PUT method()... .Component--(Sourcing-Vpo-Lineitem-Edit)
PostSourcingVpoLineitemedit(product_title,description, model,brand,product_code,hsn_code,pack_size,gst,uom,quantity,unit_price,cust_id,requ_id,rece_id){
  return this.http.put<SourcingVpoLineitemEdit[]>("/api/po_to_vendor/pending_cpo/"+cust_id+"/vpo/"+ requ_id+"/lineitem/"+ rece_id+"/edit/", //SourcingVpoLineitemEdit database API LInk
  {
   
    "product_title": product_title,
    "description": description,
    "model": model,
    "brand": brand,
    "product_code":  product_code,
    "hsn_code": hsn_code,
    "pack_size":  pack_size,
    "gst":gst,
    "uom":uom,
    "quantity":quantity,
    "unit_price":unit_price,
    cust_id,
    requ_id,
    rece_id
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });        
}

//postdeletesourcingvpolineitemedit Delete method()....Component--(post-delete-sourcing-vpo-lineitemedit)
postdeletesourcingvpolineitemedit(cust_id,requ_id,rece_id){
  return this.http.delete<[]>("api/po_to_vendor/pending_cpo/"+ cust_id+"/vpo/"+requ_id+"/lineitem/"+ rece_id+"/edit/", //PoEntryrejected lineitem list database API LInk,
  
    {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
  });   
    }
Postsubmitvpoconfirmlist(cpo_id,vpocontact_id, vpoconfirm_id){
  return this.http.post<[]>('api/po_to_vendor/pending_cpo/'+cpo_id+'/vendor/'+vpocontact_id+'/contact_person/'+vpoconfirm_id+'/create_vpo/',
  {

  },
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
  })
}
getSourcingVpoBasicInfo(cpo_id,vpo_id):Observable<BasicInfo[]>{ 
  
  return this.http.get<BasicInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/basic_info_checking/', //SourcingVpoLineitemEdit database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}
PutSourcingVpoBasicInfo(billing_address,shipping_address,delivery_date,offer_reference,offer_date,payment_term,advance_percentage,freight_charges,custom_duties,pf,insurance,cpo_id,vpo_id){
  return this.http.put<BasicInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/basic_info_checking/', //SourcingVpoLineitemEdit database API LInk
 {
  "billing_address": billing_address,
  "shipping_address" : shipping_address,
  "delivery_date" : delivery_date,
  "offer_reference": offer_reference,
  "offer_date" : offer_date,
  "payment_term" : payment_term,
  "advance_percentage" : advance_percentage,
  "freight_charges" : freight_charges,
  "custom_duties" : custom_duties,
  "pf" :  pf,
  "insurance" : insurance
 },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
getSourcingVpoCheckInfo(cpo_id,vpo_id):Observable<SupplierCheckInfo[]>{ 
  
  return this.http.get<SupplierCheckInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/supplier_info_checking/', //SourcingVpoLineitemEdit database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}
PutSourcingVpoCheckInfo(name,location,address,city,state,pin,country,office_email1,office_email2,office_phone1,office_phone2,gst_number, payment_term, advance_persentage,inco_term,supplier_id,cpo_id,vpo_id){
  return this.http.put<PutSupplierCheckInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/supplier/'+supplier_id+'/update/', //SourcingVpoLineitemEdit database API LInk
 {
   "id":supplier_id,
    "name":name,
    "location":location,
    "address":address,
    "city":city,
    "state":state,
    "pin":pin,
    "country":country,
    "office_email1":office_email1,
    "office_email2":office_email2,
    "office_phone1":office_phone1,
    "office_phone2":office_phone2,
    "gst_number":gst_number,
     "payment_term":payment_term,
     "advance_persentage":advance_persentage,
     "inco_term":inco_term,
 },
 {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
Postassignvendor_po_list(id,vpo_id){
  return this.http.post<[]>('http://192.168.0.105:8086/api/po_to_vendor/pending_cpo/'+id+'/vpo/'+vpo_id+'/launch/',
 {


 },
 {
  headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
});
}
}
