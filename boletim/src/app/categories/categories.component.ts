import { Component } from '@angular/core';

@Component({
  selector: 'cin-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {


  alunos = [
    { nome: 'Pedro', nota: 5  , turma: '1A' , resultado: true },
    { nome: 'Georgian', nota: 10, turma: '1B' , resultado: true },
    { nome: 'Everton R', nota: 7, turma: '1C' , resultado: true },
    { nome: 'Everton C', nota: 2, turma: '2A' , resultado: true },
    { nome: 'Matheus C', nota: 9, turma: '2B' , resultado: true },
    { nome: 'Gabriel', nota: 10, turma: '2C' , resultado: true },
    { nome: 'Wesley', nota: 8, turma: '3A' , resultado: true },
    { nome: 'Allan', nota: 7, turma: '3B' , resultado: true },
    { nome: 'Bruno H', nota: 10, turma: '3C' , resultado: true },
    { nome: 'David', nota: 7, turma: '1A' , resultado: true },
    { nome: 'Gerson', nota: 8, turma: '1B' , resultado: true },
    { nome: 'Filipe', nota: 6, turma: '1C' , resultado: true },
    { nome: 'Erick', nota: 9, turma: '2A' , resultado: true },
    { nome: 'Léo', nota: 8, turma: '2B' , resultado: true },
    { nome: 'Fabrício', nota: 7, turma: '2C' , resultado: true },
    { nome: 'Victor', nota: 5, turma: '3A' , resultado: true },
    { nome: 'Ayrton', nota: 10, turma: '3B' , resultado: true },
    { nome: 'Rodrigo', nota: 1, turma: '3C' , resultado: true },
    { nome: 'Thiago', nota: 0, turma: '1A' , resultado: true },
    { nome: 'Matheus F', nota: 7, turma: '1B' , resultado: true },
  ];

  alunosburro(nota: number): string {
    if (nota <= 6) {
      return 'Reprovado';
    } else {
      return 'Aprovado';
    }
  }
}
