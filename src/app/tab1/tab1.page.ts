import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  display: string = '';
  private num1: number=0;
  private num2: number=0;
  private operacion: string='';


  append(value: string){
    this.display += value;
  }

  operaciones(op: string){
    this.num1 = parseFloat(this.display);
    this.operacion = op;
    this.display = '';
  }

  calculos(){
    this.num2=parseFloat(this.display);
    let result: number=0;
    switch(this.operacion){
      case '+':
        result=this.num1+this.num2;
        break;
      case '-':
        result=this.num1-this.num2;
        break
      case '/':
        if(this.num2==0){
          this.display = 'No existen divisiones para 0';
        }else{
          result=this.num1/this.num2;
        }
        break
      case '*':
        result=this.num1*this.num2;
        break
        default:
          return; 
    }
    this.display = result.toString();
  }

  limpiar(){
    this.display = '';
    this.num1 = 0;
    this.num2 = 0;
    this.operacion = '';
  }
}
