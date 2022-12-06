import http from "./http-common";

class CategoryService {
  insert(data) {
    return http.post("/category/insert", data);
  }
  find(param) {
    return http.get("/category", param);
  }
  findById(id) {
    return http.get(`/category/${id}`);
  }
  update(id, data) {
    return http.put(`/category/${id}`, data);
  }
}
export default new CategoryService();
