import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StakingGuideComponent } from './staking-guide.component';

describe('StakingGuideComponent', () => {
  let component: StakingGuideComponent;
  let fixture: ComponentFixture<StakingGuideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StakingGuideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StakingGuideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
