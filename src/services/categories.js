import axios from 'axios';

export const getCategories = () => {
	const URL = 'https://api.thecatapi.com/v1/categories';

	return axios.get(URL)
		.then((response) => {
			return response.data;
		})
		.catch(err => console.log(err));
};
