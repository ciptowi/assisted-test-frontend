import http from "./http-common";

class SessionService {
  insert(data) {
    return http.post("/test-session/insert", data);
  }
  find(param) {
    return http.get("/test-session", param);
  }
  findById(id) {
    return http.get(`/test-session/${id}`);
  }
  update(id, data) {
    return http.put(`/test-session/${id}`, data);
  }
}
export default new SessionService();
