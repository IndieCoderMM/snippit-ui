import axios from 'axios';

const API_ENDPOINT = import.meta.env.VITE_API_URL;
//  'http://localhost:3000/api/v1/'

const getAllSnippets = () => axios.get(API_ENDPOINT + 'code_snippets');
const getAllContributors = () => axios.get(API_ENDPOINT + 'contributors');

const ApiService = { getAllSnippets, getAllContributors };

export default ApiService;
