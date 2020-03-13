import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatLeftSearchComponent } from './chat-left-search.component';

describe('ChatLeftSearchComponent', () => {
  let component: ChatLeftSearchComponent;
  let fixture: ComponentFixture<ChatLeftSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatLeftSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatLeftSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
