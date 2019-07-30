import { inject, PLATFORM } from "aurelia-framework";
import { Router } from "aurelia-router"

@inject(Router)
export class App {

	constructor(router) {
		this.router = router;
	}

	navigateToRoute() {
		this.router.navigateToRoute('level-one')
	}

	configureRouter(config, router) {
		config.title = "Anime Anthology";
		config.options.pushState = true;
		config.options.root = "/";
		config.map([
			{
				route: '/',
				name: 'home',
				moduleId: PLATFORM.moduleName('pages/home/home'),
				title: "Home",
			},
			{
				route: 'level-one',
				name: 'level-one',
				moduleId: PLATFORM.moduleName('pages/level-one/level-one'),
				title: "Level One",
			}
		]);
	}

}

