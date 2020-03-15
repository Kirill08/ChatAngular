import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatHeadMenuComponent } from './chat-head-menu.component';

describe('ChatHeadMenuComponent', () => {
  let component: ChatHeadMenuComponent;
  let fixture: ComponentFixture<ChatHeadMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatHeadMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatHeadMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
