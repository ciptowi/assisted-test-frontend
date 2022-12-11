import http from "./http-common";

class SessionService {
  insert(data, token) {
    return http.post("/test-session/insert", data, { headers: { Authorization: token }});
  }
  find(status) {
    return http.get(`/test-session?status=${status}`);
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
