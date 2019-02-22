import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

//import to the interface datatypes
import {SourcingCpoPending}from "../../../interface/sourcing/po/sourcing-cpo-pending";




@Injectable({
  providedIn: 'root'
})
export class PoVenderService {

  constructor(private http: HttpClient) { }

  SourcingPendinglist:SourcingCpoPending[]=[];


    //getSourcingCpoPendingList  using GET method()...

  getCPOPendingList():Observable<SourcingCpoPending[]>{
  return this.http.get<SourcingCpoPending[]>("/api/po_to_vendor/pending_list/", //getSourcingCpoPendingList database API LInk
    {
    headers: new HttpHeaders().set('Authorization','Token ' + localStorage.getItem('token'))// send to header
    });       
    }
  }
