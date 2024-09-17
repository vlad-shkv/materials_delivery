import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionSectionComponent } from './connection-section.component';

describe('ConnectionSectionComponent', () => {
  let component: ConnectionSectionComponent;
  let fixture: ComponentFixture<ConnectionSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConnectionSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
