import { Component, OnInit } from '@angular/core';
// import { resolve } from 'url';
// import { reject } from 'q';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: []
})
export class PromesasComponent implements OnInit {

  constructor() { 

    // let promesa=new Promise((resolve, reject)=>{
    //   let contador=0;
    //   let intervalo=setInterval(()=>{
    //     contador+=1;
    //     console.log(contador);
    //     if(contador===3){
    //       resolve('Ok!');
    //       // reject('simplemente error');
    //       clearInterval(intervalo);
    //     }
    //   }, 1000);
    // });

    // promesa.then(
    this.contarTres().then(
      mensaje=> console.log('Termino', mensaje)
      // ()=>console.log('err')
    ).catch(
      error=>console.log('Error en la promesa', error)
    );

  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean>{
    return new Promise((resolve, reject)=>{
      let contador=0;
      let intervalo=setInterval(()=>{
        contador+=1;
        console.log(contador);
        if(contador===3){
          resolve(true);
          // reject('simplemente error');
          clearInterval(intervalo);
        }
      }, 1000);
    });
  }

}
