import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridsterTestComponent } from './gridster-test.component';

describe('GridsterComponent', () => {
  let component: GridsterTestComponent;
  let fixture: ComponentFixture<GridsterTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GridsterTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridsterTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
