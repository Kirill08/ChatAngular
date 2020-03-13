import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLeftBodyComponent } from './chat-left-body.component';

describe('ChatLeftBodyComponent', () => {
  let component: ChatLeftBodyComponent;
  let fixture: ComponentFixture<ChatLeftBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLeftBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLeftBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
