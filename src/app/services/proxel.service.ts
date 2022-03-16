import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProxelService {

  // private proxelEndpoint = "https://proxel-server.herokuapp.com/"
  private proxelEndpoint = "https://localhost:7261/"

  constructor(private http: HttpClient) { }

  public executeRequest(request: any) {
    return this.http.post(this.proxelEndpoint + "node", request);
  }

  public getNodes() {
    return this.http.get(this.proxelEndpoint+"node");
  }

}
