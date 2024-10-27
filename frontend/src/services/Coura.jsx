import axios from "axios";

const REST_API_BASE_URL = 'http://localhost:8082/cours';

export const listcour = () => axios.get(REST_API_BASE_URL);

export const deletecour = (courId) => axios.delete(REST_API_BASE_URL + '/' + courId);
