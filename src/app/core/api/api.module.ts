import { NgModule } from '@angular/core';
import { BaseApiService } from './base-api.service';
import { HttpClient } from 'selenium-webdriver/http';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [],
  imports: [
    HttpClientModule
  ]
})
export class ApiModule { }
