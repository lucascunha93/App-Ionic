import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";
  
  constructor(public http: Http) {}

  getMovies( endereco: string ) {
    return  this.http.get( this.baseApiPath + endereco + this.pegarChaveApi() + "&language=pt-BR");
  }

  pegarChaveApi(): string {
      return 'fb881db9e6e5fba119ddc382770b9d23';
  }

}
