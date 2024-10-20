import { Component } from '@angular/core';
import { PostsService } from '../../services/posts.service';
import { Post } from '../../types/post';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent {
  posts: Post[] = [];
  form: FormGroup;
  
  constructor(private postsService: PostsService, private fb: FormBuilder){
    this.form = this.fb.group({
      title: ['', Validators.required],
      body: ['', Validators.required],
      userId: ['', Validators.required],
    })
  }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
      console.log(posts);
    })
  }

  createPost(): void{
    const post: Post = this.form.value;
    if(this.form.invalid) return;

    this.postsService.createPost(post).subscribe(post => {
      this.posts.unshift(post);
    });
  }

  updatePost(id: number): void{
    const post: Post = this.form.value;
    if(this.form.invalid) return;
    post.id = id;

    this.postsService.updatePost(post).subscribe(updatedPost => {
      const index = this.posts.findIndex(p => p.id === updatedPost.id);
      this.posts[index] = updatedPost;
    })
  }

  deletePost(id: number): void{
    this.postsService.deletePost(id).subscribe(() => {
      this.posts.splice(this.posts.findIndex(post => post.id === id), 1);
    });
  }

}
