import http from "./http-common";

class CategoryService {
  insert(data, token) {
    return http.post(`/category/insert`, data, { headers: { Authorization: token }});
  }
  find(status) {
    return http.get(`/category?status=${status}`);
  }
  findById(id) {
    return http.get(`/category/${id}`);
  }
  update(id, data, token) {
    return http.put(`/category/${id}`, data, { headers: { Authorization: token }});
  }
}
export default new CategoryService();
