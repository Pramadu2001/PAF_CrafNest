import axios from 'axios';

const API_URL = 'http://localhost:8080/api/progress';

export const createProgress = (progress) => {
  return axios.post(API_URL, progress);
};

export const getAllProgress = () => {
  return axios.get(API_URL);
};

export const updateProgress = (id, progress) => {
  return axios.put(`${API_URL}/${id}`, progress);
};

export const deleteProgress = (id) => {
  return axios.delete(`${API_URL}/${id}`);
};