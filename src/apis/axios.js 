//사용방법 README.md 참고

import axios from 'axios';

// 공용 에러 핸들러
const handleError = (error) => {
  if (error.response) {
    console.error('API Error:', error.response.status, error.response.data);
  } else if (error.request) {
    console.error('Network Error:', error.message);
  } else {
    console.error('Error:', error.message);
  }
  return Promise.reject(error);
};

// 1. 기본 API (공통)
export const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// 2. 팀 전용 API
export const teamClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL_TEAM,
  headers: {
    'Content-Type': 'application/json',
  },
  timeout: 5000,
});

// 인터셉터 등록 (공통 적용)
apiClient.interceptors.response.use((res) => res, handleError);
teamClient.interceptors.response.use((res) => res, handleError);

// 공통 API 함수
export const api = {
  get: (url, config = {}) => apiClient.get(url, config),
  post: (url, data, config = {}) => apiClient.post(url, data, config),
  put: (url, data, config = {}) => apiClient.put(url, data, config),
  patch: (url, data, config = {}) => apiClient.patch(url, data, config),
  delete: (url, config = {}) => apiClient.delete(url, config),
};

// 팀 전용 API 함수
export const teamApi = {
  get: (url, config = {}) => teamClient.get(url, config),
  post: (url, data, config = {}) => teamClient.post(url, data, config),
  put: (url, data, config = {}) => teamClient.put(url, data, config),
  patch: (url, data, config = {}) => teamClient.patch(url, data, config),
  delete: (url, config = {}) => teamClient.delete(url, config),
};
