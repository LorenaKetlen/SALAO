import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-general',
  templateUrl: './header-general.component.html',
  styleUrls: ['./header-general.component.scss'],
})
export class HeaderGeneralComponent implements OnInit {
  @Input("title")
  title: string = "";
  @Input("tela")
  tela: string = "home";
  @Input("cor")
  cor: string =  "secondary";
  constructor() { }
  ngOnInit() {}

}
