import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnimeManager } from 'managers/anime-manager';

@inject(Router, AnimeManager)
export class Home {

    anime = {
        'name': 'unknown',
        'description': 'default description'
    }
    buddies = []

    constructor(router, animeManager) {
        this.router = router;
        this.animeManager = animeManager;
    }

    attached() {
       
    }

    addAnime() {
        this.animeManager.createAnime(this.anime)
    }

    getAnime() {
        this.animeManager.getAnime(this.anime.name)
    }

    deleteBuddy() {
        // this.animeManager.deleteBuddy(2).then(result => {
        //     this.buddies = "Buddy 1 deleted";
        // }).catch(error => {
        //     console.log('Error deleting buddy');
        //     console.log(error);
        // });
        this.animeManager.getBuddies().then(result => {
            this.buddies = result.buddies;
        }).catch(error => {
            console.log('Error getting buddies');
            console.log(error);
        });
    }
}