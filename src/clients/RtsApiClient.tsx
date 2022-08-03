import axios from 'axios';

const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
}

const RtsApiClient = {
    getStories: async (searchTerm:string) => {
        const { data } = await axios.get(`http://hn.algolia.com/api/v1/search?query=${searchTerm}&tags=story`, {
            headers: HEADERS,
        });

        return data;
    }
};

export default RtsApiClient;