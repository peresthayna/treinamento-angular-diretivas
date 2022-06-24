import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-ngif-ngfor',
  templateUrl: './diretivas-ngif-ngfor.component.html',
  styleUrls: ['./diretivas-ngif-ngfor.component.css']
})
export class DiretivasNgifNgforComponent implements OnInit {

  cursos: string[] = ['HTML, CSS e JS', 'Java', 'Angular 2'];
  mostrarCursos: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onMostrarCursos()
  {
    this.mostrarCursos = !this.mostrarCursos;
  }

}
