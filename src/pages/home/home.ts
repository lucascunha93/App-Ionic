import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { MoovieProvider } from '../../providers/moovie/moovie';

import { FeedPage } from './../feed/feed';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(
    public navCtrl: NavController,
    private movieProvader: MoovieProvider
  ) {

  }

  goToFeedPage( ultimosFilmes:string ) {
    this.navCtrl.push( FeedPage, {
      endereco: ultimosFilmes
    } );
  }

}
