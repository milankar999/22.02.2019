import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,AbstractControl } from '@angular/forms';
import{ Router,ActivatedRoute } from '@angular/router';
import{ HttpResponse} from '@angular/common/http';
import { PoVendorService } from 'src/app/services/sourcing/po/po-vendor.service'; //services name import

@Component({
  selector: 'app-sourcing-vpo-list',
  templateUrl: './sourcing-vpo-list.component.html',
  styleUrls: ['./sourcing-vpo-list.component.css']
})
export class SourcingVpoListComponent implements OnInit {
  vpo_list:Object[]=[];
  constructor(private PoVendorService:PoVendorService,private router:Router) {}
  ngOnInit() {
    this.Sourcing_Vpo_List()
  }
  Sourcing_Vpo_List(){
    this. PoVendorService.getSourcingVpoList().subscribe((data)=>{  
      this.vpo_list=data;  
      console.log(data);
  })

  }
}
