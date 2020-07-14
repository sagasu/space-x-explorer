import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { GraphQLModule } from './graphql.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LaunchListComponent } from './components/launch-list/launch-list.component';
import { LaunchDetailsComponent } from './components/launch-details/launch-details.component';
import { RelativeTimePipe } from './pipes/relative-time.pipe';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent, LaunchListComponent, LaunchDetailsComponent, RelativeTimePipe
  ],
  imports: [
    CommonModule,
    BrowserModule,
    
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    
    GraphQLModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
