import { TestBed } from '@angular/core/testing';

import { SaiQuestionsService } from './sai-questions.service';

describe('SaiQuestionsService', () => {
  let service: SaiQuestionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaiQuestionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
