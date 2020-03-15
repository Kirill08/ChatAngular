import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChatLayoutComponent } from './chat-layout/chat-layout.component';
import { ChatLeftbarComponent } from './chat-layout/chat-leftbar/chat-leftbar.component';
import { ChatRightbarComponent } from './chat-layout/chat-rightbar/chat-rightbar.component';
import { ChatLeftHeadbarComponent } from './chat-layout/chat-leftbar/chat-left-headbar/chat-left-headbar.component';
import { ChatLeftSearchComponent } from './chat-layout/chat-leftbar/chat-left-search/chat-left-search.component';
import { ChatLeftBodyComponent } from './chat-layout/chat-leftbar/chat-left-body/chat-left-body.component';
import { ChatMenuComponent } from './chat-layout/chat-leftbar/chat-menu/chat-menu.component';
import { ChatUserlistComponent } from './chat-layout/chat-leftbar/chat-left-body/chat-userlist/chat-userlist.component';
import { ChatMessagelistComponent } from './chat-layout/chat-leftbar/chat-left-body/chat-messagelist/chat-messagelist.component';
import { ChatMessageComponent } from './chat-layout/chat-leftbar/chat-left-body/chat-messagelist/chat-message/chat-message.component';
import { ChatUserComponent } from './chat-layout/chat-leftbar/chat-left-body/chat-userlist/chat-user/chat-user.component';
import { ProfilebarComponent } from './chat-layout/chat-leftbar/chat-left-body/profilebar/profilebar.component';
import { ProfileDetailComponent } from './chat-layout/chat-leftbar/chat-left-body/profile-detail/profile-detail.component';
import { ChatHeadComponent } from './chat-layout/chat-rightbar/chat-head/chat-head.component';
import { ChatHeadProfileComponent } from './chat-layout/chat-rightbar/chat-head/chat-head-profile/chat-head-profile.component';
import { ChatHeadMenuComponent } from './chat-layout/chat-rightbar/chat-head/chat-head-menu/chat-head-menu.component';
import { ChatRightBodyComponent } from './chat-layout/chat-rightbar/chat-right-body/chat-right-body.component';
import { ChatMessagebarComponent } from './chat-layout/chat-rightbar/chat-messagebar/chat-messagebar.component';
import { ChatSettingbarComponent } from './chat-layout/chat-leftbar/chat-left-body/chat-settingbar/chat-settingbar.component';

@NgModule({
  declarations: [
    AppComponent,
    ChatLayoutComponent,
    ChatLeftbarComponent,
    ChatRightbarComponent,
    ChatLeftHeadbarComponent,
    ChatLeftSearchComponent,
    ChatLeftBodyComponent,
    ChatMenuComponent,
    ChatUserlistComponent,
    ChatMessagelistComponent,
    ChatMessageComponent,
    ChatUserComponent,
    ProfilebarComponent,
    ProfileDetailComponent,
    ChatHeadComponent,
    ChatHeadProfileComponent,
    ChatHeadMenuComponent,
    ChatRightBodyComponent,
    ChatMessagebarComponent,
    ChatSettingbarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
