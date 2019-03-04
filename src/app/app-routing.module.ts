import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { PoEntryCustomerSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-customer-selection/po-entry-customer-selection.component';
import { PoEntryReceiverSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-receiver-selection/po-entry-receiver-selection.component';
import { PoEntryRequesterSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-requester-selection/po-entry-requester-selection.component';
import { PoEntrySupportingInfoComponent } from './components/crm/crm-po/po-entry/po-entry-supporting-info/po-entry-supporting-info.component';
import { PoEntryQuotationSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/po-entry-quotation-selection.component';
import { PoEntryProductSelectionComponent } from './components/crm/crm-po/po-entry/po-entry-product-selection/po-entry-product-selection.component';
import { QuotationSelectionDetailsComponent } from './components/crm/crm-po/po-entry/po-entry-quotation-selection/quotation-selection-details/quotation-selection-details.component';

import { PoEntrySelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-selected-product/po-entry-selected-product.component';
import { PoEntryEditSelectedProductComponent } from './components/crm/crm-po/po-entry/po-entry-edit-selected-product/po-entry-edit-selected-product.component';
import { CrmPoRejectedLineitemEditComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-lineitem-edit/crm-po-rejected-lineitem-edit.component';
import { SalesPoApprovalSupportInfoComponent } from './components/sales/sales-po/po-approval/sales-po-approval-support-info/sales-po-approval-support-info.component';


import { SalesPoApprovalListComponent } from './components/sales/sales-po/po-approval/sales-po-approval-list/sales-po-approval-list.component';
import { CrmPoRejectedListComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-list/crm-po-rejected-list.component';
import { CrmPoRejectedSuppinfoEditComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-suppinfo-edit/crm-po-rejected-suppinfo-edit.component';

import { SalesPoApprovalDetailsComponent } from './components/sales/sales-po/po-approval/sales-po-approval-details/sales-po-approval-details.component';
import { CrmPoRejectedDetailsComponent } from './components/crm/crm-po/po-modification/crm-po-rejected-details/crm-po-rejected-details.component';
import { SourcingHeaderComponent } from './components/sourcing/sourcing-header/sourcing-header.component';
import { SourcingCpoVendorProductComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-cpo-vendor-product.component';
import { AuthGuard } from './guards/auth.guard';

import { SourcingCpoPendingDetailsComponent } from './components/sourcing/sourcing-po/sourcing-cpo-pending-details/sourcing-cpo-pending-details.component';
import { SourcingCpoVendorSelectionComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-selection/sourcing-cpo-vendor-selection.component';
import { SourcingCpoNewVendorComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-selection/sourcing-cpo-new-vendor/sourcing-cpo-new-vendor.component';
import { SourcingHomeComponent } from './components/sourcing/sourcing-home/sourcing-home.component';
import { SourcingCpoPendingListComponent } from './components/sourcing/sourcing-po/sourcing-cpo-pending-list/sourcing-cpo-pending-list.component';
import { SourcingCpoLineitemEditComponent } from './components/sourcing/sourcing-po/sourcing-cpo-lineitem-edit/sourcing-cpo-lineitem-edit.component';
import { CrmHomeComponent } from './components/crm/crm-home/crm-home.component';
import { SalesHomeComponent } from './components/sales/sales-home/sales-home.component';

import { SourcingVpoAddBasicInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-add-basic-info/sourcing-vpo-add-basic-info.component';
import { SourcingVpoCheckVendorInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-check-vendor-info/sourcing-vpo-check-vendor-info.component';
import { SourcingVpoDeliveryInstructionComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-delivery-instruction/sourcing-vpo-delivery-instruction.component';
import { SourcingVpoReceiverInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-receiver-info/sourcing-vpo-receiver-info.component';
import { SourcingVpoAddContactpersonInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-add-contactperson-info/sourcing-vpo-add-contactperson-info.component';
import { SourcingVpoTermsConditionsComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-terms-conditions/sourcing-vpo-terms-conditions.component';
import { SourcingVpoRequesterInfoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-requester-info/sourcing-vpo-requester-info.component';
import { VpoApprovalDetailsComponent } from './components/sales/sales-po/vpo-approval/vpo-approval-details/vpo-approval-details.component';
import { GrnSelectTransitionTypeComponent } from './components/grn/goods-receive/grn-select-transition-type/grn-select-transition-type.component';
import { GrnTraditionalPoListComponent } from './components/grn/goods-receive/grn-traditional-po-list/grn-traditional-po-list.component';
import { CashPurchaseVendorSelectionComponent } from './components/grn/goods-receive/immediate/cash-purchase-vendor-selection/cash-purchase-vendor-selection.component';
import { CashPurchaseContactProductEntryComponent } from './components/grn/goods-receive/immediate/cash-purchase-contact-product-entry/cash-purchase-contact-product-entry.component';

import { VpoApprovalListComponent } from './components/sales/sales-po/vpo-approval/vpo-approval-list/vpo-approval-list.component';
import { SourcingVpoDetailsComponent } from './components/sourcing/sourcing-po/sourcing-vpo/sourcing-vpo-details/sourcing-vpo-details.component';

import { VpoApprovalInfoComponent } from './components/sales/sales-po/vpo-approval/vpo-approval-info/vpo-approval-info.component';
import { SourcingVpoListComponent } from './components/sourcing/sourcing-po/sourcing-vpo/sourcing-vpo-list/sourcing-vpo-list.component';
import { GrnTraditionalPoLineitemsEditComponent } from './components/grn/goods-receive/grn-traditional-po-lineitems-edit/grn-traditional-po-lineitems-edit.component';
import { GrnWithoutPoListComponent } from './components/grn/goods-receive/grn-without-po-list/grn-without-po-list.component';
import { GrnWithoutPoLineitemsEditComponent } from './components/grn/goods-receive/grn-without-po-lineitems-edit/grn-without-po-lineitems-edit.component';
import { CashPurchaseContactPersonSelectionComponent } from './components/grn/goods-receive/immediate/cash-purchase-contact-person-selection/cash-purchase-contact-person-selection.component';
import { SourcingVpoSignatureComponent } from './components/sourcing/sourcing-po/sourcing-vpo-signature/sourcing-vpo-signature.component';
import { SourcingVpoLineitemEditComponent } from './components/sourcing/sourcing-po/sourcing-vpo-lineitem-edit/sourcing-vpo-lineitem-edit.component';
import { SourcingNewVpoComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-new-vpo/sourcing-new-vpo.component';
import { SourcingVpoContactpersonSelectionComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-new-vpo/sourcing-vpo-contactperson-selection/sourcing-vpo-contactperson-selection.component';
import { SourcingVpoVendorSelectionComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-new-vpo/sourcing-vpo-vendor-selection/sourcing-vpo-vendor-selection.component';
import { SourcingVpoConfirmationComponent } from './components/sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-new-vpo/sourcing-vpo-confirmation/sourcing-vpo-confirmation.component';
 


const routes:Routes=[
  { path:'login',component:LoginComponent },
  { path:'',redirectTo:'/login',pathMatch:'full'},  

//Po Creation/Entry
  { path:'crm/crm-home', component:CrmHomeComponent,canActivate:[AuthGuard]},
  { path:'crm/po-entry/customer-selection', component:PoEntryCustomerSelectionComponent ,canActivate:[AuthGuard]},
  
  { path:'crm/po-entry/:customer/requester-selection',component: PoEntryRequesterSelectionComponent,canActivate:[AuthGuard]  },
  
  { path:'crm/po-entry/:customer/:requester/receiver-selection',component: PoEntryReceiverSelectionComponent,canActivate:[AuthGuard]  },
  { path:'crm/po-entry/:customer/:requester/:receiver/supportinginfo',component: PoEntrySupportingInfoComponent ,canActivate:[AuthGuard] },
  { path:'crm/po-entry/:cpo_id/quotation-selection', component:PoEntryQuotationSelectionComponent,},
  
  { path:'crm/po-entry/:cpo_id/quotation-selection/production-selection', component:PoEntryProductSelectionComponent,canActivate:[AuthGuard] },
  { path:'crm/po-entry/:quotation_no/quotation-selection-detailsdetails',component:QuotationSelectionDetailsComponent,canActivate:[AuthGuard] },
  { path:'crm/po-entry/cpo/:cpo_id/selected-product',component:PoEntrySelectedProductComponent},
  { path:'crm/po-entry/cpo/:cpo_id/selected-product/:selected-product/edit-selected-product',component:PoEntryEditSelectedProductComponent },
//PO Approval sales
  { path:'sales/sales-home',component:SalesHomeComponent,canActivate:[AuthGuard]},  
  { path:'sales/sales-po/sales-po-approval-list',component:SalesPoApprovalListComponent,canActivate:[AuthGuard]},
  { path:'sales/sales-po/:cpo_id/sales-po-approval-details' ,component:SalesPoApprovalDetailsComponent,canActivate:[AuthGuard] },
  { path:'sales-po/po-approval/:cpo_id/sales-po-approval-support-info', component:SalesPoApprovalSupportInfoComponent,canActivate:[AuthGuard] },
  //VPO Approval Sales
  //{ path:'sales/sales-po/vpo-approval/vpo-approval-details',component:VpoApprovalDetailsComponent},
  { path:'sales/sales-po/vpo-approval/:cpo_id/:vend_id/vpo-approval-details',component:VpoApprovalDetailsComponent},
  
//Rejected PO Modification
  { path:'crm/crm-po/po-modification/crm-po-rejected-list',component:CrmPoRejectedListComponent },
  { path:'crm/crm-po/po-mdification/:cpo_id/crm-po-rejected-details', component:CrmPoRejectedDetailsComponent,canActivate:[AuthGuard] },
  { path:'crm/crm-po/po-modification/:cpo_id/crm-po-rejected-supporting-edit',component:CrmPoRejectedSuppinfoEditComponent,canActivate:[AuthGuard] },
  { path:'crm/po-modification/:cpo_id/cpo-rejected-details/:cpor-details/crm-po-rejected-lineitem-edit', component:CrmPoRejectedLineitemEditComponent,canActivate:[AuthGuard] },    
  
//Sourcing PO Release      
  { path:'sourcing/sourcing-home',component:SourcingHomeComponent,canActivate:[AuthGuard]},
  { path:'sourcing/sourcing-po/sourcing-cpo-pending-list', component:SourcingCpoPendingListComponent },
  { path:'sourcing/sourcing-po/:sourcingdetail/sourcing-cpo-pending-details', component:SourcingCpoPendingDetailsComponent,canActivate:[AuthGuard] },
  
  { path:'sourcing/sourcing-po/:cpo_id/souring-cpo-vendor-product',component:SourcingCpoVendorProductComponent },
  { path:'sourcing/sourcing-po/:cpo_id/vpo/:vpo_id/lineitem/:lineitem_id/edit',component:SourcingVpoLineitemEditComponent },


  { path:'sourcing/sourcing-po/sourcing-cpo-vendor-selection', component: SourcingCpoVendorSelectionComponent },
  { path:'sourcing/sourcing-po/sourcing-cpo-vendor-selection/sourcing-cpo-new-vendor', component: SourcingCpoNewVendorComponent,canActivate:[AuthGuard] }, 
  { path:'sourcing/sourcing-po/sourcing-cpo-lineitem-edit', component:SourcingCpoLineitemEditComponent },

//Sourcing NEW VPO
  { path :'sourcing/sourcing-po/souring-cpo-vendor-product/:cpo_id/vpo-vendor-selection',component:SourcingVpoVendorSelectionComponent},
  { path : 'sourcing/sourcing-po/souring-cpo-vendor-product/:cpo_id/vendor/:vpocontact_id/contact_person_selection', component:SourcingVpoContactpersonSelectionComponent},
  { path : 'sourcing-po/souring-cpo-vendor-product/:cpo_id/vendor/:vpocontact_id/contact_person/:vpoconfirmation/createnewvpo',component:SourcingVpoConfirmationComponent},

//sourcing Vpo 
  { path:'sourcing/po_to_vendo/pending_cpo/:cpo_id/vpo/:vpo_id/basic-info', component:SourcingVpoAddBasicInfoComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vender-product/sourcing-vpo-check-vendor-info', component: SourcingVpoCheckVendorInfoComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vender-product/sourcing-vpo-delivery-instruction', component: SourcingVpoDeliveryInstructionComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vender-product/sourcing-vpo-receiver-info', component:  SourcingVpoReceiverInfoComponent},

 // { path:'sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-add-contactperson-info',component:SourcingVpoAddContactpersonInfoComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vendor-product/:cpo_id/vpo/:vpo_id/sourcing-vpo-add-contactperson-info',component:SourcingVpoAddContactpersonInfoComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-terms-condition', component:SourcingVpoTermsConditionsComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-requester-info', component:SourcingVpoRequesterInfoComponent},     
//sales vpo
  { path:'sales/sales-po/vpo-approval/vpo-approval-info',component:VpoApprovalInfoComponent },
//sourcing vpo
  { path:'sourcing/sourcing-po/sourcing-vpo/sourcing-vpo-list',component:SourcingVpoListComponent },
  { path:'sourcing/sourcing-po/sourcing-vpo-signature',component:SourcingVpoSignatureComponent },
  
// GRN
  { path:'grn/goods-receive/grn-traditional-po-lineitems-edit', component:GrnTraditionalPoLineitemsEditComponent  },
  { path:'grn/goods-receive/grn-without-po-list',component:GrnWithoutPoListComponent  },
  { path:'grn/goods-receive/grn-without-po-lineitems-edit',component: GrnWithoutPoLineitemsEditComponent },
  { path:'grn/goods-receive/immediate/cash-purchase-contact-person-selection',component: CashPurchaseContactPersonSelectionComponent },
  //GRN Recive
  { path:'grn/goods-receive/grn-select-transition-type',component:GrnSelectTransitionTypeComponent},
  { path:'grn/goods-recive/grn-traditional-po-list', component:GrnTraditionalPoListComponent},
  { path:'grn/goods-recive/grn-without-po-list', component:GrnWithoutPoListComponent},
  { path:'grn/good-recive/immediate/cash-purchase-vendor-selection', component:CashPurchaseVendorSelectionComponent},
  { path:'grn/good-recive/immediate/cash-purchase-contact-product-entry', component:CashPurchaseContactProductEntryComponent},
  { path:'sourcing/sourcing-po/sourcing-cpo-vendor-product/sourcing-vpo-requester-info', component:SourcingVpoRequesterInfoComponent},
  
  { path:'sales/sales-po/vpo-approval/vpo-approval-list/vpo-approval-list', component:VpoApprovalListComponent},
  { path:'sourcing/sourcing-po/sourcing-vpo/sourcing-vpo-details/sourcing-vpo-details', component:SourcingVpoDetailsComponent},
  { path:'grn/goods-receive/grn-traditional-po-list/grn-traditional-po-list', component:GrnTraditionalPoListComponent}   
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


