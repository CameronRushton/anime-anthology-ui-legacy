import { inject } from 'aurelia-framework';
import { Router } from "aurelia-router"
import { AnimeManager } from 'managers/anime-manager';

@inject(Router, AnimeManager)
export class Home {

    anime = {
        'name': 'unknown',
        'description': 'default description'
    }

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
}