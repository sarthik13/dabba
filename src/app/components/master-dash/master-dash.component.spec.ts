import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterDashComponent } from './master-dash.component';

describe('MasterDashComponent', () => {
  let component: MasterDashComponent;
  let fixture: ComponentFixture<MasterDashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MasterDashComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MasterDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
