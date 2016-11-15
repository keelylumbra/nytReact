// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require('axios');





// Helper Functions (in this case the only one is runQuery)
var helpers = {

	runQuery: function(term, start, end){

		console.log(this.term  +  this.start + this.end);

		//Figure out the geolocation
		var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + this.term + "?begin_date=" + this.start + "?end_date=" + this.end

		return axios.get(queryURL)
			.then(function(response){

				console.log(response);

					return response.data.results


		})

	}

}


// We export the helpers function (which contains getGithubInfo)
module.exports = helpers;