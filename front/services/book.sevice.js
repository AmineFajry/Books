import axios from 'axios';
import { Book } from '../components/Detail.vue';

const url = 'http://localhost:3000';

export function getBook() {
    return axios
      .get(`${url}/books`)
      .then((response) => response.data.map((todo) => new Book(todo.id)))
      .catch((err) => []);
}

export function addBook(name) {
    return axios
      .post(`${url}/books`, { name: name })
      .then((response) => new Book(response.data.id));
}

  
export function updateBook(id) {
return axios.patch(`${url}/books/${id}`);
}

  

export function deleteBook(id) {
    return axios.delete(`${url}/books/${id}`);
}
  