import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EpfService {

  apiUri='http://34.95.82.187';
// apiUri = 'http://localhost:50000';

  constructor(private http: HttpClient) { }

  add(epf:any){
    console.log(epf)
    const headers= new HttpHeaders().set('Authorization', 'EPF')
    console.log(headers)
    return this.http.post(`${this.apiUri}/epfaddform`,epf,{'headers':headers});
  }
  view(){
    const headers= new HttpHeaders().set('Authorization', 'EPF')
    console.log(headers)
    return this.http.get(`${this.apiUri}/viewepf`,{'headers':headers});
  }

  // load employee data in select option in epf
  viewEmp(){
    const headers= new HttpHeaders().set('Authorization', 'EPF')
    console.log(headers)
    return this.http.get(`${this.apiUri}/addepf`,{'headers':headers});
  }
}
