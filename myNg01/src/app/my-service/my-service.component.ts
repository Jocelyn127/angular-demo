import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-service',
  templateUrl: './my-service.component.html',
  styleUrls: ['./my-service.component.scss']
})
export class MyServiceComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  loadProduct(){
    let url = 'xxxxxx';
    this.http.get(url).subscribe(res=>{
      
    });

  }
}
