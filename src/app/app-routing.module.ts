import { UsersComponent } from './users/users.component';
import { PostByUserComponent } from './pages/postsByUser/postByUser.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UserComponent } from './pages/user/user.component';
import { FeedComponent } from './pages/feed/feed.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  { path: 'feed/:userId', component: FeedComponent },
  { path: 'posts/userId/:id', component: PostByUserComponent },
  { path: 'posts/:postId', component: PostComponent },
  { path: 'users/:id', component: UserComponent },
  { path: 'users', component: UsersComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
