import { TestBed } from '@angular/core/testing';

import { ProtoService } from './proto.service';

describe('ProtoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProtoService = TestBed.get(ProtoService);
    expect(service).toBeTruthy();
  });
});
