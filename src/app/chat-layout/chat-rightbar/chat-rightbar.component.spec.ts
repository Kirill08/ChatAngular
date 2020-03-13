import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatRightbarComponent } from './chat-rightbar.component';

describe('ChatRightbarComponent', () => {
  let component: ChatRightbarComponent;
  let fixture: ComponentFixture<ChatRightbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatRightbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatRightbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
