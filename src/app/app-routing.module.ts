import { CommentDetailsComponent } from './comment-details/comment-details.component';
import { CreateCommentComponent } from './create-comment/create-comment.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListComponent } from './comment-list/comment-list.component';
import { UpdateCommentComponent } from './update-comment/update-comment.component';

const routes: Routes = [
  { path: '', redirectTo: 'comment', pathMatch: 'full' },
  { path: 'comments', component: CommentListComponent },
  { path: 'add', component: CreateCommentComponent },
  { path: 'update/:id', component: UpdateCommentComponent },
  { path: 'details/:id', component: CommentDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
