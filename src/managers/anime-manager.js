
export class AnimeManager {
    constructor() {
        
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
}
