import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import to the interface datatypes
import { PoApprovalList } from '../../../interface/sales/po/po-approval-list';
import { PoApprovalSupportInfo } from '../../../interface/sales/po/po-approval-support-info';
import { PostPoApprovalSupportInfo } from '../../../interface/sales/po/post-po-approval-support-info';
import  {SalesPoApprovalSupport}from '../../../interface/sales/po/sales-po-approval-support';
import  {SalesApprovalDetails} from '../../../interface/sales/po/sales-approval-details';
import {SalesVpoApprovalList} from '../../../interface/sales/po/sales-vpo-approval-list';
import { SalesVpoApprovalDetails}from '../../../interface/sales/po/sales-vpo-approval-details';
import { SalesPreview } from '../../../interface/sales/po/sales-preview';

@Injectable({
  providedIn: 'root'
})
export class PoApprovalService {


  constructor(private http: HttpClient) { }

  getSalesApprovalList():Observable<PoApprovalList[]>{
      return this.http.get<PoApprovalList[]>("/api/po_from_customer/approval/approval_list/",
      
      {
        headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
     });   
  }

  getVpo_Approval_List():Observable<SalesVpoApprovalList[]>{
    return this.http.get<SalesVpoApprovalList[]>("/api/po_to_vendor/vpo/approval_list/",
    
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
}

 //get method Vpo_Approval_details
getVpo_Approval_details(vpo_id,po_no):Observable<SalesVpoApprovalDetails[]>{
  return this.http.get<SalesVpoApprovalDetails[]>('/api/po_to_vendor/vpo/'+vpo_id+'/'+po_no+'/lineitems/', // database API LInk    /api/po_to_vendor/vpo/"+sal_id+"/"+vend_id+"/lineitems/
  
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
 });   
}


  getSalesPoApprovalDetails(sal_id):Observable<SalesApprovalDetails[]>{
    return this.http.get<SalesApprovalDetails[]>("/api/po_from_customer/approval/"+ sal_id +"/lineitems/", //PoEntrySelectedProduct database API LInk
     {
         headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
      });       
  }
  getSalesPoApprovalSupport(sal_id):Observable<SalesPoApprovalSupport[]> {
    return this.http.get<SalesPoApprovalSupport[]>(" /api/po_from_customer/approval/"+ sal_id +"/informations/", 
    {
        headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
     }); 
  }

  getSalesApprovalSupportInfo():Observable< PoApprovalSupportInfo[]>{
    return this.http.get< PoApprovalSupportInfo[]>("/api/po_from_customer/approval/buyer_list/",
    
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
  }
  PostSalesApprovalSupportInfo(username,sal_id){
    return this.http.post< PostPoApprovalSupportInfo []>("/api/po_from_customer/approval/"+sal_id+"/approve/",
      {
      
        "assign_to":username
      },
    {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
   });   
}

postRejectionlist(rejection_reason,sal_id){
  
 return this.http.post<SalesPoApprovalSupport[]>("/api/po_from_customer/approval/"+sal_id+"/reject/",
 {

  "rejection_reason":rejection_reason,
  },
  {
      headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
  });
}
getSales_VPo_Approval_Preview(vpo_id,po_no):Observable<SalesPreview  []>{
  return this.http.get<SalesPreview []>('/api/po_to_vendor/vpo/'+vpo_id+'/'+po_no+'/preview/',
  
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
 });   
}
PostVpo_details_approval(vpo_id,po_no){
  return this.http.post('/api/po_to_vendor/vpo/'+vpo_id+'/'+po_no+'/lineitems/approve/',
  {

  },{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
  })
}
PostVpo_details_reject(vpo_id,po_no){
  return this.http.post('/api/po_to_vendor/vpo/'+vpo_id+'/'+po_no+'/lineitems/reject/',
  {

  },{
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))
  })

}
}