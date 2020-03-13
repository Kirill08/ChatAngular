import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatUserlistComponent } from './chat-userlist.component';

describe('ChatUserlistComponent', () => {
  let component: ChatUserlistComponent;
  let fixture: ComponentFixture<ChatUserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatUserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatUserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
