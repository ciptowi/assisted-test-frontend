import http from "./http-common";

class QuestionServices {
  q_insert(data) {
    return http.post("/question/insert", data);
  }
  q_find(param) {
    return http.get("/question", param);
  }
  q_findById(id) {
    return http.get(`/question/${id}`);
  }
  q_update(id, data) {
    return http.put(`/question/${id}`, data);
  }
  q_delete(id, data) {
    return http.delete(`/question/${id}`, data);
  }
  a_insert(data) {
    return http.post("/answer/insert", data);
  }
  a_find(param) {
    return http.get("/answer", param);
  }
  a_findById(id) {
    return http.get(`/answer/${id}`);
  }
  a_update(id, data) {
    return http.put(`/answer/${id}`, data);
  }
  a_delete(id, data) {
    return http.delete(`/answer/${id}`, data);
  }
}
export default new QuestionServices();
