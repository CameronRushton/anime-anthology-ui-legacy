import { inject, observable } from 'aurelia-framework';
import { Router } from "aurelia-router"
@inject(Router)
export class Home {

<<<<<<< Updated upstream
    constructor() {
=======
    constructor(router) {
        this.router = router;
        this.router.routes.forEach((route, index) => {
            if (route.name === "home") {
                route.char = "H";
            } else {
                route.char = index;
            }
        })

        this.levels = [
            {
                number: 1,
                title: "Beginner",
                description: "I'm new to anime",
                color: "green",
                image: "assets/images/dragon.svg" //Rabbit
            },
            {
                number: 2,
                title: "Novice",
                description: "I've seen a few",
                color: "blue",
                image: "assets/images/dragon.svg" //cat
            },
            {
                number: 3,
                title: "Intermediate",
                description: "I've seen dozens",
                color: "violet",
                image: "assets/images/dragon.svg" //Wolf
            },
            {
                number: 4,
                title: "Advanced",
                description: "I've seen hundreds",
                color: "orange",
                image: "assets/images/dragon.svg" //Griffin
            },
            {
                number: 5,
                title: "Expert",
                description: "I've seen it all",
                color: "red",
                image: "assets/images/dragon.svg" //Dragon
            }
        ]

    }

    attached() {
        window.addEventListener("scroll", event => this.handleScrollEvent(event));
    }

    detached() {
        window.removeEventListener("scroll", event => this.handleScrollEvent(event))
    }
>>>>>>> Stashed changes

    }

}