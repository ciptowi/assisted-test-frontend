import http from "./http-common";

class ParticipantServices {
  insert(data) {
    return http.post("/participant/insert", data);
  }
  find(param) {
    return http.get("/participant", param);
  }
  findById(id) {
    return http.get(`/participant/${id}`);
  }
  update(id, data) {
    return http.put(`/participant/${id}`, data);
  }
}
export default new ParticipantServices();
