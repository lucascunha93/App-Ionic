import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from './../../providers/moovie/moovie';


/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers: [
    MoovieProvider,
  ]
})
export class FeedPage {

  public lista_filmes = new Array<any>();
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private movieProvader: MoovieProvider
  
  ) {
  }

  public endereco = this.navParams.get('endereco');

  ionViewDidLoad() {
    this.movieProvader.getMovies(this.endereco).subscribe(
      data=>{
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);
        this.lista_filmes = objeto_retorno.results;

        console.log(objeto_retorno);
      }, 
      error => {
        console.log(error);
      }

    )
  }
}
