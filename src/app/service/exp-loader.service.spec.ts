import { TestBed } from '@angular/core/testing';

import { ExpLoaderService } from './exp-loader.service';

describe('ExpLoaderService', () => {
  let service: ExpLoaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExpLoaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
