import { AbstractManager } from "./abstract-manager";
import { HttpClient } from "aurelia-fetch-client";
import { inject } from "aurelia-framework";

@inject(HttpClient)
export class AnimeManager extends AbstractManager{
    constructor(httpClient) {
		super(httpClient);
	}

	createAnime(anime) {
		var options = {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(anime)
		};
		return this.httpClient.fetch(`api/admin/anime`, options)
		.then(this.handleError)
		.then(this.json);
	}

	getAnime(id) {
		// var options = {
		// 	method: "GET",
		// 	headers: {
		// 		"Content-Type": "application/json"
		// 	},
		// 	body: JSON.stringify(id)
		// };
		// return this.httpClient.fetch(`api/admin/anime`, options)
		// 	.then(this.handleError)
		// 	.then(this.json);

		return this.httpClient.fetch(`api/admin/anime/${id}`)
			.then(this.handleError)
			.then(this.json);
	}

	deleteAnime(id) {
		var options = {
			method: "DELETE"
		};
		return this.httpClient.fetch(`api/admin/anime/${id}`, options)
			.then(this.handleError);
	}
	
	getCurrentlyWatching() {
		return fetch("/assets/currently_watching.json")
			.then(response => {
				return response.json()
			}).then(payload => {
				return payload
			});
	}

    getData(index) {
		return fetch("/assets/anime.json")
			.then(response => {
				return response.json()
			}).then(payload => {
				return payload[index]
			});
	}
	
	getSeasons() {
		return fetch("/assets/seasoning.json")
			.then(response => {
				return response.json()
			}).then(payload => {
				return payload
			});
	}

	deleteBuddy(id) {
		var options = {
			method: "DELETE"
		};

		return this.httpClient.fetch(`delete?id=${id}`, options)
			.then(this.handleError)
			.then(this.json);
	}

	getBuddies() {
		var options = {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			},
		};

		return this.httpClient.fetch(`buddies`, options)
			.then(this.handleError)
			.then(this.json);
	}
}
