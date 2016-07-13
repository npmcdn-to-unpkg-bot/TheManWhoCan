///<reference path="../../typings.d.ts"/>
import { bootstrap } from '@angular/platform-browser-dynamic';
import { provide } from '@angular/core';
import { ROUTER_PROVIDERS } from '@angular/router';
import { HTTP_PROVIDERS } from '@angular/http';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { AppComponent } from "./app.component";
import { BlogService } from './blogs/blog.service';

bootstrap(AppComponent, [ ROUTER_PROVIDERS, HTTP_PROVIDERS, BlogService, provide(LocationStrategy, {useClass:HashLocationStrategy}) ]);