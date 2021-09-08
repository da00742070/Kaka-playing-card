import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetServiceService } from '../get-service.service';
import { Observable, Subject, ReplaySubject, from, of, range } from 'rxjs';

@Component({
  selector: 'app-playing-card',
  templateUrl: './playing-card.component.html',
  styleUrls: ['./playing-card.component.css']
})
export class PlayingCardComponent implements OnInit {
  Year: number = new Date().getFullYear();
  DackData: any;
  DeckID: any;
  ShowCard: any
  LoaderCondition: boolean;
  EmptyMsg: boolean;
  IsDisable: boolean;
  IsDeck: boolean;
  Isshow: boolean;
  ShowRemaining: any;

  constructor(private getservice: GetServiceService) { }
  ResetDeck() {
    this.LoaderCondition = true;
    this.EmptyMsg = false;
    this.IsDisable = false;
    this.IsDeck = false;
    let obj = this.getservice.GetCard();
    obj.subscribe(response => {
      this.DackData = response;
      this.LoaderCondition = false;
      this.DeckID = this.DackData.deck_id;
      this.Isshow = true;
      setTimeout(() => { this.Isshow = false; }, 3000);
    })
  }

  DrawCard() {
    this.LoaderCondition = true;
    this.IsDeck = true;
    this.getservice.GetDrawDeck(this.DeckID).subscribe(response => {
      console.log(response.remaining);
      this.ShowRemaining = response.remaining;
      this.LoaderCondition = false;
      if (response.remaining != 0) {
        this.ShowCard = response.cards[0].images.png
      } else {
        this.EmptyMsg = true;
        this.IsDisable = true;
      }
    })
  };
  ngOnInit(): void {
  }

}
