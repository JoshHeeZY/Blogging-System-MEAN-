import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Import the routing module
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostCreateComponent } from './post-create/post-create.component';

@NgModule({
  declarations: [AppComponent, PostListComponent, PostCreateComponent],
  imports: [
    BrowserModule,
    AppRoutingModule, // Add the routing module here
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
