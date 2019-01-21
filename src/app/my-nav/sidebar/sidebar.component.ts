import { Component, OnInit } from '@angular/core';
import { IMenu } from '../../models/imenu.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuList:IMenu[] = [
    {
      menuName: "about",
      munuRouter: '/about', //router name
      menuId: "about" // HTML id attribute
    },
    {
      menuName: "work",
      munuRouter: '/work', //router name
      menuId: "work" // HTML id attribute
    },
    {
      menuName: "tech",
      munuRouter: '/tech', //router name
      menuId: "tech" // HTML id attribute
    },
    {
      menuName: "contact",
      munuRouter: '/contact', //router name
      menuId: "contact" // HTML id attribute
    },
    {
      menuName: "API Fun",
      munuRouter: '/apis', //router name
      menuId: "apis" // HTML id attribute
    },
  ]
  constructor() { }

  ngOnInit() {
  }

}
