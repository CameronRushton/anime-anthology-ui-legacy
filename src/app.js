
export class App {

	constructor() {
    this.message = "Hello world!"
	}

	configureRouter(config, router) {
		config.title = "Anime Anthology";
		config.options.pushState = true;
		config.options.root = "/";
		// function step() {
		// 	return step.run;
		// }
		// step.run = (navigationInstruction, next) => {
		// 	this.topLogo = true;
		// 	this.darkBackground = navigationInstruction.config.settings.skydrop;
		// 	this.transparentAppHeader = navigationInstruction.config.settings.transparentAppHeader;
		// 	if (navigationInstruction.config.moduleId.indexOf("pages/index") >= 0) {
		// 		this.topLogo = false;
		// 	}
		// 	return next();
		// };
		// config.addPreActivateStep(step);
		// config.addPipelineStep('authorize', AuthorizeStep);
		config.map([
			// {
			// 	route: "level-one",
			// 	name: "level-one",
			// 	moduleId: PLATFORM.moduleName("pages/level-one/level-one"),
			// 	nav: false,
			// 	title: "Level One",
			// }
		]);
		this.router = router;
	}

}

