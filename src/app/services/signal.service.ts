import { Injectable } from '@angular/core';
import { Observable, Subject, throwError } from 'rxjs';
import * as signalR from '@microsoft/signalr';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  // private connection = new signalR.HubConnectionBuilder()
  //   .withUrl("https://localhost:7261/nodehub")
  //   .build();     
    
    private connection = new signalR.HubConnectionBuilder()
    .withUrl("https://proxel-server.herokuapp.com/nodehub")
    .build();   

  public output = new Subject<string>(); 

  constructor() {
    
    this.connection.start();
    this.connection.on("PrintOutput", response => {
      this.output.next(response);
    });
  }

  public getOutput() {
    return this.output.asObservable();
  }

}
