import axios from 'axios';

export const getCats = (category) => {
	let URL;
	if (category) {
		URL = `https://api.thecatapi.com/v1/images/search?limit=10&category_ids=${category}`;
	} else {
		URL = 'https://api.thecatapi.com/v1/images/search?limit=10';
	}

	return axios.get(URL)
		.then((response) => {
			return response.data;
		})
		.catch(err => console.log(err));
};
