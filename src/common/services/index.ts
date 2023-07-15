import axios from 'axios';

const API_ENDPOINT = 'http://localhost:3000/api/';

const getAllSnippets = () => axios.get(API_ENDPOINT + 'code_snippets');

const ApiService = { getAllSnippets };

export default ApiService;
