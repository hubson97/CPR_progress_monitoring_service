import { Component, OnInit } from '@angular/core';
import { routes } from '../../../consts';


@Component({
  selector: 'app-forbidden403',
  templateUrl: './forbidden403.component.html',
  styleUrls: ['./forbidden403.component.scss']
})
export class Forbidden403Component implements OnInit {

  public routes: typeof routes = routes;

  constructor() { }

  ngOnInit(): void {
  }

}
