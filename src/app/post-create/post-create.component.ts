import { Component } from '@angular/core';
import { PostService } from '../post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css'],
})
export class PostCreateComponent {
  title: string = '';
  content: string = '';
  author: string = '';

  constructor(private postService: PostService, private router: Router) {}

  addPost(): void {
    const newPost = {
      title: this.title,
      content: this.content,
      author: this.author,
    };

    this.postService.addPost(newPost).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
