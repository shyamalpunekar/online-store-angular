import { Component, OnInit } from '@angular/core';
import { Album } from '../album.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.css']
})
export class MarketplaceComponent {

  albums: Album[] = [
    new Album("Funhouse", "The Stooges",
       "The second  album from the American rock band, released in 1970 by Elektra Records.", 2),
   new Album("Twilight of the Thunder God", "Amon Amarth",
       "Seventh album by the Swedish band, released in 2008, based on Thor's battle with the serpent Jörmungandr.", 3),
   new Album("Dilate", "Ani DiFranco",
       "Her highest-selling and most acclaimed album, released in 1996.", 4),
   new Album("Chopin - Complete Nocturnes", "Brigitte Engerer",
       "Released in 2010, this is Engerer's own rendition of the classical composer Chopin.", 5),
   new Album("Axis Bold As Love", "The Jimi Hendrix Experience",
       "Second studio album by the English-American band, released in 1967.", 6)
  ];
  
  constructor(private router: Router){}

  gotToDetailPage(clickedAlbum: Album){
    this.router.navigate(['albums', clickedAlbum.id]);
  }

}
