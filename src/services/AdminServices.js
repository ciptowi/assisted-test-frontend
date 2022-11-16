import http from "./http-common";

class AdminService {
  register(data) {
    return http.post("/admin/register", data);
  }
  login(data) {
    return http.post("/admin/login", data);
  }
  update(data) {
    return http.put("/admin/update", data);
  }
}
export default new AdminService();
