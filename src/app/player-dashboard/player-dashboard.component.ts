import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from '../models/player.model';
import { DataService } from '../services/data.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'app-player-dashboard',
  templateUrl: './player-dashboard.component.html',
  styleUrls: ['./player-dashboard.component.css']
})
export class PlayerDashboardComponent implements OnInit {

  players: Player[]
  constructor(private data: DataService,private elementRef: ElementRef,public dialog: MatDialog) {
    this.players = data.players;
  }

  addPlayer(name: string) {
    console.log(name);
    if(name!="" && this.players.length===0)
    this.data.addPlayer(new Player(name));
    console.log(this.data);
  }
  deletePlayer(index: number) {
    this.data.deletePlayer(index);
  }
  ngOnInit(): void {
  }
  ngAfterViewInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#c9cbff';
    

  }
  openDialog() {
    const dialogRef = this.dialog.open(PopupComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
