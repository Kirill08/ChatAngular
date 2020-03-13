import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagelistComponent } from './chat-messagelist.component';

describe('ChatMessagelistComponent', () => {
  let component: ChatMessagelistComponent;
  let fixture: ComponentFixture<ChatMessagelistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessagelistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessagelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
