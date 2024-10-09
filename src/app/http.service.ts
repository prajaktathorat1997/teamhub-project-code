import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from './utility/Employee';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(private http: HttpClient) {}
  baseurl: string = environment.baseUrl;
  login(obj: any) {
    return this.http.post(`${this.baseurl}user/login`, obj);
  }

  register(object: any) {
    return this.http.post<string>(`${this.baseurl}user/register`, object);
  }

  getAllEmployee() {
    return this.http.get(`${this.baseurl}emp/get`);
  }
  getEmployeeById(id: any) {
    return this.http.get(`${this.baseurl}emp/get/${id}`);
  }
  getData() {
    return this.http.get(`${this.baseurl}country/get`);
  }
  addemp(empObj: Employee) {
    return this.http.post(`${this.baseurl}emp/add`, empObj);
  }
  updateRecord(obj: Employee, eid: number) {
    return this.http.put(`${this.baseurl}emp/update/${eid}`, obj, {
      responseType: 'text',
    });
  }
  deletRecord(id: any) {
    return this.http.delete(`${(this, this.baseurl)}emp/delete/${id}`, {
      responseType: 'text',
    });
  }
  statusChange(eid: number) {
    return this.http.get(`${this.baseurl}emp/statusChange/${eid}`, {
      responseType: 'text',
    });
  }
}
