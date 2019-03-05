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

  sales_id="";
  vender_id="";

  constructor(private PoApprovalService:PoApprovalService,private route:ActivatedRoute ,private  router:Router) { }

  ngOnInit() {

    let sal_id=this.route.snapshot.paramMap.get('cpo_id');  //display singel api id --
    this.sales_id =sal_id;

    let  vend_id=this.route.snapshot.paramMap.get('vpo_id');  //display singel api id --
    this.  vender_id =  vend_id;


    this.Vpo_Approval_details(sal_id, vend_id)
  }
  Vpo_Approval_details(sal_id, vend_id){
    this.PoApprovalService.getVpo_Approval_details(sal_id,vend_id).subscribe(data=>{
      this.vpoapprovallist=data;
      console.log(data);
    })
  }
}
