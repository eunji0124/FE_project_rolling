 📖 API 사용법 가이드
 ============================================

 🔹 기본 사용법:
 import { api, teamApi } from './api/axios';

 const fetchData = async () => {
   try {
     const response = await api.get('/endpoint');
     console.log(response.data);
   } catch (error) {
     console.error(error);
   }
 };

 🔹 GET - 데이터 가져오기 (조회)
 //공통 API 예시
 const getUsers = async () => {
   const response = await api.get('/users');
   return response.data;
 };
 // 팀 API 예시
const getMessages = async (messageId) => {
  const response = await teamApi.get(`/messages/${messageId}`);
  return response.data;
};

 🔹 POST - 새 데이터 생성
 const createUser = async (userData) => {
   const response = await api.post('/users', {
     name: '홍길동',
     email: 'hong@example.com'
   });
   return response.data;
 };

 🔹 PUT - 데이터 전체 수정
 const updateUser = async (userId, userData) => {
   const response = await api.put(`/users/${userId}`, userData);
   return response.data;
 };

 🔹 PATCH - 데이터 부분 수정
 const updateUserName = async (userId, name) => {
   const response = await api.patch(`/users/${userId}`, { name });
   return response.data;
 };

 🔹 DELETE - 데이터 삭제
 const deleteUser = async (userId) => {
   await api.delete(`/users/${userId}`);
 };

 ⚠️ 주의사항:
 1. 항상 async/await와 try/catch 함께 사용하기
 2. URL에는 앞에 '/' 붙이기 (예: '/users', '/posts/123')
 3. baseURL이 자동으로 붙으니까 전체 URL 쓰지 말기
 4. 공통 API인지, 팀 API인지 먼저 확인 후 선택해서 호출하기