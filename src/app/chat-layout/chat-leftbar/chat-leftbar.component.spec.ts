import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLeftbarComponent } from './chat-leftbar.component';

describe('ChatLeftbarComponent', () => {
  let component: ChatLeftbarComponent;
  let fixture: ComponentFixture<ChatLeftbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLeftbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLeftbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
