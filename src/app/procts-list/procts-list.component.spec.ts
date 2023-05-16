import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProctsListComponent } from './procts-list.component';

describe('ProctsListComponent', () => {
  let component: ProctsListComponent;
  let fixture: ComponentFixture<ProctsListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProctsListComponent]
    });
    fixture = TestBed.createComponent(ProctsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
