export interface BasicInfo {
    id: string,
    billing_address: string,
    shipping_address: string,
    delivery_date: Date,
    offer_reference: string ,
    offer_date: Date,
    payment_term: number,
    advance_percentage: number,
    freight_charges: number,
    custom_duties:number,
    pf: number,
    insurance: number,
    discount:number
}
