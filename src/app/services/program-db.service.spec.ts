import { TestBed } from '@angular/core/testing';

import { ProgramDbService } from './program-db.service';

describe('ProgramDbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProgramDbService = TestBed.get(ProgramDbService);
    expect(service).toBeTruthy();
  });
});
