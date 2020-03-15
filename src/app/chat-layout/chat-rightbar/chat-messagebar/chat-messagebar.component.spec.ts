import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatMessagebarComponent } from './chat-messagebar.component';

describe('ChatMessagebarComponent', () => {
  let component: ChatMessagebarComponent;
  let fixture: ComponentFixture<ChatMessagebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatMessagebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatMessagebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
