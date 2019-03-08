import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import interface data Type
import {SourcingCpoPending} from '../../../interface/sourcing/po/sourcing-cpo-pending';
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
import { SourcingTermsCondition } from '../../../interface/sourcing/po/sourcing-terms-condition';
import { SourcingReceiverInfo } from '../../../interface/sourcing/po/sourcing-receiver-info';
import { SourcingDeliveryInfo } from '../../../interface/sourcing/po/sourcing-delivery-info';
import { SourcingPreview } from '../../../interface/sourcing/po/sourcing-preview';
import { SourcingPreviewLineitems } from '../../../interface/sourcing/po/sourcing-preview-lineitems';
import { VpoList } from '../../../interface/sourcing/po/vpo-list';
import { SourcingVpoDetails } from '../../../interface/sourcing/po/sourcing-vpo-details';



@Injectable({
  providedIn: 'root'
})
export class PoVendorService {

  constructor(private http: HttpClient) { }

  getCPOPendingList():Observable<SourcingCpoPending[]>{
    return this.http.get<SourcingCpoPending[]>("/api/po_to_vendor/pending_list/", //getSourcingCpoPendingList database API LInk
      {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
      }

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
getSourcingVpoLineitemEdit(cpo_id,vpo_id,lineitem_id):Observable<SourcingVpoLineitemEdit[]>{ 
  console.log(cpo_id,vpo_id,lineitem_id)       
  return this.http.get<SourcingVpoLineitemEdit[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+ vpo_id +'/lineitem/'+lineitem_id +'/edit/', //SourcingVpoLineitemEdit database API LInk
   {
       headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
}
// SourcingVpoLineitemEdit PUT method()... .Component--(Sourcing-Vpo-Lineitem-Edit)
PostSourcingVpoLineitemedit(product_title,description, model,brand,product_code,hsn_code,pack_size,gst,uom,quantity,unit_price,discount,cpo_id,vpo_id,lineitem_id){
  
  return this.http.put<SourcingVpoLineitemEdit[]>('api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/lineitem/'+lineitem_id +'/edit/', //SourcingVpoLineitemEdit database API LInk
  {
   "id":cpo_id,
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
    "discount":discount,
    
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });        
}
//postdeletesourcingvpolineitemedit Delete method()....Component--(post-delete-sourcing-vpo-lineitemedit)
postdeletesourcingvpolineitemedit(cpo_id,vpo_id,lineitem_id){
  return this.http.delete<[]>('api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/lineitem/'+lineitem_id +'/edit/', //PoEntryrejected lineitem list database API LInk,
  
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
  "insurance" : insurance,

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

PutSourcingVpoCheckInfo(name,location,address,city,state,pin,country,office_email1,office_email2,office_phone1,office_phone2,gst_number, payment_term, advance_persentage,inco_term,cpo_id,vpo_id,supplier_check_cp_id){
  supplier_check_cp_id= supplier_check_cp_id['vendor']['id'];
console.log(name);

  return this.http.put<SupplierCheckInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/supplier/'+ supplier_check_cp_id +'/update/', //SourcingVpoLineitemEdit database API LInk
 {
   "id":supplier_check_cp_id,
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
getSourcingVpoTermsCondition(cpo_id,vpo_id):Observable<SourcingTermsCondition[]>{ 
  return this.http.get<[SourcingTermsCondition]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/terms_conditions/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
Putsubmit_terms_condition(mode_of_transport,inco_terms,installation,comments,cpo_id,vpo_id){
  return this.http.put<SourcingTermsCondition[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/terms_conditions/', //SourcingVpoLineitemEdit database API LInk
 {
   "id":vpo_id,
  "mode_of_transport":mode_of_transport,
  "inco_terms":inco_terms,
  "installation":installation,
  "comments":comments,
 },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
getSourcingVpoReciverInfo(cpo_id,vpo_id):Observable<SourcingReceiverInfo[]>{ 
  return this.http.get<SourcingReceiverInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/receiver_info/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
Putsubmit_reciver_info(receiver_name,receiver_phone1,receiver_phone2,receiver_dept,cpo_id,vpo_id){
  return this.http.put<SourcingReceiverInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/receiver_info/', //SourcingVpoLineitemEdit database API LInk
 {
   "id":vpo_id,
  "receiver_name":receiver_name,
  "receiver_phone1":receiver_phone1,
  "receiver_phone2":receiver_phone2,
  "receiver_dept":receiver_dept,
 },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
getSourcingVpoDeliveryInfo(cpo_id,vpo_id):Observable<SourcingDeliveryInfo[]>{ 
  return this.http.get<SourcingDeliveryInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/delivery_instructions/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
PutSourcingVpoDeliveryInfo(di1,di2,di3,di4,di5,di6,di7,di8,di9,di10,cpo_id,vpo_id){
  return this.http.put<SourcingDeliveryInfo[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/delivery_instructions/', //SourcingVpoLineitemEdit database API LInk
 {
    "id":vpo_id,
     "di1":di1,
     "di2":di2,
     "di3":di3,
     "di4":di4,
     "di5":di5,
     "di6":di6,
     "di7":di7,
     "di8":di8,
     "di9":di9,
     "di10":di10
 },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   }); 
}
getSourcingVpo_Preview(cpo_id,vpo_id):Observable<SourcingPreview[]>{ 
  return this.http.get<SourcingPreview[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/preview/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
getSourcing_Vpo_Preview_lineitems(cpo_id,vpo_id):Observable<SourcingPreviewLineitems[]>{ 
  console.log(cpo_id);
  return this.http.get<SourcingPreviewLineitems[]>('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/preview_lineitems/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
PostSourcing_Cpo_Market_ReadyPO(cpo_id,vpo_id){
  console.log(cpo_id);
  return this.http.post('/api/po_to_vendor/pending_cpo/'+cpo_id+'/vpo/'+vpo_id+'/launch/', //SourcingVpoLineitemEdit database API LInk
  {
    
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}

getSourcingVpoList():Observable<VpoList[]>{ 
  return this.http.get<VpoList[]>('/api/po_to_vendor/vpo/ready_list/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
getSourcing_VPO_Details(po_no):Observable<SourcingVpoDetails[]>{
  return this.http.get<SourcingVpoDetails[]>('/api/po_to_vendor/vpo/ready_list/'+po_no+'/details/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
postvpo_details_change_info(po_no){
  return this.http.post('/api/po_to_vendor/vpo/ready_list/'+po_no+'/change_info/', //SourcingVpoLineitemEdit database API LInk
  {
    
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}
getSourcing_VPO_Details_pdf(po_no):Observable<[]>{
  return this.http.get<[]>('/api/po_to_vendor/vpo/ready_list/'+po_no+'/generate/po/', //SourcingVpoLineitemEdit database API LInk
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });       
}

}











