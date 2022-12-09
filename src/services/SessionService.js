import http from "./http-common";

class SessionService {
  insert(data, token) {
    return http.post("/test-session/insert", data, { headers: { Authorization: token }});
  }
  find(param) {
    return http.get("/test-session", param);
  }
  findById(id) {
    return http.get(`/test-session/${id}`);
  }
  update(id, data, token) {
    return http.put(`/test-session/${id}`, data, { headers: { Authorization: token }});
  }
  delete(id, data, token) {
    return http.put(`/test-session/${id}`, { headers: { Authorization: token }});
  }
}
export default new SessionService();
