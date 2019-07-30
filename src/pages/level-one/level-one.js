import { inject, observable } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnimeManager } from 'managers/anime-manager'

@inject(Router, AnimeManager)
export class LevelOne {

	constructor(router, animeManager) {
        this.router = router;
        this.router.routes.forEach((route, index) => {
            if (route.name === "home") {
                route.char = "H";
            } else {
                route.char = index;
            }
        })
        this.animeManager = animeManager;
    }

	attached() {
        this.levelOneData = this.animeManager.getLevelOneData();
        
        this.levelOneData.forEach(anime => {
            anime.toggleExtraInfo = false;

            // Calculate duration
            if (anime.episodeDuration) {
                let duration = parseInt(anime.episodes) * parseInt(anime.episodeDuration);
                let units = "mins"
                if (duration > 60) {
                    duration = duration / 60;
                    units = "hours"
                }
                if (duration > 24) {
                    duration = duration / 24;
                    units = "days";
                }
                anime.totalDuration = duration.toFixed(2);
                anime.totalDurationUnits = units;
            }

            // Calculate score colour
            let score = parseInt(anime.score);
            if (score >= 80) {
                anime.scoreColour = "green";
            } else if (score >= 51) {
                anime.scoreColour = "orange";
            } else {
                anime.scoreColour = "red";
            }
        });

        window.addEventListener("scroll", event => this.handleScrollEvent(event));
    }

    detached() {
        window.removeEventListener("scroll", event => this.handleScrollEvent(event))
    }

    handleScrollEvent(event) {
        this.scrollPosition = event.currentTarget.scrollY;
    }

    scrollToTop() {
        document.getElementById("top").scrollIntoView({ 
            behavior: 'smooth'
          });
    }
}