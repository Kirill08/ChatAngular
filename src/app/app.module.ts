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
    ChatUserComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
