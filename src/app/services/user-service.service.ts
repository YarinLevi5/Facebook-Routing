import { Injectable } from '@angular/core';
import { retry } from 'rxjs';
import { Post } from '../entities/post';
import { User } from '../entities/user';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  private users: User[] = [];
  constructor() {
    this.users = [
      {
        id: '1',
        name: 'lior',
        age: 23,
        email: 'lior@gmail.com',
        password: '123456',
        birthday: new Date(),
        feed: [
          {
            ads: [
              {
                id: '567483920',
                title: 'Buy something ?',
              }
            ],
            posts: [
              {
                id: '1',
                title: 'post1',
                time: new Date(),
                content: 'content number 1',
              },
              {
                id: '2',
                title: 'post1',
                time: new Date(),
                content: 'content number 2',
              }
            ]
          }

        ],
        userPosts: [
          {
            id: '1',
            time: new Date(),
            title: 'post 7',
            content: 'post 7 content',
          },
          {
            id: '2',
            time: new Date(),
            title: 'post 44',
            content: 'post 44 content',
          },
        ],
      },

      {
        id: '2',
        name: 'maya',
        age: 50,
        email: 'maya@gmail.com',
        password: '1565436',
        birthday: new Date(),
        feed: [
          {
            ads: [
              {
                id: '2',
                title: 'ad number 2',
              }
            ],
            posts: [
              {
                id: "3",
                title: 'post number 3',
                time: new Date(),
                content: 'content number 2',
              },
              {
                id: "4",
                title: 'post number 4',
                time: new Date(),
                content: 'content number 4',
              }
            ]
          }
        ],
        userPosts: [
          {
            id: '1',
            time: new Date(),
            title: 'post 1',
            content: 'post 1 content',
          },
          {
            id: '2',
            time: new Date(),
            title: 'post 2',
            content: 'post 2 content',
          },
        ],
      },
    ];
  }

  getAllUsers(): User[] {
    return this.users;
  }
  getUserById(userId: string): User {
    return this.users.find(user => user.id === userId) ?? new User('', '', 0, '', '', new Date(), [], []);
  }
  getPostById(postId: string): Post {
    let postsArray: any = []
    this.users.forEach(user => {
      user.feed.forEach(feed => {
        feed.posts.forEach(post => {
          postsArray.push(post)
        })
      })
    })
    return postsArray.find((post: { id: string }) => post.id === postId) ?? new Post('', '', '', '', new Date());
  }
}
