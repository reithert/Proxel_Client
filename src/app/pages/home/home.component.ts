import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProxelService } from 'src/app/services/proxel.service';
import { SignalService } from 'src/app/services/signal.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public nodes: any;
  public response: string = "";
  public payload: string = '1';
  public hostname: string = "null";
  public outputObservable = new Observable<string>();

  constructor(private proxelService: ProxelService, private signalService: SignalService) {}

  ngOnInit(): void {
    this.proxelService.getNodes().subscribe(data => {
      this.nodes = data;
    });
    this.outputObservable = this.signalService.getOutput();
    this.outputObservable.subscribe(x => {
      this.response += x + "\n";
    });
  }

  public executeRequest() {

    if(this.payload == "clear") {
      this.response = "";
      return;
    }
    
    this.proxelService.executeRequest({"HostName": this.hostname, "Payload": this.payload}).subscribe(data => {
      // let test = JSON.stringify(data);
      // this.response = JSON.parse(test).output.trim();
      // console.log(this.response)
    });

    this.payload = "";
  }
}
