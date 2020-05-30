import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorteen'
})
export class ShorteenPipe implements PipeTransform {

  transform(value: string, tamanho:number, deve_aplicar: boolean): String {
    if(deve_aplicar){
      return value.substr(0,tamanho);
    }else{
      return value;
    }
  }

}
