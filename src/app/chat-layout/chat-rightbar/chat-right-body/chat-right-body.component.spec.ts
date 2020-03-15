import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRightBodyComponent } from './chat-right-body.component';

describe('ChatRightBodyComponent', () => {
  let component: ChatRightBodyComponent;
  let fixture: ComponentFixture<ChatRightBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRightBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRightBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
