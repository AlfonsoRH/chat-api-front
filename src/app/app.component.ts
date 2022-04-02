import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  name: string = 'Francisco';

  movies: string[] = [
    'Los tres Huastecos',
    'Alien',
    'Batman',
    'Una pelicula de huevos',
    'Pineapple express'
  ];

  filteredMovies: string[] = [];

  searchValue: string = '';

  flag: boolean = true;

  searchTimeOut: any;

  constructor() {
    setTimeout(() => {
      this.name = 'Juan';
      this.movies.push('Los 3 Garcia');
    },2000);

    this.filteredMovies = this.movies;
  }

  ngOnInit(): void { }

  doOnClick(e:any) {
    console.log('me hicieron click!');
    e.preventDefault();
    
    // this.flag = !this.flag;
    this.movies.push(this.searchValue);
    this.searchValue = '';
  }

  doSearch() {
    if(this.searchTimeOut) {
      clearTimeout(this.searchTimeOut);
    }

    this.searchTimeOut = setTimeout(() => {
      const searchValue = this.searchValue.toLowerCase();
      console.log('Se hace la busqueda');
      this.filteredMovies = this.movies.filter(item => {
        return item.toLowerCase().includes(searchValue);
      });
    }, 200);
  }
}
