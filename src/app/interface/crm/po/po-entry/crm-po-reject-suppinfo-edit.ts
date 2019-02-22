export interface CrmPoRejectSuppinfoEdit {
    id:string,
    customer_po_no:string,
    customer_po_date: Date,
    delivery_date: Date,
    billing_address: string,
    shipping_address: string,
    inco_terms: string,
    payment_terms: number
}
