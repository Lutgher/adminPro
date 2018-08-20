import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
// import { EventEmitter } from 'events';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: []
})
export class IncrementadorComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input('Nombre') leyenda: string='Leyenda';
  @Input() porcentaje: number=50;

  @Output('actualiza') cambiovalor: EventEmitter<number> = new EventEmitter();


  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('porcentaje', this.porcentaje);

   }

  ngOnInit() {
    // console.log('Leyenda', this.leyenda);
    // console.log('porcentaje', this.porcentaje);
  }

  onChanges(newValue: number){
    //valida los valores en la cjaa de texto
    // let elemHTML: any = document.getElementsByName('porcentaje')[0];

    // console.log(elemHTML.value);
    //fin de validación
    // console.log(this.txtProgress);
    //console.log(newValue);
    if(newValue>=100) this.porcentaje=100;
    else if(newValue<=0) this.porcentaje=0;
    else this.porcentaje=newValue;
    
    // elemHTML.value=Number(this.porcentaje);
    // elemHTML.value=this.porcentaje;
    this.txtProgress.nativeElement.value=this.porcentaje;
    this.cambiovalor.emit(this.porcentaje);
    
  }
  
  variarValor(valor: number){
    if(this.porcentaje>=100 && valor>0){ this.porcentaje=100; return;}
    if(this.porcentaje<=0 && valor<0) {this.porcentaje=0; return;}
    this.porcentaje=this.porcentaje + valor;
    this.cambiovalor.emit(this.porcentaje);
    this.txtProgress.nativeElement.focus();
  }
}
