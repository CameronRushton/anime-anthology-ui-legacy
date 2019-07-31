import { inject, PLATFORM } from "aurelia-framework";
import { Router } from "aurelia-router"
import {activationStrategy} from 'aurelia-router';

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
				moduleId: PLATFORM.moduleName('pages/level/level'),
				activationStrategy: activationStrategy.replace,
				title: "Level One",
			},
			{
				route: 'level-two',
				moduleId: PLATFORM.moduleName('pages/level/level'),
				activationStrategy: activationStrategy.replace,
				title: "Level Two",
			},
			{
				route: 'level-three',
				moduleId: PLATFORM.moduleName('pages/level/level'),
				activationStrategy: activationStrategy.replace,
				title: "Level Three",
			},
			{
				route: 'level-four',
				moduleId: PLATFORM.moduleName('pages/level/level'),
				activationStrategy: activationStrategy.replace,
				title: "Level Four",
			},
			{
				route: 'level-five',
				moduleId: PLATFORM.moduleName('pages/level/level'),
				activationStrategy: activationStrategy.replace,
				title: "Level Five",
			}
		]);
	}

}

