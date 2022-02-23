import { Component, OnInit } from '@angular/core';
import { ProxelService } from 'src/app/services/proxel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public nodes: any;
  public response: any;
  public payload: string = '1';

  constructor(private proxelService: ProxelService) {}

  ngOnInit(): void {
    this.proxelService.getNodes().subscribe(data => {
      this.nodes = data;
    });
  }

  public executeRequest() {
    let id = parseInt(this.payload);
    this.proxelService.getPlanet(id).subscribe(data => {
      this.response = JSON.stringify(data, null, 2);
      // this.response = data;
    });
  }
}
