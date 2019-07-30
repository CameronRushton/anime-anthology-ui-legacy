import { inject, observable } from 'aurelia-framework';
import { Router } from "aurelia-router"
@inject(Router)
export class Home {

    constructor(router) {
        this.router = router;
        this.router.routes.forEach((route, index) => {
            if (route.name === "home") {
                route.char = "H";
            } else {
                route.char = index;
            }
        })
    }

    attached() {
        window.addEventListener("scroll", event => this.handleScrollEvent(event));
    }

    detached() {
        window.removeEventListener("scroll", event => this.handleScrollEvent(event))
    }

    handleScrollEvent(event) {
        this.scrollPosition = event.currentTarget.scrollY;
    }

}