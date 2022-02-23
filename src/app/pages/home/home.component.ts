import { Component, OnInit } from '@angular/core';
import { ProxelService } from 'src/app/services/proxel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  public response: string = '...';
  public payload: string = '1';

  constructor(private proxelService: ProxelService) {}

  ngOnInit(): void {}

  public executeRequest() {
    let id: number = parseInt(this.payload);
    this.proxelService.executeRequest(id).subscribe(data => {
      this.response = JSON.stringify(data, null, 2);
    });
  }
}
