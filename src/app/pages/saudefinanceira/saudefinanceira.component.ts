import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-saudefinanceira',
  templateUrl: './saudefinanceira.component.html',
  styleUrls: ['./saudefinanceira.component.scss']
})
export class SaudefinanceiraComponent implements OnInit {

  fase1Collapse:boolean = true;
  fase2Collapse:boolean = true;
  fase3Collapse:boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
