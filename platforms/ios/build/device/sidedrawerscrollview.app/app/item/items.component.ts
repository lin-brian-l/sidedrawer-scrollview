import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { Item } from "./item";
import { ItemService } from "./item.service";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})

export class ItemsComponent implements OnInit {
    items: Item[];

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    public openDrawer() {
      // this.drawer.showDrawer();
      this.drawerComponent.sideDrawer.showDrawer();
    }

    public closeDrawer() {
      this.drawerComponent.sideDrawer.closeDrawer();
    }
}