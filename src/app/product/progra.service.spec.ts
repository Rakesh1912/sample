import { TestBed } from '@angular/core/testing';

import { PrograService } from './progra.service';

describe('PrograService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrograService = TestBed.get(PrograService);
    expect(service).toBeTruthy();
  });
});
