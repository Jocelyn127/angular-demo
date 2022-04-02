import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNgComponent01 } from './my01';
import { My02Component } from './my02';
import { MyC03Component } from './myc03/myc03.component';
import { Myc04Component } from './myc04/myc04.component';
import { MyDirectiveComponent } from './my-directive/my-directive.component';
import { FormsModule } from '@angular/forms';
import { CustomDirectiveDirective } from './my-directive/custom-directive.directive';
import { TodoListComponent } from './todo-list/todo-list.component';
import { ConvertPipe } from './convert.pipe';
import { HttpClientModule } from '@angular/common/http';
import { MyServiceComponent } from './my-service/my-service.component';
import { LogService } from './todo-list/todo-list.service';
import { MyBlogParentComponent } from './my-blog-parent/my-blog-parent.component';
import { MyChild1Component } from './my-blog-parent/my-child1/my-child1.component';
import { MyChild2Component } from './my-blog-parent/my-child2/my-child2.component';
import { ProductListComponent } from './product-list/product-list.component';
import { IndexComponent } from './index/index.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { UserCenterComponent } from './user-center/user-center.component';
import { RouterModule } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { InfoComponent } from './info/info.component';

let routes = [
  // {path: '', component: IndexComponent},
  // {path: '', redirectTo: 'index', pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  // { path: 'product-list', component: ProductListComponent },
  // { path: 'product-detail/:id', component: ProductDetailComponent },
  {
    path: 'user-center', component: UserCenterComponent,
    children: [
      { path: '', component: InfoComponent },
      { path: 'info', component: InfoComponent }
    ]
  },
  // ** 匹配任意地址的值
  { path: '**', component: NotFoundComponent }
]
@NgModule({
  declarations: [
    AppComponent,
    MyNgComponent01,
    My02Component,
    MyC03Component,
    Myc04Component,
    MyDirectiveComponent,
    CustomDirectiveDirective,
    TodoListComponent,
    ConvertPipe,
    MyServiceComponent,
    MyBlogParentComponent,
    MyChild1Component,
    MyChild2Component,
    ProductListComponent,
    IndexComponent,
    NotFoundComponent,
    InfoComponent,
    UserCenterComponent
  ],
  imports: [
    BrowserModule,  // web项目必须导入浏览器模块， 里面包含CommonModule(包含ngIf, ngFor, 不包含ngModel)
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes) //导入路由模块并注册路由词典，用于根模块中
  ],
  exports: [RouterModule],
  providers: [LogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
