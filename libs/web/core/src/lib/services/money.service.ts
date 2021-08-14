import { Injectable } from "@angular/core";

import {Big} from 'big.js'

@Injectable({providedIn: 'root'})
export class MoneyService{

  constructor(){
    Big.RM = Big.roundHalfUp
  }

  formatMoney(value: number) {
    if(value){
      const amount = Number.parseFloat(value.toString());
      return +(new Big(amount).toFixed(2));
    }
    console.log('Formatting null or undefined amount returns 0 ')
    return  0
  }
}
