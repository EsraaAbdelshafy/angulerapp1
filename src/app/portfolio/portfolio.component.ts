import { Component, ElementRef, ViewChild } from '@angular/core';
interface Iuse {
  imgSrc: string;}
[];

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  icons: Iuse[] = [
    {imgSrc: '../assets/poert1.png'},
    {imgSrc: '../assets/port2.png'},
    {imgSrc: '../assets/port3.png'},
    {imgSrc: '../assets/poert1.png'},
    {imgSrc: '../assets/port2.png'},
    {imgSrc: '../assets/port3.png'},
    
  ]
isClicked:Boolean=false
imgSrc:string="";

open(mainImg:string){
  this.isClicked=true
this.imgSrc= '../../assets/'+mainImg;
}

close(){
  this.isClicked=false
}
};
