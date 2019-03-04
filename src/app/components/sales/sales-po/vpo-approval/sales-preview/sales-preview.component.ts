import { Component, OnInit } from '@angular/core';
import{ Router, ActivatedRoute } from '@angular/router'; 
import{ HttpResponse} from '@angular/common/http';
import { PoApprovalService } from 'src/app/services/sales/po/po-approval.service';



@Component({
  selector: 'app-sales-preview',
  templateUrl: './sales-preview.component.html',
  styleUrls: ['./sales-preview.component.css']
})
export class SalesPreviewComponent implements OnInit {
  sales_VPoApproval_preview:Object[]=[];
  vpo_lineitems:Object[]=[];
 sal_vpo_id="";
 sal_po_id="";
  constructor(private PoApprovalService:PoApprovalService,
    private router:Router, private route:ActivatedRoute,  ) { }


  ngOnInit() {
    let sal_vpo_id = "e173793e-9a25-441d-8a4d-5a9addc4740d"  //display singel api id --
    this.sal_vpo_id = sal_vpo_id;
    let sal_po_id = "ASPL-K-18190001"
    this.sal_po_id = sal_po_id;
    this.Sales_VPo_Approval_Preview(sal_vpo_id,sal_po_id)
  }

  Sales_VPo_Approval_Preview(sal_vpo_id,sal_po_id){
   this.PoApprovalService.getSales_VPo_Approval_Preview(sal_vpo_id,sal_po_id).subscribe((data)=>{  
     this.sales_VPoApproval_preview=data;
     console.log(this.sales_VPoApproval_preview);
     
  })     
  }
  }

