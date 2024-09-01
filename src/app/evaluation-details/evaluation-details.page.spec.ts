import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EvaluationDetailsPage } from './evaluation-details.page';

describe('EvaluationDetailsPage', () => {
  let component: EvaluationDetailsPage;
  let fixture: ComponentFixture<EvaluationDetailsPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
