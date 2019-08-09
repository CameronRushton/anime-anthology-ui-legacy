import { inject, observable } from 'aurelia-framework';
import { Router } from "aurelia-router"

@inject(Router)
export class Home {

    constructor(router) {
        this.router = router;
    }

    attached() {
        this.levels = [
            {
                number: 1,
                title: "Beginner",
                description: "I'm new to anime",
                color: "green",
                image: "assets/images/rabbit-teal.png", //Rabbit
                route: this.router.routes[1].route
            },
            {
                number: 2,
                title: "Novice",
                description: "I've seen a few",
                color: "blue",
                image: "assets/images/cat-teal.png", //cat
                route: this.router.routes[2].route
            },
            {
                number: 3,
                title: "Intermediate",
                description: "I've seen dozens",
                color: "violet",
                image: "assets/images/wolf-teal.png", //Wolf
                route: this.router.routes[3].route
            },
            {
                number: 4,
                title: "Advanced",
                description: "I've seen hundreds",
                color: "orange",
                image: "assets/images/griffin-teal.png", //Griffin
                route: this.router.routes[4].route
            },
            {
                number: 5,
                title: "Expert",
                description: "I've seen it all",
                color: "red",
                image: "assets/images/dragon-teal.png", //Dragon
                route: this.router.routes[5].route
            }
        ]
    }
}