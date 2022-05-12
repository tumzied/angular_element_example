import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"
import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import  { createCustomElement } from '@angular/elements';

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
    
  ],
  providers: [],
  bootstrap: [AppComponent ,PostsComponent]
})
export class AppModule { 
  constructor(private injector: Injector) {
    const el = createCustomElement(PostsComponent, { injector });
        customElements.define('app-posts', el);
  }

  ngDoBootstrap() {}

}

