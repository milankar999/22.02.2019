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
  vpoapprovallist:object[]=[];
 vpo_id="";
 po_no="";
 total_amount = 0;
 unit_price=0;
 item="";


  constructor(private PoApprovalService:PoApprovalService,
    private router:Router, private route:ActivatedRoute,  ) { }


  ngOnInit() {
    let vpo_id=this.route.snapshot.paramMap.get('vpo_id');  //display singel api id --
    this.vpo_id =vpo_id;
    let po_no=this.route.snapshot.paramMap.get('po_no');  //display singel api id --
    this.po_no = po_no;
    this.Sales_VPo_Approval_Preview(vpo_id,po_no)
    this.Vpo_Approval_details(vpo_id,po_no)
  }

  Sales_VPo_Approval_Preview(vpo_id,po_no){
    this. PoApprovalService.getSales_VPo_Approval_Preview(vpo_id,po_no).subscribe((data)=>{
      this.sales_VPoApproval_preview=data["0"];
      console.log(data["0"]);
    });
    }
    Vpo_Approval_details(vpo_id,po_no){
      this.PoApprovalService.getVpo_Approval_details(vpo_id,po_no).subscribe(data=>{
        this.vpoapprovallist=data;
        console.log(data);
        for(var item in data){
          let discounted_price =parseFloat(data[item]["unit_price"]) - (parseFloat(data[item]["unit_price"])*parseFloat(data[item]["discount"])/100);
          let with_gst_price = discounted_price + (discounted_price * parseFloat(data[item]["gst"]) / 100);
          this.total_amount = this.total_amount + with_gst_price; 
          console.log(data[item]["unit_price"]);
        }
        
      
      });
    }
  }

  
