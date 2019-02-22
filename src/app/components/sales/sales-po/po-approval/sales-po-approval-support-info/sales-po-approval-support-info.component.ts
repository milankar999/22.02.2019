import { Component, OnInit } from '@angular/core';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { symbolValidator,passwordMatch} from 'src/app/helpers/validation';
import { Subscriber } from 'rxjs';
import { Router,ActivatedRoute } from '@angular/router';
import { NONE_TYPE } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-sales-po-approval-support-info',
  templateUrl: './sales-po-approval-support-info.component.html',
  styleUrls: ['./sales-po-approval-support-info.component.css']
})
export class SalesPoApprovalSupportInfoComponent implements OnInit {
  poForm :FormGroup;
  accepted_display='none';
  rejected_display='none';
  model:any={};
  buyer:object[]=[];
  salesapprovalsupportinfo:Object[]=[];
  SalseApproval:Object[]=[];
  public requestorId ;
  customer_contact_person:"";
  customer_po_no:"";
  customer_po_date:"";
  delivery_date:"";
  billing_address:"";
  shipping_address:"";
  inco_terms:"";
  payment_terms:"";
  delivery_contact_person:"";
  sales_id:"";
  rejectreason:"";

  constructor(private PoApprovalService:PoApprovalService,private router:Router,private route:ActivatedRoute, private builder:FormBuilder) { }

  ngOnInit() {  
    this.buildForm();
    let sal_id=this.route.snapshot.paramMap.get('cpo_id');
    this.SalesApprovalSupportInfo();
    this.SalesPoApprovalSupport(sal_id);
  }
  SalesPoApprovalSupport(sal_id){
    this.PoApprovalService.getSalesPoApprovalSupport(sal_id).subscribe((data)=>{
      this.SalseApproval=data;
      console.log(this.SalseApproval);
      this.customer_contact_person = data['customer_contact_person']
      this.customer_po_no = data['customer_po_no']
      this.customer_po_date = data['customer_po_date']
      this.delivery_date=data['delivery_date']
      this.billing_address=data['billing_address']
      this.shipping_address=data['shipping_address']
      this.inco_terms=data['inco_terms']
      this.payment_terms=data['payment_terms']
      this.delivery_contact_person=data['delivery_contact_person'];
      this.rejectreason=data['reject_reason']
   
  });
}
  SalesApprovalSupportInfo(){
    this.PoApprovalService.getSalesApprovalSupportInfo().subscribe((data)=>{  
     console.log (data);
    this.buyer = data;
    });
  }
  submitapprovalsupportinginfolist(event){
    let sal_id=this.route.snapshot.paramMap.get('cpo_id');
    this.PoApprovalService.PostSalesApprovalSupportInfo(this.model.username,sal_id).subscribe(data => {
      console.log(data);
      alert('Your approval as been success');
      this.router.navigate(['sales/sales-po/sales-po-approval-list']);
  });
  }

  submitrejectrequest(event){
   let sal_id=this.route.snapshot.paramMap.get('cpo_id');
    this.PoApprovalService.postRejectionlist(this.model.rejection_reason,sal_id).subscribe((data)=>{
      console.log(data);
      this.router.navigate(['sales/sales-po/sales-po-approval-list']);
    });
 }
  

  openAcceptedModalDialog(){
    this.accepted_display='block';
  }
  closeAcceptedModalDialog(){
    this.accepted_display='none';
  }

  openRejectedModalDialog(){
    this.rejected_display='block';
  }
  closeRejectedModalDialog(){
    this.rejected_display='none';
  }
  buildForm(){
    this.poForm=this.builder.group({
      rejectionreason:['',Validators.required],
    })
  }

}