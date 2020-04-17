import axios from 'axios';

const ugCasesUrl = 'https://corona.lmao.ninja/v2/countries/uganda?yesterday=true';
const apiRequest = axios.create({
  baseURL: ugCasesUrl,
});

const casesApi = {
  getCases: async () => {
    const response = await apiRequest.get('/');
    return response.data;
  },
};

export default casesApi;
