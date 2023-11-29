import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  httpClient = inject(HttpClient);
  dataList:any[] = [];

  ngOnInit(): void {
    this.fetchData();
  } 
  
  fetchData() {
    this.httpClient.get('https://jsonplaceholder.typicode.com/posts')
    .subscribe((data: any) => {
      console.log(data);
      this.dataList = data;
    })
  }
}
