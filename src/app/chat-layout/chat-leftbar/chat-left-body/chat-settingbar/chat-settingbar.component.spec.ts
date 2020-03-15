import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatSettingbarComponent } from './chat-settingbar.component';

describe('ChatSettingbarComponent', () => {
  let component: ChatSettingbarComponent;
  let fixture: ComponentFixture<ChatSettingbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatSettingbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatSettingbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
