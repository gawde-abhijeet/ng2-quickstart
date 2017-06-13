import { Component, OnInit } from '@angular/core';
import { ROUTES } from './navbar-routes.config';
import { MenuType } from './navbar.metadata';

@Component({
    selector: 'ct-navbar',
    templateUrl: 'app/core/navbar.component.html'
})
export class NavbarComponent implements OnInit {
    public topMenuItems: any[];
    //isIn = false;
    isCollapsed = true;

    constructor() {}

    ngOnInit() {
        this.topMenuItems = ROUTES.filter(menuItem => menuItem.menuType === MenuType.TOP);
    }

    public get menuIcon(): string {
        return this.isCollapsed ? '☰' : '✖';
    }

    toggleState() {
        //let bool = this.isIn;
        //this.isIn = bool === false ? true : false; 
        this.isCollapsed = !this.isCollapsed;
    }
 }