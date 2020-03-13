import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLeftHeadbarComponent } from './chat-left-headbar.component';

describe('ChatLeftHeadbarComponent', () => {
  let component: ChatLeftHeadbarComponent;
  let fixture: ComponentFixture<ChatLeftHeadbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLeftHeadbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLeftHeadbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
