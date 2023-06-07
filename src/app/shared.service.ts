import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly APIUrl="http://127.0.0.1:8000/"

  constructor( private http:HttpClient) { }


Getstdlist():Observable<any>{
  return this.http.get<any[]>(this.APIUrl+ '/student/');
}

Addnewstd(val:any){
  return this.http.post(this.APIUrl+ '/student/',val);
}

Updatestd(val:any){
  return this.http.put(this.APIUrl+ '/student/',val);
}

Deletestd(val:any){
  return this.http.delete(this.APIUrl+ '/student/'+val);
}
}
