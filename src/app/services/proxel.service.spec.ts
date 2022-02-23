import { TestBed } from '@angular/core/testing';

import { ProxelService } from './proxel.service';

describe('ProxelService', () => {
  let service: ProxelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProxelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
