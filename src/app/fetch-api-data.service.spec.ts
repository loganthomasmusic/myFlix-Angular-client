import { TestBed } from '@angular/core/testing';

import { FetchApiDatService } from './fetch-api-data.service';

describe('FetchApiDatService', () => {
  let service: FetchApiDatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});