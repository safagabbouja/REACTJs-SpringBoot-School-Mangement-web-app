import axios from "axios";
//tout notes tbdel url
const REST_API_BASE_URL = 'http://localhost:8082/notes'
export const listnote = () => axios.get(REST_API_BASE_URL);
//deletenote 
export const deletenote = (noteId) => axios.delete(REST_API_BASE_URL + '/' + noteId)