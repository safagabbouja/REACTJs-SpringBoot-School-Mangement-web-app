import axios from "axios";
//tout notes tbdel url
const REST_API_BASE_URL = 'http://localhost:8082/actualites'
export const listactualite = () => axios.get(REST_API_BASE_URL);
//deletenote 
export const deleteactualite = (actualiteId) => axios.delete(REST_API_BASE_URL + '/' + actualiteId)