import { Component, OnInit } from '@angular/core';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';
 
import { Router, ActivatedRoute } from '@angular/router';
 

@Component({
  selector: 'app-vpo-approval-details',
  templateUrl: './vpo-approval-details.component.html',
  styleUrls: ['./vpo-approval-details.component.css']
})
export class VpoApprovalDetailsComponent implements OnInit {

  vpoapprovallist:object[]=[];
  public requestorId ;
  accepted_display='none';
  rejected_display='none';

 vpo_id="";
  po_no="";

  constructor(private PoApprovalService:PoApprovalService,private route:ActivatedRoute ,private  router:Router) { }

  ngOnInit() {

    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  //display singel api id --
    this.vpo_id =vpo_id;
    let po_no=this.route.snapshot.paramMap.get('po_no');  //display singel api id --
    this.po_no = po_no;
    this.Vpo_Approval_details(vpo_id,po_no)
  }
  Vpo_Approval_details(vpo_id,po_no){
    this.PoApprovalService.getVpo_Approval_details(vpo_id,po_no).subscribe(data=>{
      this.vpoapprovallist=data;
      console.log(data);
    })
  }
  Vpo_details_approval(event){
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  //display singel api id --
    this.vpo_id =vpo_id;
    let po_no=this.route.snapshot.paramMap.get('po_no');  //display singel api id --
    this.po_no = po_no;
    this.PoApprovalService.PostVpo_details_approval(vpo_id,po_no).subscribe(data=>{
      console.log(data);
      this.router.navigate(['sales/sales-po/vpo-approval/vpo-approval-list/vpo-approval-list']);
    });
  }
  Vpo_details_reject(event){
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  //display singel api id --
    this.vpo_id =vpo_id;
    let po_no=this.route.snapshot.paramMap.get('po_no');  //display singel api id --
    this.po_no = po_no;
    this.PoApprovalService.PostVpo_details_reject(vpo_id,po_no).subscribe(data=>{
      console.log(data);
      this.router.navigate(['sales/sales-po/vpo-approval/vpo-approval-list/vpo-approval-list'])
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
}
