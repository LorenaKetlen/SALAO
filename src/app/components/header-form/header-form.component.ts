import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-form',
  templateUrl: './header-form.component.html',
  styleUrls: ['./header-form.component.scss'],
})
export class HeaderFormComponent implements OnInit {
  @Input("title")
  title: string = "";
  @Input("tela")
  rota: string = "home";
  @Input("cor")
  cor: string =  "secondary";
  constructor() { }
  ngOnInit() {}
}
