import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { UserComponent } from './components/users/user/user.component';
import { FeedComponentComponent } from './components/feeds-component/feed-component/feed-component.component';
import { AdComponentComponent } from './components/ads-component/ad-component/ad-component.component';
import { PostComponentComponent } from './components/posts-component/post-component/post-component.component';
import { AdsComponentComponent } from './components/ads-component/ads-component.component';
import { PostsComponentComponent } from './components/posts-component/posts-component.component';
import { FeedsComponentComponent } from './components/feeds-component/feeds-component.component';
import { PostByUserComponent } from './pages/postsByUser/postByUser.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { UserPostComponent } from './components/user-posts/user-post/user-post.component';
import { UsersComponent } from './components/users/users.component';
import { PostById } from './pages/postById/post.component';
import { UserComponentComponent } from './components/user-component/user-component.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FeedComponent,
    UserComponent,
    UserComponentComponent,
    FeedComponentComponent,
    AdComponentComponent,
    PostComponentComponent,
    AdsComponentComponent,
    PostsComponentComponent,
    FeedsComponentComponent,
    PostByUserComponent,
    UserPostsComponent,
    UserPostComponent,
    UsersComponent,
    PostById
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
