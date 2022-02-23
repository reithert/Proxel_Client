import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProxelService {

  private proxelEndpoint = "https://swapi.dev/api/planets/"

  constructor(private http: HttpClient) { }

  public executeRequest(id: number) {
    return this.http.get(this.proxelEndpoint + id);
  }

}
