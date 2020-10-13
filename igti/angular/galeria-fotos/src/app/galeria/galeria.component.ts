import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.scss']
})
export class GaleriaComponent  {


  nenhuma = true;
  fotoAtual = 0;
  totalFotos = 0;
  @Input() fotos: string[] = [];
  @Input() titulo: string;

 /*  fotos:any[]= [
    {
      url: 'https://images.unsplash.com/photo-1535083783855-76ae62b2914e'
    },
    {
      url: 'https://images.unsplash.com/photo-1521651201144-634f700b36ef'
    },
    {
      url: 'https://images.unsplash.com/photo-1500479694472-551d1fb6258d'
    }
  ]; */
  firstPhoto(){
    console.log(this.fotos.length);
  }
  previewPhoto(){

    if (this.fotoAtual > 0) {
      this.fotoAtual--;
    }
  }
  nextPhoto(){
    this.fotoAtual++;
  }
  lastPhoto(){}

}
