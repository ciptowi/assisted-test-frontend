import http from "./http-common";

class ParticipantServices {
  insert(data) {
    return http.post("/participant/insert", data);
  }
  find(nik) {
    return http.get(`/participant?nik=${nik}`);
  }
  findById(id) {
    return http.get(`/participant/${id}`);
  }
  update(id, data) {
    return http.put(`/participant/${id}`, data);
  }
}
export default new ParticipantServices();
