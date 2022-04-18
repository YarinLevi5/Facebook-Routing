import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FeedComponent } from './pages/feed/feed.component';
import { UserComponent } from './pages/user/user.component';
import { FeedComponentComponent } from './feeds-component/feed-component/feed-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
import { AdComponentComponent } from './ads-component/ad-component/ad-component.component';
import { PostComponentComponent } from './posts-component/post-component/post-component.component';
import { AdsComponentComponent } from './ads-component/ads-component.component';
import { PostsComponentComponent } from './posts-component/posts-component.component';
import { FeedsComponentComponent } from './feeds-component/feeds-component.component';
import { PostByUserComponent } from './pages/postsByUser/postByUser.component';
import { UserPostsComponent } from './user-posts/user-posts.component';
import { UserPostComponent } from './user-posts/user-post/user-post.component';
import { UsersComponent } from './users/users.component';

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
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
