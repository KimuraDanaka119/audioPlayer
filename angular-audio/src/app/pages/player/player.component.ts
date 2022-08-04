import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  files: Array<any> = [
    { name: "First Song", artist: "Inder" },
    { name: "Second Song", artist: "You" }
  ];
  i:number=0;
  file:any;
  state:any;
  currentFile: any = {};

  isFirstPlaying() {
    return false;
  }
  isLastPlaying() {
    return true;
  }
  previous(){

  }
  play(){

  }
  pause(){

  }
  openFile(file:any, i:number){

    return 
  }
  next(){

  }
  onSliderChangeEnd(e:any){

  }
}
