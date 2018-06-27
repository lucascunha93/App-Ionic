import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

import { FeedPage } from './../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public lista_filmes = new Array<any>();

  constructor(
    public navCtrl: NavController,
    private movieProvader: MoovieProvider
  ) {}

  ionViewDidLoad() {
    this.movieProvader.getMovies( "/movie/popular?api_key=" ).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;
      }, 
      error => {
        console.log(error);
      }

    )
  }

  goToFeedPage( ultimosFilmes:string ) {
    this.navCtrl.push( FeedPage, {
      endereco: ultimosFilmes
    } );
  }

}
