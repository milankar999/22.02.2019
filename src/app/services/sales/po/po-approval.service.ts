import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import to the interface datatypes
import { PoApprovalList } from '../../../interface/sales/po/po-approval-list';
import { PoApprovalSupportInfo } from '../../../interface/sales/po/po-approval-support-info';
import { PostPoApprovalSupportInfo } from '../../../interface/sales/po/post-po-approval-support-info';
import  {SalesPoApprovalSupport}from '../../../interface/sales/po/sales-po-approval-support';
import  {SalesApprovalDetails} from '../../../interface/sales/po/sales-approval-details';


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
getSales_VPo_Approval_Preview(sal_vpo_id,sal_po_id):Observable< []>{
  return this.http.get<[]>('/api/po_to_vendor/vpo/'+sal_vpo_id+'/'+sal_po_id+'/preview/',
  
  {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
 });   
}

}
