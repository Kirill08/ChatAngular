import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHeadProfileComponent } from './chat-head-profile.component';

describe('ChatHeadProfileComponent', () => {
  let component: ChatHeadProfileComponent;
  let fixture: ComponentFixture<ChatHeadProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHeadProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeadProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
