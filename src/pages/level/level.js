import { inject, observable } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnimeManager } from 'managers/anime-manager'

@inject(Router, AnimeManager)
export class Level {

	constructor(router, animeManager) {
        this.router = router;
        this.animeManager = animeManager;
        this.screenWidth = screen.width;
    }

	attached() {
        document.getElementById("top").scrollIntoView();
        this.pickData()
    }

    pickData() {
        this.router.routes.forEach((route, index) => {
            if (route.navModel.isActive) {
                if (index == 6) {
                    this.animeManager.getCurrentlyWatching().then(payload => {
                        this.postProcess(payload);
                    });
                } else {
                    this.animeManager.getData(index-1).then(payload => {
                        this.postProcess(payload);
                    }); // Minus one because home is at index 0 and the anime manager has levels starting at 0
                }
                this.level = {name: route.title, number: index} // Rename from level to page info
            }
        })

        let descriptions = ["New to anime? Start with these. There will be something you like in here. We're just scratching the surface. Watch at least 4 of these to continue to level two.",
            "Other great anime that didn't quite make the cut into the top. At this stage, you think anime is kinda cool and want to see what more it has to offer. Watch at least 5 of these to continue to level three.",
            "These are good and some are great anime, but for various reasons, didn't make it to the top. At this point, you should be a certified weeb and are losing your grip on life because of how great anime is.Watch at least 10 of these to continue to level four.",
            "This level has anime that I wouldn't recommend for beginners. It may be complex, not define the anime genre well and turn people off or are just not good to watch. Since you should watch shows in this level after you're done with the other three levels, you may find some shows here to be either bad, or extremely interesting because of how complex or different the show is. Quality is very hit or miss. This is near the end game. Watch at least a total of 70 shows to continue to level five.",
            "The end game. You must have watched a lot of anime to not be put off by some of the stuff in here. Some of it is bad, some of it is really good. Assume most are bad."]

        this.level.description = descriptions[this.level.number-1]
        this.level.hero = `assets/images/level-${this.level.number}-hero.jpg`
        switch(this.level.number) {
            case 1: this.level.heroPosition = "0% 25%"; break;
            case 2: this.level.heroPosition = "0% 50%"; break;
            case 3: this.level.heroPosition = "0% 75%"; break;
            case 4: this.level.heroPosition = "0% 60%"; break;
            case 5: this.level.heroPosition = "0% 90%"; break;
        }
    }

    postProcess(animeJSON) {
        // TODO: Check the season groupings for the current level. If there are two anime in the same group in this level, only display one.
        animeJSON.forEach(anime => {
            anime.toggleExtraInfo = false;

            if (!anime.background) {
                anime.background = "assets/images/default_background.jpg"
            }

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
        this.animeData = animeJSON;
    }

    isSeasoned(animeID) {
        // Check the season table for the anime ID. If it doesn't exist, return false
        // Check the group's anime IDs for the corresponding downloaded data. If all don't exist, return false
        // Call getSeasoning({group-xxx: [array of animeIDs]})
    }

    getSeasoning(animeIDs) {
        // If everything is in order and isSeasoned is true, return the JSONs of the grouped anime.
    }
}