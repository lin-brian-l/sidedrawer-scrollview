import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from "@angular/core";
import { RadSideDrawer } from 'nativescript-pro-ui/sidedrawer';
import { RadSideDrawerComponent, SideDrawerType } from "nativescript-pro-ui/sidedrawer/angular";
import { Item } from "./item";
import { ItemService } from "./item.service";
import { Page } from "ui/page";
import { isAndroid } from "tns-core-modules/ui/frame/frame";
// import { GestureTypes, SwipeGestureEventData } from "ui/gestures";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html",
})

export class ItemsComponent implements OnInit, AfterViewInit {
    items: Item[];

    @ViewChild(RadSideDrawerComponent) public drawerComponent: RadSideDrawerComponent;
    private drawer: RadSideDrawer;

    constructor(private itemService: ItemService, private page: Page) {
    }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
    }

    public openDrawer() {
      this.drawerComponent.sideDrawer.showDrawer();
    }

    public closeDrawer() {
      this.drawerComponent.sideDrawer.closeDrawer()
    }

    onLoaded() {
        // this fixes the issue but is not ideal
        // if (isAndroid) {
        //     this.drawer.gesturesEnabled = false;
        // }
    }

}