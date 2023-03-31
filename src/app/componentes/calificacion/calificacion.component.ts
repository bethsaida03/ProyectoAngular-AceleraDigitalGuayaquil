import { Component, Input, OnInit, Output,AfterViewInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-calificacion',
  templateUrl: './calificacion.component.html',
  styleUrls: ['./calificacion.component.css']
})
export class CalificacionComponent implements OnInit, AfterViewInit {
  // currentRate = 0;
  constructor(){}
  @Input() calificacion: number=0;
  @Output() select= new EventEmitter<any>();

  faStar = faStar;

  lista:any[]=[];
  ngOnInit(){
    this.lista=[];
    for(let i=0; i<this.calificacion; i++){
      this.lista.push(1);
    }
  }
  ngAfterViewInit(){
    
  }
  mostrarCalificacion(){
    this.select.emit(this.calificacion);
  }
}
