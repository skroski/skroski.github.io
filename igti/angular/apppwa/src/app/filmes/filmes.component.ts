import { Component} from '@angular/core';

@Component({
  selector: 'app-filmes',
  templateUrl: './filmes.component.html',
  styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent {

  movies = [
    {title: 'Os Vingadores', rating: 5 },
    {title: 'Joias Brutas', rating: 3 },
    {title: 'Parasita', rating: 5 },
    {title: 'O Irlandes', rating: 5 },
    {title: 'Pantera Negra', rating: 4 }
  ];

}
