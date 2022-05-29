import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  userName :string = "";
  response: any;
  asd: any;


  constructor(private http: HttpClient) {

  }

  checkPlanet() {
    this.http.get('https://swapi.dev/api/planets/' )
    .subscribe((response)=>{
      this.response = response;
      console.log(this.response.results[0]); 
    }
    ) 
    this.http.get('https://swapi.dev/api/people/')
    .subscribe((asd)=>{
      this.asd = asd ;
      console.log(asd)
      var newArray = []
      let someArray = this.asd.results;
      for (var _i = 0; _i < someArray.length; _i++) {
        if (this.response.results[0].url === this.asd.results[_i].homeworld){
        var Array = newArray.unshift(this.asd.results[_i].name);
        console.log(this.asd.results[_i].name);
      }
      }
      console.log(newArray)
    }
    )
  };
  }
