import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pipe } from 'rxjs';
import { map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private _http : HttpClient) { }

PostDatos(data : any){
  return this._http.post<any>("http://localhost:3000/Usuarios",data)
  .pipe(map((res:any)=>{
    return res;
  }))
 }
 DeleteDatos(id : number){
  return this._http.delete<any>("http://localhost:3000/Usuarios"+id)
  .pipe(map((res:any)=>{
    return res;
  }
  ))
 }
 UpdateDatos(data: any, id: number){
  return this._http.put<any>("http://localhost:3000/Usuarios"+id,data)
  .pipe(map((res:any)=>{
    return res;
  }
  ))
 }
 GetDatos(){
  return this._http.get<any>("http://localhost:3000/Usuarios")
  .pipe(map((res:any)=>{
    return res;
  }
  ))
 }
}
